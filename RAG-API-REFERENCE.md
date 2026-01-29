// RAG System API Reference - Complete Documentation

/**
 * ============================================================================
 * 1. VECTOR DATABASE API
 * ============================================================================
 */

/**
 * Get singleton instance of vector database
 * @returns {VectorDatabase} - Vector database instance
 * @example
 * const db = getVectorDatabase()
 * const stats = db.getStats()
 */
export function getVectorDatabase(): VectorDatabase

/**
 * Reset vector database (clear all data)
 * @example
 * resetVectorDatabase()
 */
export function resetVectorDatabase(): void

/**
 * VectorDatabase class methods
 */
class VectorDatabase {
  /**
   * Add a single vector to database
   * @param {VectorStoreItem} item - Vector item with embedding and metadata
   */
  addVector(item: VectorStoreItem): void

  /**
   * Add multiple vectors in batch
   * @param {VectorStoreItem[]} items - Array of vector items
   */
  addVectors(items: VectorStoreItem[]): void

  /**
   * Get vector by ID
   * @param {string} id - Vector ID
   * @returns {VectorStoreItem | undefined}
   */
  getVector(id: string): VectorStoreItem | undefined

  /**
   * Get all vectors
   * @returns {VectorStoreItem[]} - All stored vectors
   */
  getAllVectors(): VectorStoreItem[]

  /**
   * Delete vector by ID
   * @param {string} id - Vector ID
   * @returns {boolean} - True if deleted, false if not found
   */
  deleteVector(id: string): boolean

  /**
   * Clear all vectors
   */
  clear(): void

  /**
   * Get number of stored vectors
   * @returns {number}
   */
  getSize(): number

  /**
   * Perform similarity search
   * @param {number[]} queryEmbedding - Query vector
   * @param {number} topK - Number of results to return
   * @returns {VectorSearchResult[]} - Sorted results by similarity
   */
  search(queryEmbedding: number[], topK?: number): VectorSearchResult[]

  /**
   * Hybrid search with filters
   * @param {number[]} queryEmbedding - Query vector
   * @param {number} topK - Number of results
   * @param {Record<string, any>} filters - Metadata filters
   * @returns {VectorSearchResult[]}
   */
  hybridSearch(
    queryEmbedding: number[],
    topK?: number,
    filters?: Record<string, any>,
  ): VectorSearchResult[]

  /**
   * Get database statistics
   * @returns {{totalVectors: number, dimension: number, storageApproxSize: string}}
   */
  getStats(): {
    totalVectors: number
    dimension: number
    storageApproxSize: string
  }
}

/**
 * ============================================================================
 * 2. EMBEDDING SERVICE API
 * ============================================================================
 */

/**
 * Embed a single text
 * @param {string} text - Text to embed
 * @param {EmbeddingOptions} options - Configuration options
 * @returns {Promise<EmbeddingResponse>} - Embedding result
 * @example
 * const result = await embedText("Hello world", {
 *   apiKey: "sk-...",
 *   model: "text-embedding-3-small"
 * })
 * if (result.success) {
 *   console.log(result.embedding) // number[]
 * }
 */
export function embedText(
  text: string,
  options?: EmbeddingOptions,
): Promise<EmbeddingResponse>

/**
 * Embed multiple texts in batch
 * @param {string[]} texts - Texts to embed
 * @param {EmbeddingOptions} options - Configuration options
 * @returns {Promise<EmbeddingResponse>} - Embeddings array
 * @example
 * const result = await embedTexts(["text1", "text2", "text3"], {
 *   apiKey: "sk-...",
 *   batchSize: 32
 * })
 * if (result.success) {
 *   console.log(result.embeddings) // number[][]
 * }
 */
export function embedTexts(
  texts: string[],
  options?: EmbeddingOptions,
): Promise<EmbeddingResponse>

/**
 * Set embedding API key in cache
 * @param {string | null} apiKey - API key or null to clear
 */
export function setEmbeddingApiKey(apiKey: string | null): void

/**
 * Get embedding API key from cache or localStorage
 * @returns {string | null}
 */
export function getEmbeddingApiKey(): string | null

/**
 * Clear embedding API key
 */
export function clearEmbeddingApiKey(): void

interface EmbeddingOptions {
  apiKey?: string // OpenAI or Hugging Face key
  model?: string // "text-embedding-3-small" or HF model
  batchSize?: number // For batch embedding (default: 32)
}

interface EmbeddingResponse {
  success: boolean
  embedding?: number[] // For single text
  embeddings?: number[][] // For multiple texts
  error?: string
}

/**
 * ============================================================================
 * 3. MMR RETRIEVER API
 * ============================================================================
 */

/**
 * Retrieve documents using Maximum Marginal Relevance
 * @param {number[]} queryEmbedding - Query vector
 * @param {MMRRetrievalOptions} options - Configuration
 * @returns {MMRResult} - Retrieved documents with MMR scores
 * @example
 * const result = retrieveWithMMR(queryVector, {
 *   k: 5,              // Return top 5
 *   lambda: 0.7,       // 70% relevance, 30% diversity
 *   fetchK: 20         // Consider top 20 candidates
 * })
 * console.log(result.results)      // Retrieved documents
 * console.log(result.diversityScore) // Diversity metric
 */
export function retrieveWithMMR(
  queryEmbedding: number[],
  options?: MMRRetrievalOptions,
): MMRResult

/**
 * Retrieve with MMR and metadata filters
 * @param {number[]} queryEmbedding - Query vector
 * @param {Record<string, any>} filters - Metadata filters
 * @param {Partial<MMRRetrievalOptions>} options - Configuration
 * @returns {MMRResult}
 * @example
 * const result = retrieveWithMMRAndFilters(
 *   queryVector,
 *   { category: "attendance", type: "policy" },
 *   { k: 5, lambda: 0.7 }
 * )
 */
export function retrieveWithMMRAndFilters(
  queryEmbedding: number[],
  filters?: Record<string, any>,
  options?: Partial<MMRRetrievalOptions>,
): MMRResult

interface MMRRetrievalOptions {
  k: number // Number of results to return
  lambda: number // Trade-off (0-1): higher = more relevance
  fetchK?: number // Candidates to consider
}

interface MMRResult {
  results: VectorSearchResult[]
  scores: number[]
  diversityScore: number // 0-1: higher = more diverse
  processingTime: number // milliseconds
}

/**
 * ============================================================================
 * 4. REASONING ENGINE API
 * ============================================================================
 */

/**
 * Initialize vector database with documents
 * @param {Array} documents - Documents to vectorize and store
 * @param {string} embeddingApiKey - Embedding API key
 * @example
 * await initializeVectorDatabase(
 *   [
 *     {
 *       id: "doc-1",
 *       text: "Document content",
 *       metadata: { category: "attendance" }
 *     }
 *   ],
 *   embeddingApiKey
 * )
 */
export function initializeVectorDatabase(
  documents: Array<{
    id: string
    text: string
    metadata?: Record<string, any>
  }>,
  embeddingApiKey?: string,
): Promise<void>

/**
 * Add single document to vector database
 * @param {string} id - Document ID
 * @param {string} text - Document content
 * @param {Record<string, any>} metadata - Document metadata
 * @param {string} embeddingApiKey - API key
 * @returns {Promise<boolean>} - Success status
 */
export function addDocumentToVectorDB(
  id: string,
  text: string,
  metadata?: Record<string, any>,
  embeddingApiKey?: string,
): Promise<boolean>

/**
 * Perform semantic reasoning with vector retrieval and LLM
 * @param {ReasoningInput} input - Reasoning input
 * @param {string} embeddingApiKey - Embedding API key
 * @param {string} llmApiKey - LLM API key
 * @returns {Promise<ReasoningOutput>} - Reasoning result
 * @example
 * const result = await performReasoning(
 *   {
 *     userQuery: "How can I improve my GPA?",
 *     context: "Student is on probation",
 *     filters: { category: "academics" }
 *   },
 *   embeddingApiKey,
 *   llmApiKey
 * )
 */
export function performReasoning(
  input: ReasoningInput,
  embeddingApiKey?: string,
  llmApiKey?: string,
): Promise<ReasoningOutput>

/**
 * Batch reasoning for multiple queries
 * @param {ReasoningInput[]} inputs - Multiple reasoning inputs
 * @param {string} embeddingApiKey
 * @param {string} llmApiKey
 * @returns {Promise<ReasoningOutput[]>}
 */
export function performBatchReasoning(
  inputs: ReasoningInput[],
  embeddingApiKey?: string,
  llmApiKey?: string,
): Promise<ReasoningOutput[]>

/**
 * Direct semantic search on vector database
 * @param {string} query - Search query
 * @param {number} topK - Number of results
 * @param {string} embeddingApiKey
 * @returns {Promise<Array>} - Search results
 */
export function semanticSearch(
  query: string,
  topK?: number,
  embeddingApiKey?: string,
): Promise<Array<{
  id: string
  text: string
  relevance: number
  metadata: Record<string, any>
}>>

/**
 * Advanced reasoning with custom parameters
 * @param {string} query - Query
 * @param {number} lambdaValue - MMR lambda (0-1)
 * @param {string} customContext - Additional context
 * @param {string} embeddingApiKey
 * @param {string} llmApiKey
 * @returns {Promise<ReasoningOutput>}
 */
export function advancedReasoning(
  query: string,
  lambdaValue?: number,
  customContext?: string,
  embeddingApiKey?: string,
  llmApiKey?: string,
): Promise<ReasoningOutput>

/**
 * Get reasoning engine statistics
 * @returns {Object} - DB statistics
 */
export function getReasoningStats(): {
  totalVectors: number
  dimension: number
  storageApproxSize: string
}

/**
 * Clear all vectors from reasoning engine
 */
export function clearReasoningDatabase(): void

interface ReasoningInput {
  userQuery: string
  context?: string
  studentInfo?: any
  useVectorSearch?: boolean
  filters?: Record<string, any>
  temperature?: number
}

interface ReasoningOutput {
  query: string
  reasoning: string
  source: "vectordb" | "fallback"
  retrievedDocuments: Array<{
    id: string
    text: string
    relevance: number
  }>
  confidenceScore: number
  processingTime: number
  diversityScore: number
}

/**
 * ============================================================================
 * 5. UNIFIED RAG SYSTEM API
 * ============================================================================
 */

/**
 * Initialize RAG system with sample documents
 * @param {RAGSystemConfig} config - Configuration
 * @example
 * await initializeRAGSystem({
 *   embeddingApiKey: "sk-...",
 *   llmApiKey: "sk-...",
 *   mmrLambda: 0.7,
 *   topK: 5
 * })
 */
export function initializeRAGSystem(
  config?: RAGSystemConfig,
): Promise<void>

/**
 * Main RAG pipeline: Question → Vectorization → Retrieval → Reasoning
 * @param {string} userQuestion - User's question
 * @param {Student | null} currentStudent - Current student info
 * @param {RAGSystemConfig} config - Configuration
 * @returns {Promise<RAGResponse>} - Answer with context
 * @example
 * const response = await processQueryWithRAG(
 *   "What should I do about my low attendance?",
 *   currentStudent,
 *   { embeddingApiKey, llmApiKey }
 * )
 * console.log(response.answer)
 * console.log(response.retrievedDocuments)
 * console.log(response.reasoning.confidence)
 */
export function processQueryWithRAG(
  userQuestion: string,
  currentStudent: Student | null,
  config?: RAGSystemConfig,
): Promise<RAGResponse>

/**
 * Add new documents to RAG system
 * @param {VectorizedDocument[]} documents - Documents to add
 * @param {RAGSystemConfig} config - Configuration
 * @returns {Promise<number>} - Number of added documents
 */
export function addDocumentsToRAG(
  documents: VectorizedDocument[],
  config?: RAGSystemConfig,
): Promise<number>

/**
 * Get RAG system statistics
 * @returns {Object} - System stats
 */
export function getRAGStats(): {
  totalVectors: number
  dimension: number
  storageApproxSize: string
  systemStatus: string
  timestamp: string
}

/**
 * Clear all vectors from RAG system
 */
export function clearRAGSystem(): void

interface RAGSystemConfig {
  embeddingApiKey?: string // OpenAI key
  llmApiKey?: string // OpenAI key
  embeddingModel?: string // "text-embedding-3-small"
  llmModel?: string // "gpt-3.5-turbo"
  mmrLambda?: number // 0-1 (default: 0.7)
  topK?: number // Documents to retrieve (default: 5)
}

interface VectorizedDocument {
  id: string
  content: string
  embedding?: number[]
  source: "attendance" | "fees" | "schedule" | "academics" | "faq" | "policy"
  metadata: Record<string, any>
  timestamp: Date
}

interface RAGResponse {
  answer: string
  retrievedDocuments: Array<{
    id: string
    content: string
    relevance: number
    source: string
  }>
  reasoning: {
    query: string
    intent: string
    confidence: number
    diversityScore: number
  }
  metadata: {
    processingTime: number
    embeddingTime: number
    retrievalTime: number
    reasoningTime: number
    vectorsUsed: number
  }
}

/**
 * ============================================================================
 * 6. RAG CHAT MANAGER API
 * ============================================================================
 */

/**
 * Get or create RAG chat manager singleton
 * @returns {RAGChatManager}
 */
export function getRAGChatManager(): RAGChatManager

class RAGChatManager {
  /**
   * Initialize chat manager
   * @param {ChatRAGConfig} config - Configuration
   */
  async initialize(config?: ChatRAGConfig): Promise<void>

  /**
   * Process user message with RAG
   * @param {string} userMessage - User's message
   * @param {Student | null} currentStudent - Student info
   * @returns {Promise<ChatMessage>} - Assistant response
   */
  async processMessage(userMessage: string, currentStudent: Student | null): Promise<ChatMessage>

  /**
   * Get message history
   * @returns {ChatMessage[]}
   */
  getHistory(): ChatMessage[]

  /**
   * Clear message history
   */
  clearHistory(): void

  /**
   * Get RAG stats
   */
  getStats(): any
}

interface ChatRAGConfig {
  embeddingApiKey?: string
  llmApiKey?: string
  enableVectorSearch?: boolean
}

interface ChatMessage {
  id: string
  role: "user" | "assistant"
  content: string
  retrievedDocuments?: Array<{
    id: string
    content: string
    relevance: number
    source: string
  }>
  reasoning?: {
    confidence: number
    diversityScore: number
    intent: string
  }
  timestamp: Date
}

/**
 * ============================================================================
 * 7. LLM SERVICE API
 * ============================================================================
 */

/**
 * Reason with LLM using retrieved context
 * @param {string} userQuery - User's query
 * @param {string} retrievedContext - Context from vector DB
 * @param {LLMOptions} options - Options
 * @returns {Promise<LLMResponse>}
 */
export function reasonWithLLM(
  userQuery: string,
  retrievedContext: string,
  options?: LLMOptions,
): Promise<LLMResponse>

/**
 * Set LLM API key
 * @param {string | null} apiKey
 */
export function setLLMApiKey(apiKey: string | null): void

/**
 * Get LLM API key
 */
export function getLLMApiKey(): string | null

/**
 * Clear LLM API key
 */
export function clearLLMApiKey(): void

/**
 * Check if LLM is available
 */
export function isLLMAvailable(): boolean

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
