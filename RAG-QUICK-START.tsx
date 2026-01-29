// Quick Start: RAG System Implementation in Chat Component
// Copy-paste ready code for integrating RAG into your chat interface

import "use client"

import { useEffect, useState } from "react"
import { getRAGChatManager } from "@/utils/rag-chat-manager"
import type { Student } from "@/types"

/**
 * STEP 1: Setup RAG System
 * Call this once when app initializes
 */
export const setupRAGSystem = async (embeddingKey: string, llmKey: string) => {
  const ragChat = getRAGChatManager()

  await ragChat.initialize({
    embeddingApiKey: embeddingKey,
    llmApiKey: llmKey,
    enableVectorSearch: true,
  })

  console.log("✅ RAG System Ready")
  console.log("Stats:", ragChat.getStats())
}

/**
 * STEP 2: Use RAG in Chat Hook
 */
export const useRAGChat = (currentStudent: Student | null) => {
  const [messages, setMessages] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const ragChat = getRAGChatManager()

  const sendMessage = async (userMessage: string) => {
    setLoading(true)

    try {
      // Process message through RAG system
      const response = await ragChat.processMessage(userMessage, currentStudent)

      // Update message history
      setMessages((prev) => [...prev, response])

      // Extract useful information from RAG response
      console.log("📚 Retrieved Documents:", response.retrievedDocuments)
      console.log("🧠 Confidence Score:", response.reasoning?.confidence)
      console.log("🌈 Diversity Score:", response.reasoning?.diversityScore)

      return response
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setLoading(false)
    }
  }

  return {
    messages,
    loading,
    sendMessage,
  }
}

/**
 * STEP 3: React Component Example
 */
export const RAGChatComponent = ({ currentStudent }: { currentStudent: Student | null }) => {
  const { messages, loading, sendMessage } = useRAGChat(currentStudent)
  const [input, setInput] = useState("")

  const handleSend = async () => {
    if (!input.trim()) return

    await sendMessage(input)
    setInput("")
  }

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-md p-3 rounded-lg ${
                msg.role === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-900"
              }`}
            >
              <p>{msg.content}</p>

              {/* Show retrieved documents for assistant messages */}
              {msg.role === "assistant" && msg.retrievedDocuments && (
                <div className="mt-2 text-xs opacity-75">
                  📚 Retrieved {msg.retrievedDocuments.length} documents
                  <br />
                  Confidence: {(msg.reasoning?.confidence * 100).toFixed(1)}%
                </div>
              )}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-200 text-gray-900 p-3 rounded-lg">
              ⏳ Thinking...
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="border-t p-4 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Ask me anything about college..."
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loading}
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
        >
          Send
        </button>
      </div>
    </div>
  )
}

/**
 * STEP 4: Example Response Format
 */
export const exampleRAGResponse = {
  answer:
    "Based on college policy, you can improve your attendance by contacting your department head with medical certificates if applicable, and attending make-up sessions. Your current attendance is below the 75% minimum requirement.",
  retrievedDocuments: [
    {
      id: "attendance-improve-1",
      content:
        "To improve attendance: 1) Contact your department head 2) Provide medical certificates if applicable 3) Attend make-up sessions 4) Request attendance waiver if eligible",
      relevance: 0.95,
      source: "attendance",
    },
    {
      id: "attendance-policy-1",
      content:
        "College attendance policy: Students must maintain minimum 75% attendance. Below 75% attendance may result in academic probation.",
      relevance: 0.92,
      source: "policy",
    },
  ],
  reasoning: {
    query: "How can I improve my attendance?",
    intent: "ATTENDANCE",
    confidence: 0.935,
    diversityScore: 0.42,
  },
  metadata: {
    processingTime: 245,
    embeddingTime: 45,
    retrievalTime: 78,
    reasoningTime: 122,
    vectorsUsed: 2,
  },
}

/**
 * STEP 5: Performance Monitoring
 */
export const monitorRAGPerformance = (response: typeof exampleRAGResponse) => {
  const { metadata, reasoning } = response

  console.group("📊 RAG Performance Metrics")
  console.log(`⚡ Total Time: ${metadata.processingTime}ms`)
  console.log(`  📝 Embedding: ${metadata.embeddingTime}ms`)
  console.log(`  🔍 Retrieval: ${metadata.retrievalTime}ms`)
  console.log(`  🧠 Reasoning: ${metadata.reasoningTime}ms`)
  console.log(`  📚 Vectors Used: ${metadata.vectorsUsed}`)
  console.log(`✅ Confidence: ${(reasoning.confidence * 100).toFixed(1)}%`)
  console.log(`🌈 Diversity: ${(reasoning.diversityScore * 100).toFixed(1)}%`)
  console.groupEnd()
}

/**
 * STEP 6: API Key Setup
 */
export const configureAPIKeys = () => {
  // Option A: Use environment variables
  const embeddingKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY || ""
  const llmKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY || ""

  // Option B: Get from localStorage (user provided)
  // const embeddingKey = localStorage.getItem("embedding_api_key")
  // const llmKey = localStorage.getItem("llm_api_key")

  return { embeddingKey, llmKey }
}

/**
 * STEP 7: Full Integration Example
 */
export const FullRAGIntegration = () => {
  const [initialized, setInitialized] = useState(false)
  const [student] = useState<Student | null>(null)

  useEffect(() => {
    const init = async () => {
      const { embeddingKey, llmKey } = configureAPIKeys()

      if (embeddingKey && llmKey) {
        await setupRAGSystem(embeddingKey, llmKey)
        setInitialized(true)
      } else {
        console.warn("⚠️ API keys not configured")
      }
    }

    init()
  }, [])

  if (!initialized) {
    return <div className="p-4">⏳ Initializing RAG System...</div>
  }

  return <RAGChatComponent currentStudent={student} />
}

export default FullRAGIntegration

/**
 * COMMON QUESTIONS & ANSWERS
 *
 * Q: What's the difference between this and basic RAG?
 * A: This system adds Maximum Marginal Relevance (MMR) retrieval,
 *    which balances relevance with diversity to avoid redundant results.
 *
 * Q: How does vectorization work?
 * A: Questions are converted to 384-dimensional vectors using embedding models.
 *    These vectors capture semantic meaning for similarity search.
 *
 * Q: Why use MMR over simple similarity search?
 * A: MMR prevents multiple similar documents from being returned.
 *    It diversifies results while maintaining relevance.
 *
 * Q: Can I use without OpenAI API?
 * A: Yes! System falls back to local deterministic embeddings.
 *    But LLM reasoning requires an API.
 *
 * Q: How do I add custom documents?
 * A: Use addDocumentsToRAG() function with your document list.
 *    System vectorizes them automatically.
 *
 * Q: What's the confidence score?
 * A: Average relevance of retrieved documents (0-1).
 *    Higher = more relevant results found.
 *
 * Q: What's diversity score?
 * A: Measures how different retrieved documents are from each other (0-1).
 *    Higher = more diverse results.
 *
 * Q: How to optimize performance?
 * A: - Reduce topK value (fewer documents to retrieve)
 *    - Use faster LLM model
 *    - Pre-embed documents (done on initialization)
 *    - Add indexes for large datasets
 */
