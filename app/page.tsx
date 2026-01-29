// Main chat interface page with theme toggle and full RAG system

"use client"

import { useEffect, useState } from "react"
import { useChat } from "@/hooks/use-chat"
import { ChatHeader } from "@/components/chat-header"
import { ChatMessage } from "@/components/chat-message"
import { ChatInput } from "@/components/chat-input"
import { StudentSelector } from "@/components/student-selector"

export default function HomePage() {
  const [isDark, setIsDark] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const { messages, currentStudent, isLoading, messagesEndRef, sendMessage, resetConversation, selectStudent } =
    useChat()

  // Initialize dark mode from system preference and handle hydration
  useEffect(() => {
    setIsMounted(true)
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    setIsDark(prefersDark)
    if (prefersDark) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const handleThemeToggle = () => {
    const newDarkMode = !isDark
    setIsDark(newDarkMode)
    if (newDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  const handleReset = () => {
    resetConversation()
  }

  const handleSendMessage = (content: string) => {
    sendMessage(content)
  }

  // Prevent hydration mismatch
  if (!isMounted) {
    return null
  }

  return (
    <div className={`flex h-screen flex-col bg-background ${isDark ? "dark" : ""}`}>
      {/* Header */}
      <ChatHeader isDark={isDark} onThemeToggle={handleThemeToggle} onReset={handleReset} />

      {/* Main chat area */}
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-4xl px-4 py-6 space-y-4 sm:px-6 sm:py-8">
          {/* Welcome section - shown if no messages */}
          {messages.length === 0 ? (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Welcome to your AI College Assistant</h2>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Ask me anything about your attendance, fees, schedule, or academics
                </p>
              </div>

              {/* Search tip */}
              <div className="rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950 p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-blue-900 dark:text-blue-100">
                  <span className="font-semibold">💡 Tip:</span> Use the search box below to find and select your profile by name, ID, or department
                </p>
              </div>

              {/* Student selector */}
              <div className="rounded-lg border border-border bg-card p-4 sm:p-6">
                <StudentSelector onSelect={selectStudent} currentStudent={currentStudent} />
              </div>
            </div>
          ) : (
            // Messages container
            <div className="space-y-4">
              {messages.map((message) => (
                <ChatMessage key={message.id} content={message.content} role={message.role} />
              ))}
              {isLoading && <ChatMessage content="" role="assistant" isLoading={true} />}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
      </div>

      {/* Chat input */}
      <ChatInput
        onSend={handleSendMessage}
        isLoading={isLoading}
        onExampleClick={(example) => {
          handleSendMessage(example)
        }}
      />
    </div>
  )
}
