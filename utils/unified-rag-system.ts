// Unified RAG System - Complete Flow with Vectorization, Retrieval, and Reasoning
// User Question → Vectorization → Vector Database → MMR Retrieval → LLM Reasoning → Answer

import { embedText, embedTexts, getEmbeddingApiKey } from "./embedding-service"
import { retrieveWithMMR, retrieveWithMMRAndFilters } from "./mmr-retriever"
import { getVectorDatabase, type VectorStoreItem } from "./vector-db"
import { reasonWithLLM, getLLMApiKey } from "@/services/llm-service"
import { parseIntent } from "./intent-parser"
import {
  queryAttendance,
  querySchedule,
  queryFees,
  queryAcademics,
} from "./query-engine"
import type { Student } from "@/types"

export interface RAGSystemConfig {
  embeddingApiKey?: string
  llmApiKey?: string
  embeddingModel?: string
  llmModel?: string
  mmrLambda?: number // 0-1: higher = more relevance focus, lower = more diversity
  topK?: number
}

export interface VectorizedDocument {
  id: string
  content: string
  embedding?: number[]
  source: "attendance" | "fees" | "schedule" | "academics" | "faq" | "policy"
  metadata: Record<string, any>
  timestamp: Date
}

export interface RAGResponse {
  answer: string
  retrievedDocuments: Array<{
    id: string
    content: string
    relevance: number
    source: string
  }>
  reasoning: {
    query: string
    intent: string
    confidence: number
    diversityScore: number
  }
  metadata: {
    processingTime: number
    embeddingTime: number
    retrievalTime: number
    reasoningTime: number
    vectorsUsed: number
  }
}

/**
 * Initialize RAG system with sample college management documents
 */
export const initializeRAGSystem = async (
  config: RAGSystemConfig = {},
): Promise<void> => {
  const db = getVectorDatabase()
  db.clear()

  // Sample college management documents for vector database
  const sampleDocuments: VectorizedDocument[] = [
    {
      id: "attendance-policy-1",
      content:
        "College attendance policy: Students must maintain minimum 75% attendance. Below 75% attendance may result in academic probation.",
      source: "policy",
      metadata: { category: "attendance", type: "policy" },
      timestamp: new Date(),
    },
    {
      id: "attendance-improve-1",
      content:
        "To improve attendance: 1) Contact your department head 2) Provide medical certificates if applicable 3) Attend make-up sessions 4) Request attendance waiver if eligible",
      source: "attendance",
      metadata: { category: "attendance", type: "advice" },
      timestamp: new Date(),
    },
    {
      id: "fee-payment-1",
      content:
        "Fee payment options: You can pay through online portal, demand draft, or direct bank transfer. Late fee payment may incur 5% penalty. Payment deadline is before end of semester.",
      source: "fees",
      metadata: { category: "fees", type: "policy" },
      timestamp: new Date(),
    },
    {
      id: "fee-extension-1",
      content:
        "Fee extension request: To request fee payment extension, submit form with supporting documents to the finance office. Extensions are usually granted for 2 weeks.",
      source: "fees",
      metadata: { category: "fees", type: "advice" },
      timestamp: new Date(),
    },
    {
      id: "academics-gpa-1",
      content:
        "GPA calculation: GPA is calculated from all semester grades. A = 4.0, B = 3.0, C = 2.0, D = 1.0, F = 0.0. Minimum GPA to stay in good standing is 2.0.",
      source: "academics",
      metadata: { category: "academics", type: "info" },
      timestamp: new Date(),
    },
    {
      id: "academics-improvement-1",
      content:
        "Grade improvement: You can retake courses where you scored D or F. The highest grade will be considered. Visit the registrar office for course re-registration.",
      source: "academics",
      metadata: { category: "academics", type: "advice" },
      timestamp: new Date(),
    },
    {
      id: "schedule-change-1",
      content:
        "Schedule changes: To change your class schedule, submit a form before the add/drop deadline (usually 2 weeks into semester). Changes after deadline require dean approval.",
      source: "schedule",
      metadata: { category: "schedule", type: "policy" },
      timestamp: new Date(),
    },
    {
      id: "probation-definition-1",
      content:
        "Academic probation: Students placed on probation if GPA falls below 2.0. During probation, students must maintain minimum 2.5 GPA. Failure to do so may result in dismissal.",
      source: "academics",
      metadata: { category: "academics", type: "policy" },
      timestamp: new Date(),
    },
  ]

  // Vectorize all documents
  const embeddingApiKey = config.embeddingApiKey || getEmbeddingApiKey()

  for (const doc of sampleDocuments) {
    const embResult = await embedText(doc.content, {
      apiKey: embeddingApiKey || undefined,
      model: config.embeddingModel,
    })

    if (embResult.success && embResult.embedding) {
      const vectorItem: VectorStoreItem = {
        id: doc.id,
        text: doc.content,
        embedding: embResult.embedding,
        metadata: { ...doc.metadata, source: doc.source },
        timestamp: doc.timestamp,
      }
      db.addVector(vectorItem)
    }
  }

  console.log(`[RAG System] Initialized with ${sampleDocuments.length} documents`)
}

/**
 * Main RAG Pipeline: Question → Vectorization → Retrieval → Reasoning
 */
export const processQueryWithRAG = async (
  userQuestion: string,
  currentStudent: Student | null,
  config: RAGSystemConfig = {},
): Promise<RAGResponse> => {
  const totalStartTime = Date.now()

  // Configuration defaults
  const embeddingApiKey = config.embeddingApiKey || getEmbeddingApiKey()
  const llmApiKey = config.llmApiKey || getLLMApiKey()
  const mmrLambda = config.mmrLambda ?? 0.7
  const topK = config.topK ?? 5

  // Step 1: Parse user intent
  const intentResult = parseIntent(userQuestion)

  // Step 2: Vectorize the user question
  const embeddingStartTime = Date.now()
  const embeddingResult = await embedText(userQuestion, {
    apiKey: embeddingApiKey || undefined,
    model: config.embeddingModel,
  })
  const embeddingTime = Date.now() - embeddingStartTime

  if (!embeddingResult.success || !embeddingResult.embedding) {
    return {
      answer: "I encountered an error processing your question. Please try again.",
      retrievedDocuments: [],
      reasoning: {
        query: userQuestion,
        intent: intentResult.intent,
        confidence: 0,
        diversityScore: 0,
      },
      metadata: {
        processingTime: Date.now() - totalStartTime,
        embeddingTime,
        retrievalTime: 0,
        reasoningTime: 0,
        vectorsUsed: 0,
      },
    }
  }

  // Step 3: Retrieve relevant documents using MMR (Maximum Marginal Relevance)
  const retrievalStartTime = Date.now()

  let retrievedDocs: Array<{
    id: string
    content: string
    relevance: number
    source: string
  }> = []
  let diversityScore = 0

  // Try vector search first
  const db = getVectorDatabase()
  if (db.getSize() > 0) {
    const retrievalResult = retrieveWithMMR(embeddingResult.embedding, {
      k: topK,
      lambda: mmrLambda,
      fetchK: Math.max(topK * 4, 20),
    })

    retrievedDocs = retrievalResult.results.map((result) => ({
      id: result.id,
      content: result.text,
      relevance: result.score,
      source: result.metadata?.source || "unknown",
    }))

    diversityScore = retrievalResult.diversityScore
  }

  const retrievalTime = Date.now() - retrievalStartTime

  // Step 4: Get structured data based on intent if student info available
  let structuredContext = ""

  if (currentStudent) {
    switch (intentResult.intent) {
      case "ATTENDANCE":
        const attendanceResult = queryAttendance(currentStudent.id)
        structuredContext += `\nCurrent Attendance Data: ${JSON.stringify(attendanceResult.data)}`
        break

      case "FEES":
        const feesResult = queryFees(currentStudent.id)
        structuredContext += `\nCurrent Fees Data: ${JSON.stringify(feesResult.data)}`
        break

      case "SCHEDULE":
        const scheduleResult = querySchedule(currentStudent.id)
        structuredContext += `\nCurrent Schedule: ${JSON.stringify(scheduleResult.data)}`
        break

      case "ACADEMICS":
        const academicsResult = queryAcademics(currentStudent.id)
        structuredContext += `\nCurrent Academic Data: ${JSON.stringify(academicsResult.data)}`
        break
    }
  }

  // Step 5: Prepare context from retrieved documents
  const retrievedContext = retrievedDocs
    .map((doc, idx) => `[${idx + 1}] (Relevance: ${(doc.relevance * 100).toFixed(1)}%) ${doc.content}`)
    .join("\n\n")

  const fullContext = `User Query: "${userQuestion}"\nStudent: ${
    currentStudent?.name || "Not identified"
  }\nIntent: ${intentResult.intent}\n\nRetrieved Knowledge Base:\n${retrievedContext}${
    structuredContext
  }`

  // Step 6: Contact LLM for detailed reasoning and answer
  const reasoningStartTime = Date.now()
  const llmResponse = await reasonWithLLM(userQuestion, fullContext, {
    apiKey: llmApiKey || undefined,
    model: config.llmModel,
    temperature: 0.7,
    additionalContext: {
      intent: intentResult.intent,
      studentInfo: currentStudent,
      retrievedDocs,
      diversityScore,
    },
  })
  const reasoningTime = Date.now() - reasoningStartTime

  // Calculate confidence based on retrieval relevance
  const avgRelevance =
    retrievedDocs.length > 0
      ? retrievedDocs.reduce((sum, doc) => sum + doc.relevance, 0) / retrievedDocs.length
      : 0

  return {
    answer: llmResponse.content,
    retrievedDocuments: retrievedDocs,
    reasoning: {
      query: userQuestion,
      intent: intentResult.intent,
      confidence: avgRelevance,
      diversityScore,
    },
    metadata: {
      processingTime: Date.now() - totalStartTime,
      embeddingTime,
      retrievalTime,
      reasoningTime,
      vectorsUsed: retrievedDocs.length,
    },
  }
}

/**
 * Add new documents to RAG system's vector database
 */
export const addDocumentsToRAG = async (
  documents: VectorizedDocument[],
  config: RAGSystemConfig = {},
): Promise<number> => {
  const embeddingApiKey = config.embeddingApiKey || getEmbeddingApiKey()
  const db = getVectorDatabase()

  let added = 0

  for (const doc of documents) {
    const embResult = await embedText(doc.content, {
      apiKey: embeddingApiKey || undefined,
      model: config.embeddingModel,
    })

    if (embResult.success && embResult.embedding) {
      const vectorItem: VectorStoreItem = {
        id: doc.id,
        text: doc.content,
        embedding: embResult.embedding,
        metadata: { ...doc.metadata, source: doc.source },
        timestamp: doc.timestamp,
      }
      db.addVector(vectorItem)
      added++
    }
  }

  console.log(`[RAG System] Added ${added}/${documents.length} documents`)
  return added
}

/**
 * Get RAG system statistics
 */
export const getRAGStats = () => {
  const db = getVectorDatabase()
  const stats = db.getStats()

  return {
    ...stats,
    systemStatus: "operational",
    timestamp: new Date().toISOString(),
  }
}

/**
 * Clear all vectors from RAG system
 */
export const clearRAGSystem = () => {
  const db = getVectorDatabase()
  db.clear()
  console.log("[RAG System] All vectors cleared")
}

export default {
  initializeRAGSystem,
  processQueryWithRAG,
  addDocumentsToRAG,
  getRAGStats,
  clearRAGSystem,
}
