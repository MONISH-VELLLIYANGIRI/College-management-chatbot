# RAG Pipeline Integration - Complete Flow

## Overview

The college management chatbot now uses a **complete Retrieval-Augmented Generation (RAG) pipeline** for every user query. This document explains how the RAG system works end-to-end.

## RAG Pipeline Flow

```
User Question
    ↓
[STEP 1: VECTORIZATION]
    ├─ Input: User query text
    ├─ Process: Convert question to vector embedding (384-dim)
    ├─ Service: embedding-service.ts (OpenAI/Hugging Face)
    └─ Output: Numerical vector representation
    ↓
[STEP 2: RETRIEVAL FROM VECTOR DATABASE]
    ├─ Input: Question vector + filters
    ├─ Process: Search vector database with MMR algorithm
    │   ├─ Fetch K=20 candidates (relevance-based)
    │   ├─ Apply Maximum Marginal Relevance (MMR)
    │   │   └─ Lambda=0.7 (70% relevance, 30% diversity)
    │   └─ Return top K=5 diverse documents
    ├─ Service: vector-db.ts + mmr-retriever.ts
    └─ Output: Top 5 relevant documents with scores
    ↓
[STEP 3: LLM REASONING WITH CONTEXT]
    ├─ Input: Original question + retrieved documents
    ├─ Process: Call LLM (GPT-3.5/GPT-4) with context
    ├─ Service: llm-service.ts (reasonWithLLM)
    ├─ Prompt: "Using the provided documents, answer: {question}"
    └─ Output: AI-generated answer with reasoning
    ↓
[STEP 4: RESPONSE SYNTHESIS]
    ├─ Input: LLM response + metadata
    ├─ Process: Format and prepare for UI display
    ├─ Include: Retrieved documents, confidence scores, processing time
    └─ Output: Final formatted response to user
```

## Implementation Details

### 1. RAG System Initialization (app startup)

**File:** `hooks/use-chat.ts`

```typescript
// Runs on component mount
useEffect(() => {
  const initRAG = async () => {
    if (!ragInitializedRef.current) {
      await initializeRAGSystem({
        mmrLambda: 0.7,    // Balance relevance and diversity
        topK: 5,           // Return top 5 documents
      })
      ragInitializedRef.current = true
    }
  }
  initRAG()
}, [])
```

**What happens:**
- Vector database is initialized with sample college management documents
- 15+ sample documents are vectorized and stored
- Ready for user queries

### 2. User Sends Message

**File:** `hooks/use-chat.ts` → `sendMessage()`

```typescript
async (userInput: string) => {
  // 1. Add user message to UI
  addMessage(userInput, "user")
  
  // 2. Identify student (optional)
  const studentMatch = Object.values(studentsDB).find(...)
  
  // 3. Execute RAG Pipeline
  const ragResponse = await processQueryWithRAG(
    userInput,           // User's question
    selectedStudent,     // Current student context
    {
      mmrLambda: 0.7,   // MMR parameters
      topK: 5,
    }
  )
}
```

### 3. Vector Embedding

**File:** `utils/unified-rag-system.ts` → `processQueryWithRAG()`

```typescript
// Step 1: Parse intent
const intentResult = parseIntent(userQuestion)

// Step 2: Vectorize the question
const embeddingResult = await embedText(userQuestion, {
  apiKey: embeddingApiKey || undefined,
  model: config.embeddingModel,
})

// Output: 384-dimensional embedding vector
// Time: ~200-500ms
```

**API Support:**
- **OpenAI**: text-embedding-3-small (384 dimensions)
- **Hugging Face**: sentence-transformers model

### 4. Vector Database Search with MMR

**File:** `utils/vector-db.ts` + `utils/mmr-retriever.ts`

```typescript
// Search vector database
const mmrOptions: MMRRetrievalOptions = {
  fetchK: 20,          // Fetch 20 candidates
  k: 5,                // Return top 5
  lambda: 0.7,         // Lambda parameter
}

const retrievalResult = retrieveWithMMR(
  questionVector,
  mmrOptions
)
```

**MMR Algorithm (Maximum Marginal Relevance):**
```
Score = λ * Relevance - (1-λ) * Similarity_to_retrieved

λ = 0.7 means:
  - 70% weight on relevance to query
  - 30% weight on avoiding duplicate information
```

**Result:** 5 diverse, highly relevant documents

### 5. LLM Reasoning with Retrieved Context

**File:** `utils/unified-rag-system.ts`

```typescript
// Construct context from retrieved documents
const retrievedDocs = retrievalResult.items // Top 5 documents
const contextStr = retrievedDocs
  .map(doc => `${doc.source}: ${doc.text}`)
  .join("\n\n")

// Call LLM with context
const llmResponse = await reasonWithLLM(
  userQuestion,
  contextStr,  // Context from vector DB
  {
    temperature: 0.7,
    model: "gpt-3.5-turbo",
  }
)
```

**LLM Prompt:**
```
You are a helpful college management assistant. Based on the following retrieved documents, 
please answer the student's question accurately and concisely.

RETRIEVED DOCUMENTS:
{documents}

STUDENT QUESTION:
{userQuestion}

ANSWER:
```

### 6. Response Metadata and Synthesis

**Returned Metadata:**
```typescript
{
  answer: "AI-generated response with reasoning",
  retrievedDocuments: [
    { id: "doc1", content: "...", relevance: 0.95, source: "policy" },
    { id: "doc2", content: "...", relevance: 0.87, source: "advice" },
    // ... up to 5 documents
  ],
  reasoning: {
    query: "user question",
    intent: "attendance" | "fees" | "schedule" | "academics",
    confidence: 0.92,
    diversityScore: 0.78,
  },
  metadata: {
    processingTime: 1250,       // ms
    embeddingTime: 350,         // ms
    retrievalTime: 120,         // ms
    reasoningTime: 780,         // ms
    vectorsUsed: 5,
  }
}
```

## Sample Query Flow

### Example: "What is the attendance policy?"

**Step 1: Vectorization**
- Question: "What is the attendance policy?"
- Embedding: [0.23, -0.45, 0.12, ..., 0.78] (384 dims)

**Step 2: Vector DB Search**
- Query against 15+ documents
- Similarity scores:
  - attendance-policy-1: 0.96
  - attendance-improve-1: 0.82
  - fee-policy-1: 0.23
  - schedule-policy-1: 0.19
  - academic-policy-1: 0.45

**After MMR (λ=0.7):**
- Fetch top 20 candidates
- Diversify results
- Return: [attendance-policy-1, attendance-improve-1, academic-policy-1, ...]

**Step 3: LLM Reasoning**
- Input: Question + 5 top documents
- LLM generates: "College attendance policy requires minimum 75% attendance..."

**Step 4: Final Response**
```
Answer: "College attendance policy requires minimum 75% attendance. 
Below 75% may result in academic probation. To improve attendance, 
contact your department head, provide medical certificates if needed, 
attend make-up sessions, or request a waiver if eligible."

Retrieved from: 2 policy documents, 1 advice document
Confidence: 94%
Processing time: 1,250ms
```

## Configuration Options

**File:** `utils/unified-rag-system.ts` → `RAGSystemConfig`

```typescript
interface RAGSystemConfig {
  embeddingApiKey?: string        // OpenAI/HF API key
  llmApiKey?: string              // OpenAI API key
  embeddingModel?: string         // "text-embedding-3-small" (default)
  llmModel?: string               // "gpt-3.5-turbo" or "gpt-4"
  mmrLambda?: number              // 0.7 (balance relevance/diversity)
  topK?: number                   // 5 (top documents to retrieve)
}
```

## Performance Metrics

| Operation | Time | Count |
|-----------|------|-------|
| Vectorization (embedding) | 200-500ms | 1 |
| Vector DB search (MMR) | 50-150ms | 1 |
| LLM reasoning | 500-2000ms | 1 |
| **Total pipeline** | **750-2650ms** | **1 query** |

## Sample Documents Included

The RAG system initializes with these documents:

### Attendance (3 docs)
- attendance-policy-1: Minimum 75% attendance requirement
- attendance-improve-1: Tips to improve attendance
- attendance-exception-1: Exception criteria

### Fees (3 docs)
- fee-payment-1: Payment methods and deadlines
- fee-extension-1: Extension process
- fee-calculation-1: Fee calculation details

### Schedule (3 docs)
- schedule-info-1: General schedule info
- schedule-change-1: How to change schedule
- schedule-exam-1: Exam schedule info

### Academics (3+ docs)
- academic-policy-1: Academic policies
- academic-support-1: Academic support resources
- grading-info-1: Grading system info

## Adding New Documents to Vector DB

**File:** `utils/reasoning-engine.ts` → `addDocumentToVectorDB()`

```typescript
// Add a new document
await addDocumentToVectorDB(
  "unique-id",
  "Document text content...",
  {
    category: "fees",
    type: "policy",
    semester: "2024-Spring"
  }
)

// Document is immediately:
// 1. Vectorized (384-dim embedding)
// 2. Added to vector database
// 3. Available for retrieval in next query
```

## Console Logging (Debug Mode)

When a query is processed, the console shows:

```
[Chat RAG Pipeline] Starting RAG query processing...
[Chat RAG Pipeline] Step 1: Vectorizing question: "Your question here"
[Chat RAG Pipeline] Step 2: Retrieving relevant documents from vector database...
[Chat RAG Pipeline] Step 3: Processing with RAG system...
[Chat RAG Pipeline] RAG Response: {
  retrievedDocs: 5,
  intent: "fees",
  confidence: 0.94,
  processingTime: 1250
}
[Chat RAG Pipeline] Enhanced with LLM reasoning
[Chat RAG Pipeline] Complete - Response sent to user
```

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    CHAT INTERFACE (UI)                      │
│                    page.tsx / chat component                │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                   USE-CHAT HOOK                             │
│          (hooks/use-chat.ts - sendMessage)                 │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│            UNIFIED RAG SYSTEM                              │
│    (utils/unified-rag-system.ts)                           │
│    - Orchestrates entire RAG pipeline                      │
│    - Coordinates: embedding → retrieval → reasoning        │
└─────────────────────────────────────────────────────────────┘
            ↓              ↓              ↓
    ┌───────────────┬──────────────┬──────────────┐
    ↓               ↓              ↓              ↓
EMBEDDING     VECTOR DB        MMR             LLM
SERVICE       RETRIEVAL        RETRIEVER       SERVICE
    
embedding-    vector-db.ts  mmr-retriever.ts llm-service.ts
service.ts    
    
384-dim       in-memory     diversity        gpt-3.5/
vectors       vector store  algorithm        gpt-4
```

## Key Features

✅ **Vector Embedding**: Questions converted to 384-dimensional vectors
✅ **Vector Database**: In-memory storage with fast similarity search
✅ **MMR Algorithm**: Balances relevance (70%) and diversity (30%)
✅ **LLM Integration**: GPT-3.5-turbo/GPT-4 with context
✅ **Student Context**: Personalized responses based on student ID
✅ **Metadata Tracking**: Processing times, confidence scores, document sources
✅ **Fallback System**: Graceful degradation if APIs fail
✅ **Console Logging**: Full visibility into RAG pipeline execution

## Testing the RAG Pipeline

**Try these queries:**

1. **Attendance**: "What is the attendance policy?"
   - Expected: Retrieves attendance policy docs, uses LLM to explain

2. **Fees**: "How do I pay my fees?"
   - Expected: Retrieves fee payment docs with multiple payment options

3. **Schedule**: "When is my next class?"
   - Expected: If student identified, retrieves their schedule

4. **Follow-up**: "Why is attendance important?"
   - Expected: Reasoning keywords trigger enhanced LLM reasoning

## Troubleshooting

**Issue**: Empty or irrelevant responses
- **Cause**: API key not configured
- **Fix**: Set `NEXT_PUBLIC_OPENAI_API_KEY` environment variable

**Issue**: Slow responses (>3s)
- **Cause**: LLM API latency
- **Fix**: Ensure good internet connection, check OpenAI status

**Issue**: Similar documents in results
- **Cause**: MMR lambda too high (>0.85)
- **Fix**: Lower lambda to ~0.7 for better diversity

## Environment Variables

Required:
```bash
NEXT_PUBLIC_OPENAI_API_KEY=sk-...    # For embeddings and LLM
```

Optional:
```bash
NEXT_PUBLIC_EMBEDDING_MODEL=text-embedding-3-small
NEXT_PUBLIC_LLM_MODEL=gpt-3.5-turbo
```

---

**Status**: ✅ RAG Pipeline Fully Integrated
**Last Updated**: January 2026
**Version**: 1.0.0
