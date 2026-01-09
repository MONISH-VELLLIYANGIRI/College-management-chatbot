"use client"

import { useEffect, useState } from "react"
import { isLLMAvailable } from "@/services/llm-service"

export function LLMStatusIndicator() {
  const [isConnected, setIsConnected] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    setIsConnected(isLLMAvailable())
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="flex items-center gap-2 text-xs sm:text-sm px-3 py-1.5 rounded-full border border-border bg-muted/50">
      <div className={`h-2 w-2 rounded-full ${isConnected ? "bg-green-500" : "bg-amber-500"} animate-pulse`}></div>
      <span className="text-muted-foreground">{isConnected ? "✅ LLM Connected" : "⚠️ Offline AI Mode"}</span>
    </div>
  )
}
