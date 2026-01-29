// Enhanced Reasoning Engine - Uses retrieved context for detailed reasoning
// Integrates embeddings, vector database, and LLM for advanced reasoning

import { embedText } from "./embedding-service"
import { retrieveWithMMR, retrieveWithMMRAndFilters, type MMRRetrievalOptions } from "./mmr-retriever"
import { getVectorDatabase, type VectorStoreItem } from "./vector-db"
import { reasonWithLLM } from "@/services/llm-service"

export interface ReasoningInput {
  userQuery: string
  context?: string
  studentInfo?: any
  useVectorSearch?: boolean
  filters?: Record<string, any>
  temperature?: number
}

export interface ReasoningOutput {
  query: string
  reasoning: string
  source: "vectordb" | "fallback"
  retrievedDocuments: Array<{
    id: string
    text: string
    relevance: number
  }>
  confidenceScore: number
  processingTime: number
  diversityScore: number
}

/**
 * Initialize vector database with college management data
 */
export const initializeVectorDatabase = async (
  documents: Array<{
    id: string
    text: string
    metadata?: Record<string, any>
  }>,
  embeddingApiKey?: string,
): Promise<void> => {
  const db = getVectorDatabase()
  db.clear()

  for (const doc of documents) {
    const result = await embedText(doc.text, { apiKey: embeddingApiKey })

    if (result.success && result.embedding) {
      const vectorItem: VectorStoreItem = {
        id: doc.id,
        text: doc.text,
        embedding: result.embedding,
        metadata: doc.metadata || {},
        timestamp: new Date(),
      }
      db.addVector(vectorItem)
    }
  }

  console.log(`[Reasoning Engine] Initialized vector database with ${documents.length} documents`)
}

/**
 * Add single document to vector database
 */
export const addDocumentToVectorDB = async (
  id: string,
  text: string,
  metadata?: Record<string, any>,
  embeddingApiKey?: string,
): Promise<boolean> => {
  const result = await embedText(text, { apiKey: embeddingApiKey })

  if (!result.success || !result.embedding) {
    console.error(`Failed to embed document ${id}:`, result.error)
    return false
  }

  const db = getVectorDatabase()
  const vectorItem: VectorStoreItem = {
    id,
    text,
    embedding: result.embedding,
    metadata: metadata || {},
    timestamp: new Date(),
  }

  db.addVector(vectorItem)
  return true
}

/**
 * Perform semantic reasoning with vector retrieval and LLM
 */
export const performReasoning = async (
  input: ReasoningInput,
  embeddingApiKey?: string,
  llmApiKey?: string,
): Promise<ReasoningOutput> => {
  const startTime = Date.now()

  const query = input.userQuery

  // Step 1: Vectorize the user query
  const embeddingResult = await embedText(query, { apiKey: embeddingApiKey })

  if (!embeddingResult.success || !embeddingResult.embedding) {
    console.error("[Reasoning Engine] Failed to embed query:", embeddingResult.error)

    return {
      query,
      reasoning: input.context || "Unable to process query at this time.",
      source: "fallback",
      retrievedDocuments: [],
      confidenceScore: 0,
      processingTime: Date.now() - startTime,
      diversityScore: 0,
    }
  }

  // Step 2: Retrieve relevant documents using MMR
  const mmrOptions: MMRRetrievalOptions = {
    k: 5,
    lambda: 0.7, // Favor relevance (70%) over diversity (30%)
    fetchK: 20,
  }

  let retrievalResult

  if (input.filters) {
    retrievalResult = retrieveWithMMRAndFilters(embeddingResult.embedding, input.filters, mmrOptions)
  } else {
    retrievalResult = retrieveWithMMR(embeddingResult.embedding, mmrOptions)
  }

  // Step 3: Prepare context from retrieved documents
  const retrievedDocs = retrievalResult.results.map((result) => ({
    id: result.id,
    text: result.text,
    relevance: result.score,
  }))

  const contextFromRetrieval = retrievedDocs
    .map((doc, idx) => `[${idx + 1}] (Relevance: ${(doc.relevance * 100).toFixed(1)}%)\n${doc.text}`)
    .join("\n\n")

  const fullContext = input.context
    ? `${input.context}\n\n=== Retrieved Context ===\n${contextFromRetrieval}`
    : contextFromRetrieval

  // Step 4: Contact LLM for detailed reasoning
  const llmResponse = await reasonWithLLM(query, fullContext, {
    apiKey: llmApiKey,
    model: "gpt-3.5-turbo",
    temperature: input.temperature || 0.7,
    additionalContext: {
      retrievedDocuments: retrievedDocs,
      diversityScore: retrievalResult.diversityScore,
      studentInfo: input.studentInfo,
    },
  })

  // Step 5: Calculate confidence score
  const avgRelevance = retrievedDocs.length > 0
    ? retrievedDocs.reduce((sum, doc) => sum + doc.relevance, 0) / retrievedDocs.length
    : 0
  const confidenceScore = llmResponse.success ? avgRelevance : avgRelevance * 0.5

  return {
    query,
    reasoning: llmResponse.content,
    source: retrievalResult.results.length > 0 ? "vectordb" : "fallback",
    retrievedDocuments: retrievedDocs,
    confidenceScore,
    processingTime: Date.now() - startTime,
    diversityScore: retrievalResult.diversityScore,
  }
}

/**
 * Batch reasoning for multiple queries
 */
export const performBatchReasoning = async (
  inputs: ReasoningInput[],
  embeddingApiKey?: string,
  llmApiKey?: string,
): Promise<ReasoningOutput[]> => {
  const results: ReasoningOutput[] = []

  for (const input of inputs) {
    const result = await performReasoning(input, embeddingApiKey, llmApiKey)
    results.push(result)
  }

  return results
}

/**
 * Get vector database statistics
 */
export const getReasoningStats = () => {
  const db = getVectorDatabase()
  return db.getStats()
}

/**
 * Clear vector database
 */
export const clearReasoningDatabase = () => {
  const db = getVectorDatabase()
  db.clear()
  console.log("[Reasoning Engine] Vector database cleared")
}

/**
 * Query vector database directly with semantic search
 */
export const semanticSearch = async (
  query: string,
  topK?: number,
  embeddingApiKey?: string,
): Promise<Array<{
  id: string
  text: string
  relevance: number
  metadata: Record<string, any>
}>> => {
  const embeddingResult = await embedText(query, { apiKey: embeddingApiKey })

  if (!embeddingResult.success || !embeddingResult.embedding) {
    console.error("[Reasoning Engine] Failed to embed search query:", embeddingResult.error)
    return []
  }

  const db = getVectorDatabase()
  const searchResults = db.search(embeddingResult.embedding, topK || 5)

  return searchResults.map((result) => ({
    id: result.id,
    text: result.text,
    relevance: result.score,
    metadata: result.metadata,
  }))
}

/**
 * Advanced reasoning with custom parameters
 */
export const advancedReasoning = async (
  query: string,
  lambdaValue: number = 0.7, // Trade-off between relevance and diversity
  customContext?: string,
  embeddingApiKey?: string,
  llmApiKey?: string,
): Promise<ReasoningOutput> => {
  const startTime = Date.now()

  const embeddingResult = await embedText(query, { apiKey: embeddingApiKey })

  if (!embeddingResult.success || !embeddingResult.embedding) {
    return {
      query,
      reasoning: customContext || "Unable to process this reasoning request.",
      source: "fallback",
      retrievedDocuments: [],
      confidenceScore: 0,
      processingTime: Date.now() - startTime,
      diversityScore: 0,
    }
  }

  const mmrOptions: MMRRetrievalOptions = {
    k: 10,
    lambda: lambdaValue,
    fetchK: 30,
  }

  const retrievalResult = retrieveWithMMR(embeddingResult.embedding, mmrOptions)
  const retrievedDocs = retrievalResult.results.map((result) => ({
    id: result.id,
    text: result.text,
    relevance: result.score,
  }))

  const contextFromRetrieval = retrievedDocs
    .map((doc, idx) => `[${idx + 1}] ${doc.text}`)
    .join("\n\n")

  const fullContext = customContext
    ? `${customContext}\n\n${contextFromRetrieval}`
    : contextFromRetrieval

  const llmResponse = await reasonWithLLM(query, fullContext, {
    apiKey: llmApiKey,
    temperature: 0.8,
  })

  const avgRelevance = retrievedDocs.length > 0
    ? retrievedDocs.reduce((sum, doc) => sum + doc.relevance, 0) / retrievedDocs.length
    : 0

  return {
    query,
    reasoning: llmResponse.content,
    source: "vectordb",
    retrievedDocuments: retrievedDocs,
    confidenceScore: avgRelevance,
    processingTime: Date.now() - startTime,
    diversityScore: retrievalResult.diversityScore,
  }
}

/**
 * Determines if a query needs LLM reasoning beyond just data retrieval
 * Checks for reasoning keywords and uses conversation history for context
 */
export const makeReasoningDecision = (
  userQuery: string,
  currentStudent: any,
  isLLMAvailable: boolean,
  conversationHistory: any[] = [],
): { shouldUseLLM: boolean; reason: string } => {
  const query = userQuery.toLowerCase().trim()

  // Keywords that indicate reasoning questions
  const reasoningKeywords = [
    "why",
    "how",
    "what if",
    "explain",
    "analyze",
    "compare",
    "recommend",
    "suggest",
    "what should",
    "can you help",
    "advise",
    "think about",
    "consider",
    "evaluate",
  ]

  // Check if query contains reasoning keywords
  const hasReasoningKeyword = reasoningKeywords.some((keyword) => query.includes(keyword))

  // Check if LLM is available
  if (!isLLMAvailable) {
    return {
      shouldUseLLM: false,
      reason: "LLM not available",
    }
  }

  // If query has reasoning keywords, use LLM
  if (hasReasoningKeyword) {
    return {
      shouldUseLLM: true,
      reason: "Contains reasoning keywords",
    }
  }

  // Check if this is a follow-up question (has conversation history)
  const hasFollowUp = conversationHistory && conversationHistory.length > 2
  if (hasFollowUp && query.length < 50) {
    // Short follow-up questions likely need reasoning
    return {
      shouldUseLLM: true,
      reason: "Follow-up question detected",
    }
  }

  // Default: no LLM reasoning needed
  return {
    shouldUseLLM: false,
    reason: "Standard data retrieval query",
  }
}

export default {
  initializeVectorDatabase,
  addDocumentToVectorDB,
  performReasoning,
  performBatchReasoning,
  semanticSearch,
  advancedReasoning,
  getReasoningStats,
  clearReasoningDatabase,
  makeReasoningDecision,
}
