// Layer 4: Reasoning Decision Layer
// Determines if a query needs LLM reasoning or can be handled with RAG + SQL

import type { Student, EnhancedMessage } from "@/types"
import { parseIntent } from "./intent-parser"

export interface ReasoningDecision {
  shouldUseLLM: boolean
  reason: string
  requiresContext: boolean
  contextType?: string
  isFollowUpReasoning: boolean
}

export const makeReasoningDecision = (
  userQuery: string,
  currentStudent: Student | null,
  llmAvailable: boolean,
  conversationHistory: EnhancedMessage[] = [],
): ReasoningDecision => {
  const intentResult = parseIntent(userQuery)

  // Check if previous message was factual data retrieval, and current is asking "why" or "how to fix"
  const isFollowUpReasoning =
    conversationHistory.length > 0 &&
    conversationHistory[conversationHistory.length - 1].role === "assistant" &&
    (userQuery.toLowerCase().includes("how") ||
      userQuery.toLowerCase().includes("why") ||
      userQuery.toLowerCase().includes("can i") ||
      userQuery.toLowerCase().includes("what if") ||
      userQuery.toLowerCase().includes("should i") ||
      userQuery.toLowerCase().includes("how can i"))

  // Layer 4: Decide if LLM is needed
  if (!intentResult.requiresReasoning && !isFollowUpReasoning) {
    // Factual queries are always handled by RAG + SQL, never need LLM
    return {
      shouldUseLLM: false,
      reason: "Factual query - handled by RAG and SQL simulation",
      requiresContext: false,
      isFollowUpReasoning: false,
    }
  }

  // For reasoning queries, check if LLM is available
  if (!llmAvailable) {
    return {
      shouldUseLLM: false,
      reason: isFollowUpReasoning
        ? "Follow-up reasoning without LLM"
        : "LLM not available - falling back to rule-based reasoning",
      requiresContext: true,
      contextType: intentResult.intent,
      isFollowUpReasoning,
    }
  }

  // LLM is available and query requires reasoning
  return {
    shouldUseLLM: true,
    reason: isFollowUpReasoning
      ? `Follow-up reasoning query requiring LLM`
      : `Reasoning query requiring LLM: ${intentResult.intent}`,
    requiresContext: true,
    contextType: intentResult.intent,
    isFollowUpReasoning,
  }
}
