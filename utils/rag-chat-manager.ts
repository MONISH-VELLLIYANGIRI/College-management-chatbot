// RAG Integration Example - Shows how to integrate RAG system into chat
// This is a reference implementation

import {
  initializeRAGSystem,
  processQueryWithRAG,
  getRAGStats,
} from "@/utils/unified-rag-system"
import { setLLMApiKey, getLLMApiKey } from "@/services/llm-service"
import { setEmbeddingApiKey, getEmbeddingApiKey } from "@/utils/embedding-service"
import type { Student } from "@/types"

export interface ChatRAGConfig {
  embeddingApiKey?: string
  llmApiKey?: string
  enableVectorSearch?: boolean
}

export interface ChatMessage {
  id: string
  role: "user" | "assistant"
  content: string
  retrievedDocuments?: Array<{
    id: string
    content: string
    relevance: number
    source: string
  }>
  reasoning?: {
    confidence: number
    diversityScore: number
    intent: string
  }
  timestamp: Date
}

class RAGChatManager {
  private messageHistory: ChatMessage[] = []
  private config: ChatRAGConfig = {
    enableVectorSearch: true,
  }
  private ragInitialized: boolean = false

  /**
   * Initialize RAG chat manager
   */
  async initialize(config: ChatRAGConfig = {}): Promise<void> {
    this.config = { ...this.config, ...config }

    // Set API keys
    if (config.llmApiKey) {
      setLLMApiKey(config.llmApiKey)
    }
    if (config.embeddingApiKey) {
      setEmbeddingApiKey(config.embeddingApiKey)
    }

    // Initialize RAG system
    if (this.config.enableVectorSearch) {
      try {
        await initializeRAGSystem({
          embeddingApiKey: this.config.embeddingApiKey || getEmbeddingApiKey() || undefined,
          llmApiKey: this.config.llmApiKey || getLLMApiKey() || undefined,
          mmrLambda: 0.7, // 70% relevance, 30% diversity
          topK: 5,
        })
        this.ragInitialized = true
        console.log("[RAG Chat] RAG system initialized successfully")
      } catch (error) {
        console.error("[RAG Chat] Failed to initialize RAG system:", error)
        this.ragInitialized = false
      }
    }
  }

  /**
   * Process user message with RAG
   */
  async processMessage(userMessage: string, currentStudent: Student | null): Promise<ChatMessage> {
    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      role: "user",
      content: userMessage,
      timestamp: new Date(),
    }

    this.messageHistory.push(userMsg)

    try {
      if (!this.ragInitialized) {
        // Fallback to simple response if RAG not initialized
        const assistantMsg: ChatMessage = {
          id: `msg-${Date.now() + 1}`,
          role: "assistant",
          content: "RAG system not initialized. Please configure API keys.",
          timestamp: new Date(),
        }
        this.messageHistory.push(assistantMsg)
        return assistantMsg
      }

      // Process with RAG
      const ragResponse = await processQueryWithRAG(userMessage, currentStudent, {
        embeddingApiKey: this.config.embeddingApiKey || getEmbeddingApiKey() || undefined,
        llmApiKey: this.config.llmApiKey || getLLMApiKey() || undefined,
        mmrLambda: 0.7,
        topK: 5,
      })

      const assistantMsg: ChatMessage = {
        id: `msg-${Date.now() + 1}`,
        role: "assistant",
        content: ragResponse.answer,
        retrievedDocuments: ragResponse.retrievedDocuments,
        reasoning: {
          confidence: ragResponse.reasoning.confidence,
          diversityScore: ragResponse.reasoning.diversityScore,
          intent: ragResponse.reasoning.intent,
        },
        timestamp: new Date(),
      }

      this.messageHistory.push(assistantMsg)

      console.log(`[RAG Chat] Response generated in ${ragResponse.metadata.processingTime}ms`)
      console.log(`  - Embedding: ${ragResponse.metadata.embeddingTime}ms`)
      console.log(`  - Retrieval: ${ragResponse.metadata.retrievalTime}ms`)
      console.log(`  - Reasoning: ${ragResponse.metadata.reasoningTime}ms`)
      console.log(`  - Vectors used: ${ragResponse.metadata.vectorsUsed}`)

      return assistantMsg
    } catch (error) {
      console.error("[RAG Chat] Error processing message:", error)

      const errorMsg: ChatMessage = {
        id: `msg-${Date.now() + 1}`,
        role: "assistant",
        content: "An error occurred while processing your request. Please try again.",
        timestamp: new Date(),
      }

      this.messageHistory.push(errorMsg)
      return errorMsg
    }
  }

  /**
   * Get message history
   */
  getHistory(): ChatMessage[] {
    return [...this.messageHistory]
  }

  /**
   * Clear message history
   */
  clearHistory(): void {
    this.messageHistory = []
  }

  /**
   * Get RAG system stats
   */
  getStats() {
    return getRAGStats()
  }
}

// Singleton instance
let ragChatManager: RAGChatManager | null = null

/**
 * Get or create RAG chat manager
 */
export const getRAGChatManager = (): RAGChatManager => {
  if (!ragChatManager) {
    ragChatManager = new RAGChatManager()
  }
  return ragChatManager
}

/**
 * Usage example in React component
 */
export const ChatIntegrationExample = () => {
  const ragChat = getRAGChatManager()

  // Initialize on component mount
  const initializeChat = async () => {
    await ragChat.initialize({
      embeddingApiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
      llmApiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
      enableVectorSearch: true,
    })
  }

  // Send message
  const sendMessage = async (message: string, student: Student | null) => {
    const response = await ragChat.processMessage(message, student)
    return response
  }

  // Get history
  const getHistory = () => {
    return ragChat.getHistory()
  }

  return {
    initializeChat,
    sendMessage,
    getHistory,
    getStats: () => ragChat.getStats(),
  }
}

export default RAGChatManager
