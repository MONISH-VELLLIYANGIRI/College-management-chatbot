# Complete RAG System Implementation Guide

## Architecture Overview

This is a complete Retrieval-Augmented Generation (RAG) system with the following pipeline:

```
User Question
    ↓
[1] Question Vectorization (Encoding LLM)
    ↓
[2] Vector Database Storage (In-Memory)
    ↓
[3] MMR Retrieval (Maximum Marginal Relevance)
    ↓
[4] Retrieved Context + Structured Data
    ↓
[5] LLM Reasoning (OpenAI GPT-3.5/4)
    ↓
Detailed Answer
```

## Components

### 1. **Vector Database** (`vector-db.ts`)
- Stores embeddings with metadata
- Provides cosine similarity and Euclidean distance calculations
- Supports semantic search
- In-memory storage (can be extended to use external DBs like Pinecone, Weaviate)

**Key Functions:**
- `getVectorDatabase()` - Get singleton instance
- `addVector(item)` - Add single vector
- `addVectors(items)` - Batch add vectors
- `search(queryEmbedding, topK)` - Semantic search
- `hybridSearch(queryEmbedding, topK, filters)` - Search with metadata filters

### 2. **Embedding Service** (`embedding-service.ts`)
- Vectorizes text using encoding LLMs
- Supports OpenAI and Hugging Face APIs
- Falls back to local deterministic embeddings if no API available
- Handles batch processing

**Key Functions:**
- `embedText(text, options)` - Embed single text
- `embedTexts(texts, options)` - Batch embed texts
- `setEmbeddingApiKey(apiKey)` - Configure API key
- Dimension: 384 for local, varies by model for APIs

### 3. **MMR Retriever** (`mmr-retriever.ts`)
- Implements Maximum Marginal Relevance algorithm
- Balances relevance to query with diversity among results
- λ (lambda) parameter controls trade-off (0-1):
  - Higher λ = More relevance-focused
  - Lower λ = More diversity-focused
- Prevents redundant/similar documents in results

**Key Functions:**
- `retrieveWithMMR(queryEmbedding, options)` - Retrieve with MMR
- `retrieveWithMMRAndFilters(queryEmbedding, filters, options)` - MMR with metadata filters

### 4. **Reasoning Engine** (`reasoning-engine.ts`)
- Performs semantic reasoning with vector retrieval
- Integrates with LLM for detailed answers
- Calculates confidence scores based on retrieval quality
- Supports batch reasoning

**Key Functions:**
- `initializeVectorDatabase(documents, apiKey)` - Initialize with documents
- `performReasoning(input, embeddingApiKey, llmApiKey)` - Main reasoning function
- `semanticSearch(query, topK, apiKey)` - Direct semantic search
- `advancedReasoning(query, lambda, context, ...)` - Custom reasoning

### 5. **Unified RAG System** (`unified-rag-system.ts`)
- Orchestrates all components
- Complete end-to-end pipeline
- Easy-to-use interface

**Key Functions:**
- `initializeRAGSystem(config)` - Setup with sample college data
- `processQueryWithRAG(question, student, config)` - Main query processing
- `addDocumentsToRAG(documents, config)` - Add new documents
- `getRAGStats()` - System statistics

## Usage Examples

### Basic Setup

```typescript
import {
  initializeRAGSystem,
  processQueryWithRAG,
  getRAGStats,
} from "@/utils/unified-rag-system"

// Initialize RAG system with embedding and LLM APIs
await initializeRAGSystem({
  embeddingApiKey: "your-openai-key",
  llmApiKey: "your-openai-key",
  embeddingModel: "text-embedding-3-small",
  llmModel: "gpt-3.5-turbo",
  mmrLambda: 0.7, // 70% relevance, 30% diversity
  topK: 5, // Retrieve top 5 documents
})
```

### Process User Query

```typescript
const response = await processQueryWithRAG(
  "What should I do about my low attendance?",
  currentStudent,
  {
    embeddingApiKey: process.env.OPENAI_API_KEY,
    llmApiKey: process.env.OPENAI_API_KEY,
  },
)

console.log("Answer:", response.answer)
console.log("Retrieved Documents:", response.retrievedDocuments)
console.log("Confidence:", response.reasoning.confidence)
console.log("Processing Time:", response.metadata.processingTime, "ms")
```

### Advanced Reasoning with Custom Parameters

```typescript
import { advancedReasoning } from "@/utils/reasoning-engine"

const result = await advancedReasoning(
  "How can I improve my GPA?",
  0.8, // Higher relevance focus
  "Student is on academic probation",
  embeddingApiKey,
  llmApiKey,
)

console.log("Detailed Reasoning:", result.reasoning)
console.log("Retrieved Context:", result.retrievedDocuments)
console.log("Diversity Score:", result.diversityScore)
```

### Add Custom Documents

```typescript
import { addDocumentsToRAG } from "@/utils/unified-rag-system"

const newDocuments = [
  {
    id: "scholarship-1",
    content:
      "Merit scholarships: Available for students with GPA 3.5+. Application deadline is March 31.",
    source: "faq",
    metadata: { category: "financial", type: "scholarship" },
    timestamp: new Date(),
  },
  {
    id: "internship-1",
    content:
      "Internship opportunities: Summer internships available with leading tech companies. Apply through career portal.",
    source: "faq",
    metadata: { category: "career", type: "internship" },
    timestamp: new Date(),
  },
]

const added = await addDocumentsToRAG(newDocuments, {
  embeddingApiKey: process.env.OPENAI_API_KEY,
})

console.log(`Added ${added} documents to RAG system`)
```

### Semantic Search

```typescript
import { semanticSearch } from "@/utils/reasoning-engine"

const results = await semanticSearch(
  "How do I register for courses?",
  10, // Top 10 results
  embeddingApiKey,
)

results.forEach((result) => {
  console.log(`[${result.relevance.toFixed(3)}] ${result.text}`)
})
```

## MMR Algorithm Explanation

Maximum Marginal Relevance balances two competing objectives:

1. **Relevance to Query**: How similar is the document to the query?
2. **Diversity**: How different are selected documents from each other?

**Formula:**
```
MMR_Score = λ × (Relevance to Query) - (1 - λ) × (Max Similarity to Already Selected)
```

**Trade-off Parameter (λ):**
- `λ = 1.0`: Pure relevance-based ranking
- `λ = 0.7`: 70% relevance, 30% diversity (default)
- `λ = 0.5`: Balanced relevance and diversity
- `λ = 0.0`: Pure diversity-based ranking

## Configuration Options

```typescript
interface RAGSystemConfig {
  embeddingApiKey?: string // OpenAI or Hugging Face key
  llmApiKey?: string // OpenAI API key
  embeddingModel?: string // "text-embedding-3-small" or HF model
  llmModel?: string // "gpt-3.5-turbo" or "gpt-4"
  mmrLambda?: number // 0-1: relevance vs diversity trade-off
  topK?: number // Number of documents to retrieve
}
```

## Vector Database Storage

- **Dimension**: 384 (default for sentence transformers)
- **Similarity Metric**: Cosine similarity
- **Storage**: In-memory (expandable to Pinecone, Weaviate, Qdrant)
- **Capacity**: Thousands of vectors in-memory

### Scaling to External Vector DBs

To use external vector databases, modify `vector-db.ts`:

```typescript
// Example: Integrate with Pinecone
import { Pinecone } from "@pinecone-database/pinecone"

const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
})

// Use pinecone index instead of in-memory storage
```

## API Key Configuration

### Option 1: Environment Variables
```
OPENAI_API_KEY=sk-...
EMBEDDING_API_KEY=sk-...
```

### Option 2: localStorage (Browser)
```typescript
localStorage.setItem("llm_api_key", "sk-...")
localStorage.setItem("embedding_api_key", "sk-...")
```

### Option 3: Runtime Configuration
```typescript
setLLMApiKey("sk-...")
setEmbeddingApiKey("sk-...")
```

## Performance Metrics

Response includes detailed timing breakdown:
- `embeddingTime`: Time to vectorize query
- `retrievalTime`: Time for MMR retrieval
- `reasoningTime`: Time for LLM reasoning
- `processingTime`: Total end-to-end time
- `vectorsUsed`: Number of documents retrieved

## Error Handling

The system gracefully handles errors:
- Missing API keys: Uses local embeddings fallback
- Network failures: Returns cached or fallback responses
- Invalid inputs: Validates and sanitizes before processing

## Data Privacy

- Embeddings stored in-memory by default
- Structured student data not sent to external APIs
- Only query text and retrieved context sent to LLM
- No data persistence by default

## Extending the System

### Add Custom Document Sources
```typescript
const customDocs = [
  {
    id: "custom-1",
    content: "Your content here",
    source: "custom-source",
    metadata: { /* your metadata */ },
    timestamp: new Date(),
  },
]

await addDocumentsToRAG(customDocs, config)
```

### Custom Metadata Filters
```typescript
import { retrieveWithMMRAndFilters } from "@/utils/mmr-retriever"

const filtered = retrieveWithMMRAndFilters(
  queryEmbedding,
  { category: "attendance", type: "policy" }, // Filters
  { k: 5, lambda: 0.7 },
)
```

### Monitor System Health
```typescript
import { getRAGStats } from "@/utils/unified-rag-system"

const stats = getRAGStats()
console.log(`Vector DB Status:`)
console.log(`- Total Vectors: ${stats.totalVectors}`)
console.log(`- Dimension: ${stats.dimension}`)
console.log(`- Storage Size: ${stats.storageApproxSize}`)
```

## Troubleshooting

### Low Confidence Scores
- Add more relevant documents to vector database
- Adjust MMR lambda parameter (increase for more relevance focus)
- Check embedding quality

### Slow Response Times
- Reduce topK value
- Use external vector database for large datasets
- Optimize LLM model (use faster models)

### Irrelevant Results
- Check document quality and metadata
- Adjust MMR lambda to favor relevance (increase λ)
- Ensure documents cover user's domain

## Next Steps

1. Deploy to production with persistent vector storage
2. Implement document management UI
3. Add document versioning and updates
4. Monitor and improve retrieval quality
5. Integrate with your database/CMS
