"use client"

import { useState, useCallback, useRef, useEffect } from "react"
import type { EnhancedMessage, Student } from "@/types"
import { ragEngine } from "@/utils/rag-engine"
import { processQueryWithRAG, initializeRAGSystem } from "@/utils/unified-rag-system"
import { getStudentById, studentsDB } from "@/data/mock-database"
import { reasonWithLLM, isLLMAvailable } from "@/services/llm-service"
import { makeReasoningDecision } from "@/utils/reasoning-engine"

export const useChat = () => {
  const [messages, setMessages] = useState<EnhancedMessage[]>([])
  const [currentStudent, setCurrentStudent] = useState<Student | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [llmMode, setLLMMode] = useState<"data" | "reasoning" | "data+reasoning">("data")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const conversationStateRef = useRef<Record<string, any>>({})
  const ragInitializedRef = useRef(false)

  // Initialize RAG system on mount
  useEffect(() => {
    const initRAG = async () => {
      if (!ragInitializedRef.current) {
        try {
          await initializeRAGSystem({
            mmrLambda: 0.7,
            topK: 5,
          })
          ragInitializedRef.current = true
          console.log("[Chat] RAG system initialized with sample documents")
        } catch (error) {
          console.error("[Chat] Error initializing RAG system:", error)
        }
      }
    }

    initRAG()

    const available = isLLMAvailable()
    setLLMMode(available ? "data+reasoning" : "data")
  }, [])

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  const addMessage = useCallback((content: string, role: "user" | "assistant", metadata?: Partial<EnhancedMessage>) => {
    const message: EnhancedMessage = {
      id: Date.now().toString(),
      content,
      role,
      timestamp: new Date(),
      ...metadata,
    }
    setMessages((prev) => [...prev, message])
    return message
  }, [])

  const sendMessage = useCallback(
    async (userInput: string) => {
      if (!userInput.trim()) return

      // Layer 1: UI Layer - Add user message
      addMessage(userInput, "user")
      setIsLoading(true)

      // Simulate thinking time (100-300ms) for more natural feel
      const thinkingTime = Math.random() * 200 + 100

      // Check if user is identifying themselves
      const studentMatch = Object.values(studentsDB).find((s) => userInput.toLowerCase().includes(s.name.toLowerCase()))

      if (studentMatch && !currentStudent) {
        setCurrentStudent(studentMatch)
        conversationStateRef.current.identifiedStudent = studentMatch.id
      }

      setTimeout(async () => {
        try {
          const selectedStudent = currentStudent || studentMatch || null

          // ============================================
          // STEP 1: VECTORIZE THE QUESTION
          // ============================================
          console.log("[Chat RAG Pipeline] Starting RAG query processing...")
          console.log("[Chat RAG Pipeline] Step 1: Vectorizing question:", userInput)

          // ============================================
          // STEP 2: RETRIEVE FROM VECTOR DATABASE WITH MMR
          // ============================================
          console.log("[Chat RAG Pipeline] Step 2: Retrieving relevant documents from vector database...")

          // ============================================
          // STEP 3: USE LLM WITH RETRIEVED CONTEXT
          // ============================================
          console.log("[Chat RAG Pipeline] Step 3: Processing with RAG system...")

          // Execute the unified RAG pipeline
          const ragResponse = await processQueryWithRAG(
            userInput,
            selectedStudent,
            {
              mmrLambda: 0.7, // Balance between relevance and diversity
              topK: 5, // Retrieve top 5 relevant documents
            },
          )

          console.log("[Chat RAG Pipeline] RAG Response:", {
            retrievedDocs: ragResponse.retrievedDocuments.length,
            intent: ragResponse.reasoning.intent,
            confidence: ragResponse.reasoning.confidence,
            processingTime: ragResponse.metadata.processingTime,
          })

          // Layer 4: Reasoning Decision Layer
          const reasoningDecision = makeReasoningDecision(
            userInput,
            selectedStudent,
            isLLMAvailable(),
            messages,
          )

          let finalResponse = ragResponse.answer
          let llmModeUsed: "data" | "data+reasoning" | "fallback" = "reasoning"

          // Layer 5: Fallback to additional LLM reasoning if needed
          if (reasoningDecision.shouldUseLLM && ragResponse.retrievedDocuments.length > 0) {
            try {
              const contextStr = ragResponse.retrievedDocuments
                .map((doc) => `${doc.source}: ${doc.content}`)
                .join("\n\n")

              const llmResult = await reasonWithLLM(
                userInput,
                `Based on the retrieved documents about college management:\n${contextStr}`,
              )

              if (llmResult.success && llmResult.source === "llm") {
                finalResponse = llmResult.content
                llmModeUsed = "data+reasoning"
                console.log("[Chat RAG Pipeline] Enhanced with LLM reasoning")
              }
            } catch (error) {
              console.error("[Chat RAG Pipeline] LLM enhancement failed:", error)
            }
          }

          // Layer 6: Response Synthesis with metadata
          addMessage(finalResponse, "assistant", {
            llmMode: llmModeUsed,
            structuredContext: {
              intent: ragResponse.reasoning.intent,
              retrievedDocuments: ragResponse.retrievedDocuments,
              confidence: ragResponse.reasoning.confidence,
              diversityScore: ragResponse.reasoning.diversityScore,
            },
            requiresReasoning: reasoningDecision.shouldUseLLM,
            metadata: ragResponse.metadata,
          })

          console.log("[Chat RAG Pipeline] Complete - Response sent to user")
        } catch (error) {
          console.error("[Chat RAG Pipeline] Error:", error)

          // Fallback response if RAG fails
          const fallbackMsg =
            "I encountered an issue processing your question. Please try again or rephrase your question."
          addMessage(fallbackMsg, "assistant", {
            llmMode: "fallback",
          })
        }

        setIsLoading(false)
      }, thinkingTime)
    },
    [addMessage, currentStudent, messages],
  )

  const resetConversation = useCallback(() => {
    setMessages([])
    setCurrentStudent(null)
    conversationStateRef.current = {}
  }, [])

  const selectStudent = useCallback(
    (studentId: string) => {
      const student = getStudentById(studentId)
      if (student) {
        setCurrentStudent(student)
        addMessage(`I've identified you as ${student.name}. How can I help?`, "assistant")
      }
    },
    [addMessage],
  )

  return {
    messages,
    currentStudent,
    isLoading,
    messagesEndRef,
    sendMessage,
    resetConversation,
    selectStudent,
    addMessage,
    llmMode,
  }
}
