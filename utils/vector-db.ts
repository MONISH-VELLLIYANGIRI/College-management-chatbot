// Vector Database Module - In-memory vector storage with indexing
// Stores embeddings and supports efficient similarity search

export interface VectorStoreItem {
  id: string
  text: string
  embedding: number[]
  metadata: Record<string, any>
  timestamp: Date
}

export interface VectorSearchResult {
  id: string
  text: string
  score: number
  metadata: Record<string, any>
}

class VectorDatabase {
  private vectors: Map<string, VectorStoreItem> = new Map()
  private readonly dimension: number = 384 // Default dimension for embeddings (e.g., Sentence Transformers)

  /**
   * Add a vector to the database
   */
  addVector(item: VectorStoreItem): void {
    if (item.embedding.length !== this.dimension) {
      console.warn(
        `Vector dimension mismatch: expected ${this.dimension}, got ${item.embedding.length}`,
      )
    }
    this.vectors.set(item.id, item)
  }

  /**
   * Add multiple vectors in batch
   */
  addVectors(items: VectorStoreItem[]): void {
    items.forEach((item) => this.addVector(item))
  }

  /**
   * Get vector by ID
   */
  getVector(id: string): VectorStoreItem | undefined {
    return this.vectors.get(id)
  }

  /**
   * Get all vectors
   */
  getAllVectors(): VectorStoreItem[] {
    return Array.from(this.vectors.values())
  }

  /**
   * Delete vector by ID
   */
  deleteVector(id: string): boolean {
    return this.vectors.delete(id)
  }

  /**
   * Clear all vectors
   */
  clear(): void {
    this.vectors.clear()
  }

  /**
   * Get number of stored vectors
   */
  getSize(): number {
    return this.vectors.size
  }

  /**
   * Cosine similarity between two vectors
   */
  private cosineSimilarity(vecA: number[], vecB: number[]): number {
    if (vecA.length !== vecB.length) {
      throw new Error("Vector dimensions must match")
    }

    let dotProduct = 0
    let normA = 0
    let normB = 0

    for (let i = 0; i < vecA.length; i++) {
      dotProduct += vecA[i] * vecB[i]
      normA += vecA[i] * vecA[i]
      normB += vecB[i] * vecB[i]
    }

    const denominator = Math.sqrt(normA) * Math.sqrt(normB)
    return denominator !== 0 ? dotProduct / denominator : 0
  }

  /**
   * Euclidean distance between two vectors
   */
  private euclideanDistance(vecA: number[], vecB: number[]): number {
    if (vecA.length !== vecB.length) {
      throw new Error("Vector dimensions must match")
    }

    let sum = 0
    for (let i = 0; i < vecA.length; i++) {
      const diff = vecA[i] - vecB[i]
      sum += diff * diff
    }

    return Math.sqrt(sum)
  }

  /**
   * Perform similarity search using cosine similarity
   */
  search(queryEmbedding: number[], topK: number = 5): VectorSearchResult[] {
    const results: Array<{
      id: string
      text: string
      score: number
      metadata: Record<string, any>
    }> = []

    this.vectors.forEach((item) => {
      const similarity = this.cosineSimilarity(queryEmbedding, item.embedding)
      results.push({
        id: item.id,
        text: item.text,
        score: similarity,
        metadata: item.metadata,
      })
    })

    // Sort by similarity score (descending)
    results.sort((a, b) => b.score - a.score)

    return results.slice(0, topK)
  }

  /**
   * Hybrid search combining similarity with filters
   */
  hybridSearch(
    queryEmbedding: number[],
    topK: number = 5,
    filters?: Record<string, any>,
  ): VectorSearchResult[] {
    let items = Array.from(this.vectors.values())

    // Apply filters if provided
    if (filters) {
      items = items.filter((item) => {
        return Object.entries(filters).every(([key, value]) => item.metadata[key] === value)
      })
    }

    const results: Array<{
      id: string
      text: string
      score: number
      metadata: Record<string, any>
    }> = []

    items.forEach((item) => {
      const similarity = this.cosineSimilarity(queryEmbedding, item.embedding)
      results.push({
        id: item.id,
        text: item.text,
        score: similarity,
        metadata: item.metadata,
      })
    })

    results.sort((a, b) => b.score - a.score)
    return results.slice(0, topK)
  }

  /**
   * Get statistics about the vector database
   */
  getStats(): {
    totalVectors: number
    dimension: number
    storageApproxSize: string
  } {
    const approxSize = this.vectors.size * this.dimension * 8 // 8 bytes per float
    const sizeInMB = (approxSize / (1024 * 1024)).toFixed(2)

    return {
      totalVectors: this.vectors.size,
      dimension: this.dimension,
      storageApproxSize: `${sizeInMB} MB`,
    }
  }
}

// Singleton instance
let vectorDB: VectorDatabase | null = null

/**
 * Get or create the vector database instance
 */
export const getVectorDatabase = (): VectorDatabase => {
  if (!vectorDB) {
    vectorDB = new VectorDatabase()
  }
  return vectorDB
}

/**
 * Reset the vector database (useful for testing)
 */
export const resetVectorDatabase = (): void => {
  vectorDB = null
}

export default VectorDatabase
