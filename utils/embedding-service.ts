// Embedding Service - Vectorizes text using LLM encoding
// Supports multiple embedding models

export interface EmbeddingOptions {
  apiKey?: string
  model?: string
  batchSize?: number
}

export interface EmbeddingResponse {
  success: boolean
  embedding?: number[]
  embeddings?: number[][]
  error?: string
}

/**
 * Local fallback embedding - generates a simple deterministic embedding
 * This is used when no API is available
 */
const generateLocalEmbedding = (text: string, dimension: number = 384): number[] => {
  const hash = (str: string): number => {
    let h = 0
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i)
      h = (h << 5) - h + char
      h = h & h // Convert to 32bit integer
    }
    return h
  }

  // Generate pseudo-random embedding based on text hash
  const embedding: number[] = []
  let seed = hash(text)

  for (let i = 0; i < dimension; i++) {
    // Simple pseudo-random number generator
    seed = (seed * 9301 + 49297) % 233280
    embedding.push((seed / 233280 - 0.5) * 2) // Normalize to [-1, 1]
  }

  return embedding
}

/**
 * Normalize embedding vector to unit length
 */
const normalizeEmbedding = (embedding: number[]): number[] => {
  let sum = 0
  for (const val of embedding) {
    sum += val * val
  }
  const norm = Math.sqrt(sum)

  if (norm === 0) return embedding

  return embedding.map((val) => val / norm)
}

/**
 * Get embeddings using OpenAI API
 */
const getOpenAIEmbeddings = async (
  texts: string[],
  apiKey: string,
  model: string = "text-embedding-3-small",
): Promise<number[][]> => {
  try {
    const response = await fetch("https://api.openai.com/v1/embeddings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        input: texts,
      }),
    })

    if (!response.ok) {
      const error = await response.json().catch(() => ({}))
      throw new Error(`OpenAI API error: ${response.status} - ${error.error?.message || "Unknown error"}`)
    }

    const data = await response.json()
    return data.data.map((item: any) => item.embedding)
  } catch (error) {
    console.error("OpenAI embedding error:", error)
    throw error
  }
}

/**
 * Get embeddings using Hugging Face API
 */
const getHuggingFaceEmbeddings = async (
  texts: string[],
  apiKey: string,
  model: string = "sentence-transformers/all-MiniLM-L6-v2",
): Promise<number[][]> => {
  try {
    const response = await fetch(`https://api-inference.huggingface.co/models/${model}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputs: texts }),
    })

    if (!response.ok) {
      const error = await response.json().catch(() => ({}))
      throw new Error(`Hugging Face API error: ${response.status}`)
    }

    const data = await response.json()

    // Handle both single and batch responses
    if (Array.isArray(data) && data.length > 0) {
      if (Array.isArray(data[0])) {
        // Already in correct format
        return data as number[][]
      } else if (Array.isArray(data[0][0])) {
        // Nested array, flatten
        return data.map((item: any) => item[0])
      }
    }

    throw new Error("Unexpected response format from Hugging Face API")
  } catch (error) {
    console.error("Hugging Face embedding error:", error)
    throw error
  }
}

/**
 * Embed a single text
 */
export const embedText = async (
  text: string,
  options: EmbeddingOptions = {},
): Promise<EmbeddingResponse> => {
  try {
    const apiKey = options.apiKey
    const model = options.model || "text-embedding-3-small"

    if (!text || text.trim().length === 0) {
      return {
        success: false,
        error: "Text cannot be empty",
      }
    }

    // If no API key, use local embedding
    if (!apiKey) {
      const embedding = generateLocalEmbedding(text)
      const normalized = normalizeEmbedding(embedding)
      return {
        success: true,
        embedding: normalized,
      }
    }

    let embeddings: number[][]

    if (model.startsWith("text-embedding")) {
      // OpenAI model
      embeddings = await getOpenAIEmbeddings([text], apiKey, model)
    } else {
      // Assume Hugging Face model
      embeddings = await getHuggingFaceEmbeddings([text], apiKey, model)
    }

    if (!embeddings || embeddings.length === 0) {
      throw new Error("No embeddings returned from API")
    }

    return {
      success: true,
      embedding: normalizeEmbedding(embeddings[0]),
    }
  } catch (error) {
    console.error("Error embedding text:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}

/**
 * Embed multiple texts in batch
 */
export const embedTexts = async (
  texts: string[],
  options: EmbeddingOptions = {},
): Promise<EmbeddingResponse> => {
  try {
    const apiKey = options.apiKey
    const model = options.model || "text-embedding-3-small"
    const batchSize = options.batchSize || 32

    if (!texts || texts.length === 0) {
      return {
        success: false,
        error: "Texts array cannot be empty",
      }
    }

    // Filter out empty texts
    const validTexts = texts.filter((t) => t && t.trim().length > 0)
    if (validTexts.length === 0) {
      return {
        success: false,
        error: "All texts are empty",
      }
    }

    // If no API key, use local embeddings
    if (!apiKey) {
      const embeddings = validTexts.map((text) => {
        const embedding = generateLocalEmbedding(text)
        return normalizeEmbedding(embedding)
      })
      return {
        success: true,
        embeddings,
      }
    }

    // Process in batches
    const allEmbeddings: number[][] = []

    for (let i = 0; i < validTexts.length; i += batchSize) {
      const batch = validTexts.slice(i, i + batchSize)

      let embeddings: number[][]

      if (model.startsWith("text-embedding")) {
        embeddings = await getOpenAIEmbeddings(batch, apiKey, model)
      } else {
        embeddings = await getHuggingFaceEmbeddings(batch, apiKey, model)
      }

      allEmbeddings.push(
        ...embeddings.map((emb) => normalizeEmbedding(emb)),
      )
    }

    return {
      success: true,
      embeddings: allEmbeddings,
    }
  } catch (error) {
    console.error("Error embedding texts:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}

/**
 * Get API key from cache or localStorage
 */
let cachedEmbeddingApiKey: string | null = null

export const setEmbeddingApiKey = (apiKey: string | null) => {
  cachedEmbeddingApiKey = apiKey
}

export const getEmbeddingApiKey = (): string | null => {
  return cachedEmbeddingApiKey || (typeof window !== "undefined" ? localStorage.getItem("embedding_api_key") : null)
}

export const clearEmbeddingApiKey = () => {
  cachedEmbeddingApiKey = null
  if (typeof window !== "undefined") {
    localStorage.removeItem("embedding_api_key")
  }
}

export default {
  embedText,
  embedTexts,
  setEmbeddingApiKey,
  getEmbeddingApiKey,
  clearEmbeddingApiKey,
}
