// NLP Intent Parser - Detects user intent and determines if reasoning is required
// This is Layer 2 of the AI pipeline: Intent Classification Layer

const INTENT_PATTERNS = {
  ATTENDANCE: {
    keywords: ["attendance", "present", "absent", "classes", "class", "missed", "attendance percentage"],
    weight: 1.0,
    requiresReasoning: false, // Factual query - just retrieve data
  },
  FEES: {
    keywords: ["fee", "fees", "dues", "payment", "pay", "due", "paid", "amount", "bill"],
    weight: 1.0,
    requiresReasoning: false, // Factual query
  },
  SCHEDULE: {
    keywords: ["schedule", "timetable", "class", "when", "time", "timing", "lecture", "room", "today", "tomorrow"],
    weight: 1.0,
    requiresReasoning: false, // Factual query
  },
  ACADEMICS: {
    keywords: ["grade", "gpa", "marks", "score", "result", "performance", "academic", "semester"],
    weight: 1.0,
    requiresReasoning: false, // Factual query
  },
  ELIGIBILITY: {
    keywords: ["eligible", "eligibility", "can i", "am i allowed", "permission", "requirements"],
    weight: 1.0,
    requiresReasoning: true, // Reasoning query - needs LLM decision
  },
  COMPARISON: {
    keywords: ["compare", "better", "worse", "improve", "improvement", "progress", "trend"],
    weight: 1.0,
    requiresReasoning: true, // Reasoning query
  },
  EXPLANATION: {
    keywords: ["why", "explain", "reason", "cause", "because", "how come", "what if"],
    weight: 1.0,
    requiresReasoning: true, // Reasoning query
  },
  RECOMMENDATION: {
    keywords: ["recommend", "suggest", "advice", "what should", "help me", "best", "optimal"],
    weight: 1.0,
    requiresReasoning: true, // Reasoning query
  },
  STUDENT_INFO: {
    keywords: ["name", "student", "details", "information", "info", "department", "year", "email"],
    weight: 0.9,
    requiresReasoning: false,
  },
  GREETING: {
    keywords: ["hello", "hi", "hey", "greetings", "how are you", "help", "assist"],
    weight: 0.8,
    requiresReasoning: false,
  },
}

export interface IntentResult {
  intent: string
  confidence: number
  keywords: string[]
  requiresReasoning: boolean // Key flag: should we invoke LLM?
}

export const parseIntent = (userMessage: string): IntentResult => {
  const lowerMessage = userMessage.toLowerCase()
  const words = lowerMessage.split(/\s+/)

  let bestIntent = "UNKNOWN"
  let bestScore = 0
  const matchedKeywords: string[] = []
  let requiresReasoning = false

  for (const [intent, pattern] of Object.entries(INTENT_PATTERNS)) {
    let score = 0
    const matchedInThisIntent: string[] = []

    for (const keyword of pattern.keywords) {
      if (lowerMessage.includes(keyword)) {
        score += pattern.weight
        matchedInThisIntent.push(keyword)
      }
    }

    if (score > bestScore) {
      bestScore = score
      bestIntent = intent
      requiresReasoning = pattern.requiresReasoning
      matchedKeywords.splice(0, matchedKeywords.length, ...matchedInThisIntent)
    }
  }

  const confidence = Math.min(bestScore / 3, 1)

  return {
    intent: bestIntent,
    confidence,
    keywords: matchedKeywords,
    requiresReasoning, // Added reasoning flag to distinguish factual vs reasoning queries
  }
}

export const shouldAskForStudent = (intent: string): boolean => {
  return ["ATTENDANCE", "FEES", "ACADEMICS", "ELIGIBILITY", "COMPARISON"].includes(intent)
}
