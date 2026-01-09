// Educational component explaining RAG + SQL architecture

"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { LLMStatusIndicator } from "./llm-status-indicator"

export function RAGExplanation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <details
      className="rounded-lg border border-border bg-muted/50 p-4 group"
      open={isOpen}
      onToggle={(e) => setIsOpen(e.currentTarget.open)}
    >
      <summary className="cursor-pointer flex items-center justify-between font-medium text-foreground hover:text-foreground/80 transition-colors">
        <span className="flex items-center gap-2">
          <span>🧠 How RAG + SQL Works</span>
          <LLMStatusIndicator />
        </span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </summary>

      <div className="mt-4 space-y-3 text-sm text-muted-foreground">
        <div>
          <p className="font-medium text-foreground mb-1">🔍 Intent Detection</p>
          <p>Your question is analyzed to determine what you need (attendance, fees, schedule, etc.).</p>
        </div>

        <div>
          <p className="font-medium text-foreground mb-1">💾 Data Retrieval</p>
          <p>The system queries our database using SQL-like operations to find relevant information.</p>
        </div>

        <div>
          <p className="font-medium text-foreground mb-1">🧬 RAG + Context Generation</p>
          <p>
            Retrieved data is combined with your context. If you've set an OpenAI API key, responses are enhanced using
            GPT.
          </p>
        </div>

        <div>
          <p className="font-medium text-foreground mb-1">💬 Natural Language Response</p>
          <p>Information is formatted into a human-readable, conversational response with emojis.</p>
        </div>

        <div className="rounded bg-background p-2 border border-border">
          <p className="font-mono text-xs">
            Example: &quot;attendance&quot; → Parse Intent → Query DB → Enhance with LLM → &quot;Your average is
            85%&quot;
          </p>
        </div>
      </div>
    </details>
  )
}
