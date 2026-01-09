// Chat input field with send button and example queries

"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

interface ChatInputProps {
  onSend: (message: string) => void
  isLoading?: boolean
  onExampleClick?: (example: string) => void
}

const EXAMPLE_QUERIES = [
  "📊 What's my attendance?",
  "💰 Do I have any dues?",
  "📅 Show my schedule",
  "📚 What's my GPA?",
]

export function ChatInput({ onSend, isLoading, onExampleClick }: ChatInputProps) {
  const [input, setInput] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() && !isLoading) {
      onSend(input)
      setInput("")
    }
  }

  const handleExample = (example: string) => {
    setInput(example)
    onExampleClick?.(example)
  }

  return (
    <div className="border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 p-4">
      <div className="mx-auto max-w-4xl space-y-3 sm:px-2">
        {/* Example queries */}
        <div className="flex flex-wrap gap-2">
          {EXAMPLE_QUERIES.map((query) => (
            <button
              key={query}
              onClick={() => handleExample(query)}
              disabled={isLoading}
              className="text-xs px-2.5 py-1.5 rounded-full border border-border hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed sm:text-sm"
            >
              {query}
            </button>
          ))}
        </div>

        {/* Input form */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me about attendance, fees, schedule, or academics..."
            disabled={isLoading}
            className="flex-1 rounded-lg border border-border bg-background px-4 py-2 text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  )
}
