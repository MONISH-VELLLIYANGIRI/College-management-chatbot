// MMR (Maximum Marginal Relevance) Retriever
// Balances relevance to query with diversity among results

import { getVectorDatabase, type VectorSearchResult } from "./vector-db"

export interface MMRRetrievalOptions {
  k: number // Number of results to return
  lambda: number // Trade-off parameter (0-1), higher = more relevance, lower = more diversity
  fetchK?: number // Number of documents to fetch before MMR processing
}

export interface MMRResult {
  results: VectorSearchResult[]
  scores: number[]
  diversityScore: number
  processingTime: number
}

/**
 * Calculate cosine similarity between two vectors
 */
const cosineSimilarity = (vecA: number[], vecB: number[]): number => {
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
 * Calculate average embedding of a list of embeddings
 */
const getAverageEmbedding = (embeddings: number[][]): number[] => {
  if (embeddings.length === 0) {
    return []
  }

  const dimension = embeddings[0].length
  const average: number[] = new Array(dimension).fill(0)

  for (const embedding of embeddings) {
    for (let i = 0; i < dimension; i++) {
      average[i] += embedding[i]
    }
  }

  for (let i = 0; i < dimension; i++) {
    average[i] /= embeddings.length
  }

  return average
}

/**
 * Retrieve documents using MMR algorithm
 * Balances relevance to the query with diversity among selected documents
 */
export const retrieveWithMMR = (
  queryEmbedding: number[],
  options: MMRRetrievalOptions = {
    k: 5,
    lambda: 0.6,
    fetchK: 20,
  },
): MMRResult => {
  const startTime = Date.now()

  const db = getVectorDatabase()
  const fetchK = options.fetchK || Math.max(options.k * 4, 20)
  const lambda = Math.max(0, Math.min(1, options.lambda)) // Clamp between 0-1

  // First, get top-k documents by similarity
  const candidateResults = Array.from(db.getAllVectors())
    .map((vector) => ({
      id: vector.id,
      text: vector.text,
      score: cosineSimilarity(queryEmbedding, vector.embedding),
      metadata: vector.metadata,
      embedding: vector.embedding,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, fetchK)

  if (candidateResults.length === 0) {
    return {
      results: [],
      scores: [],
      diversityScore: 0,
      processingTime: Date.now() - startTime,
    }
  }

  const selected: (typeof candidateResults)[number][] = []
  const selectedEmbeddings: number[][] = []
  const mmrScores: number[] = []

  // Iteratively select documents using MMR
  for (let i = 0; i < Math.min(options.k, candidateResults.length); i++) {
    let bestIdx = -1
    let bestScore = -1

    for (let j = 0; j < candidateResults.length; j++) {
      const candidate = candidateResults[j]

      // Check if already selected
      if (selected.some((s) => s.id === candidate.id)) {
        continue
      }

      let mmrScore: number

      if (selected.length === 0) {
        // First selection: just use relevance to query
        mmrScore = lambda * candidate.score
      } else {
        // Subsequent selections: balance relevance with diversity
        const relevanceScore = candidate.score
        const diversityScore =
          selectedEmbeddings.length > 0
            ? Math.max(
                ...selectedEmbeddings.map((emb) =>
                  cosineSimilarity(candidate.embedding, emb),
                ),
              )
            : 0

        mmrScore = lambda * relevanceScore - (1 - lambda) * diversityScore
      }

      if (mmrScore > bestScore) {
        bestScore = mmrScore
        bestIdx = j
      }
    }

    if (bestIdx === -1) {
      break
    }

    const selected_candidate = candidateResults[bestIdx]
    selected.push(selected_candidate)
    selectedEmbeddings.push(selected_candidate.embedding)
    mmrScores.push(bestScore)
  }

  // Calculate overall diversity score
  const allPairwiseSimilarities: number[] = []
  for (let i = 0; i < selectedEmbeddings.length; i++) {
    for (let j = i + 1; j < selectedEmbeddings.length; j++) {
      allPairwiseSimilarities.push(
        cosineSimilarity(selectedEmbeddings[i], selectedEmbeddings[j]),
      )
    }
  }

  const averageSimilarity =
    allPairwiseSimilarities.length > 0
      ? allPairwiseSimilarities.reduce((a, b) => a + b, 0) /
        allPairwiseSimilarities.length
      : 0
  const diversityScore = 1 - averageSimilarity // Higher diversity = lower similarity

  const results: VectorSearchResult[] = selected.map((s) => ({
    id: s.id,
    text: s.text,
    score: s.score,
    metadata: s.metadata,
  }))

  return {
    results,
    scores: mmrScores,
    diversityScore,
    processingTime: Date.now() - startTime,
  }
}

/**
 * Retrieve documents with hybrid approach: MMR + filtering
 */
export const retrieveWithMMRAndFilters = (
  queryEmbedding: number[],
  filters?: Record<string, any>,
  options?: Partial<MMRRetrievalOptions>,
): MMRResult => {
  const db = getVectorDatabase()
  const startTime = Date.now()

  // Filter vectors first
  let candidates = db.getAllVectors()

  if (filters) {
    candidates = candidates.filter((item) => {
      return Object.entries(filters).every(([key, value]) => item.metadata[key] === value)
    })
  }

  // If no candidates match, return empty
  if (candidates.length === 0) {
    return {
      results: [],
      scores: [],
      diversityScore: 0,
      processingTime: Date.now() - startTime,
    }
  }

  // Convert to candidate format and apply MMR
  const candidateResults = candidates
    .map((vector) => ({
      id: vector.id,
      text: vector.text,
      score: cosineSimilarity(queryEmbedding, vector.embedding),
      metadata: vector.metadata,
      embedding: vector.embedding,
    }))
    .sort((a, b) => b.score - a.score)

  const opts: MMRRetrievalOptions = {
    k: options?.k || 5,
    lambda: options?.lambda ?? 0.6,
    fetchK: options?.fetchK || Math.max((options?.k || 5) * 4, 20),
  }

  // Manual MMR implementation for filtered results
  const selected: (typeof candidateResults)[number][] = []
  const selectedEmbeddings: number[][] = []
  const mmrScores: number[] = []
  const fetchK = Math.min(opts.fetchK || 20, candidateResults.length)

  for (let i = 0; i < Math.min(opts.k, candidateResults.length); i++) {
    let bestIdx = -1
    let bestScore = -1

    const searchLimit = Math.min(fetchK, candidateResults.length)

    for (let j = 0; j < searchLimit; j++) {
      const candidate = candidateResults[j]

      if (selected.some((s) => s.id === candidate.id)) {
        continue
      }

      let mmrScore: number

      if (selected.length === 0) {
        mmrScore = opts.lambda * candidate.score
      } else {
        const relevanceScore = candidate.score
        const diversityScore =
          selectedEmbeddings.length > 0
            ? Math.max(
                ...selectedEmbeddings.map((emb) =>
                  cosineSimilarity(candidate.embedding, emb),
                ),
              )
            : 0

        mmrScore = opts.lambda * relevanceScore - (1 - opts.lambda) * diversityScore
      }

      if (mmrScore > bestScore) {
        bestScore = mmrScore
        bestIdx = j
      }
    }

    if (bestIdx === -1) {
      break
    }

    const selected_candidate = candidateResults[bestIdx]
    selected.push(selected_candidate)
    selectedEmbeddings.push(selected_candidate.embedding)
    mmrScores.push(bestScore)
  }

  const allPairwiseSimilarities: number[] = []
  for (let i = 0; i < selectedEmbeddings.length; i++) {
    for (let j = i + 1; j < selectedEmbeddings.length; j++) {
      allPairwiseSimilarities.push(
        cosineSimilarity(selectedEmbeddings[i], selectedEmbeddings[j]),
      )
    }
  }

  const averageSimilarity =
    allPairwiseSimilarities.length > 0
      ? allPairwiseSimilarities.reduce((a, b) => a + b, 0) /
        allPairwiseSimilarities.length
      : 0
  const diversityScore = 1 - averageSimilarity

  const results: VectorSearchResult[] = selected.map((s) => ({
    id: s.id,
    text: s.text,
    score: s.score,
    metadata: s.metadata,
  }))

  return {
    results,
    scores: mmrScores,
    diversityScore,
    processingTime: Date.now() - startTime,
  }
}

export default {
  retrieveWithMMR,
  retrieveWithMMRAndFilters,
}
