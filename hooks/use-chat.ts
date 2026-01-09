"use client"

import { useState, useCallback, useRef, useEffect } from "react"
import type { EnhancedMessage, Student } from "@/types"
import { ragEngine } from "@/utils/rag-engine"
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

  // Update LLM mode based on availability
  useEffect(() => {
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

      // Simulate thinking time (50-150ms) for more natural feel
      const thinkingTime = Math.random() * 100 + 50

      // Check if user is identifying themselves
      const studentMatch = Object.values(studentsDB).find((s) => userInput.toLowerCase().includes(s.name.toLowerCase()))

      if (studentMatch && !currentStudent) {
        setCurrentStudent(studentMatch)
        conversationStateRef.current.identifiedStudent = studentMatch.id
      }

      setTimeout(async () => {
        // Layer 2 & 3: Intent Classification + Data Retrieval (RAG)
        const ragResult = ragEngine(userInput, currentStudent || studentMatch || null)
        const { formattedResponse, structuredContext } = ragResult

        // Layer 4: Reasoning Decision Layer - Pass conversation history for follow-up detection
        const reasoningDecision = makeReasoningDecision(
          userInput,
          currentStudent || studentMatch || null,
          isLLMAvailable(),
          messages,
        )

        // Layer 5: Store reasoning context
        let finalResponse = formattedResponse
        let llmModeUsed: "data" | "data+reasoning" | "fallback" = "data"

        // Layer 6: Only invoke LLM if reasoning is needed and available
        if (reasoningDecision.shouldUseLLM && structuredContext) {
          try {
            const llmResult = await reasonWithLLM(userInput, structuredContext.dataDescription, {
              additionalContext: structuredContext,
            })
            if (llmResult.success && llmResult.source === "llm") {
              finalResponse = llmResult.content
              llmModeUsed = "data+reasoning"
            } else {
              llmModeUsed = "fallback"
            }
          } catch (error) {
            console.error("[v0] Error calling LLM:", error)
            llmModeUsed = "fallback"
            // Fallback to RAG response on error
          }
        }

        // Layer 7: Response Synthesis - Add assistant message with context tracking
        addMessage(finalResponse, "assistant", {
          llmMode: llmModeUsed,
          structuredContext,
          requiresReasoning: reasoningDecision.shouldUseLLM,
        })
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
