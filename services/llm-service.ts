// Layer 5: LLM Reasoning Layer
// Optional OpenAI integration with fallback to rule-based responses
// Only invoked for reasoning queries, not for factual data retrieval

interface LLMOptions {
  apiKey?: string
  model?: string
  temperature?: number
  additionalContext?: any
}

interface LLMResponse {
  success: boolean
  content: string
  source: "llm" | "fallback"
  error?: string
}

let cachedApiKey: string | null = null

export const setLLMApiKey = (apiKey: string | null) => {
  cachedApiKey = apiKey
}

export const getLLMApiKey = (): string | null => {
  return cachedApiKey || (typeof window !== "undefined" ? localStorage.getItem("llm_api_key") : null)
}

export const clearLLMApiKey = () => {
  cachedApiKey = null
  if (typeof window !== "undefined") {
    localStorage.removeItem("llm_api_key")
  }
}

export const isLLMAvailable = (): boolean => {
  const apiKey = getLLMApiKey()
  return !!apiKey && apiKey.trim().length > 0 && apiKey.startsWith("sk-")
}

export const reasonWithLLM = async (
  userQuery: string,
  retrievedContext: string,
  options: LLMOptions = {},
): Promise<LLMResponse> => {
  const apiKey = options.apiKey || getLLMApiKey()

  // If no API key, return fallback response
  if (!apiKey || !apiKey.trim()) {
    return {
      success: true,
      content: retrievedContext,
      source: "fallback",
    }
  }

  try {
    // Validate API key format
    if (!apiKey.startsWith("sk-")) {
      return {
        success: false,
        content: retrievedContext,
        source: "fallback",
        error: "Invalid API key format",
      }
    }

    const contextStr = options.additionalContext
      ? `Retrieved data: ${JSON.stringify(options.additionalContext, null, 2)}`
      : ""

    // Call OpenAI API for reasoning
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: options.model || "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a helpful college management assistant specializing in reasoning and decision-making. Analyze the provided data and answer the user's question with insights. Format your response naturally with relevant emojis. Keep responses concise but informative.",
          },
          {
            role: "user",
            content: `${contextStr}\n\nBased on this data, please reason about: ${userQuery}`,
          },
        ],
        temperature: options.temperature || 0.7,
        max_tokens: 500,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error("[v0] LLM reasoning error:", errorData)

      return {
        success: false,
        content: retrievedContext,
        source: "fallback",
        error: `API Error: ${response.status}`,
      }
    }

    const data = await response.json()
    const llmContent = data.choices?.[0]?.message?.content || retrievedContext

    return {
      success: true,
      content: llmContent,
      source: "llm",
    }
  } catch (error) {
    console.error("[v0] LLM service error:", error)

    // Network error or timeout - fallback gracefully
    return {
      success: false,
      content: retrievedContext,
      source: "fallback",
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}

// Export legacy function name for backward compatibility
export const generateLLMResponse = reasonWithLLM
