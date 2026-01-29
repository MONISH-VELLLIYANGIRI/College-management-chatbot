// RAG System Architecture Diagram & Flow

/**
 * ============================================================================
 * COMPLETE RAG SYSTEM ARCHITECTURE
 * ============================================================================
 *
 * ┌─────────────────────────────────────────────────────────────────────────┐
 * │                          USER INTERFACE LAYER                           │
 * │                                                                          │
 * │  Chat Component (React)                                                 │
 * │  ┌──────────────────────────────────────────────────────────────────┐  │
 * │  │ User Input: "What should I do about my low attendance?"         │  │
 * │  │ Student Context: {name, id, department, year}                   │  │
 * │  └──────────────────────────────────────────────────────────────────┘  │
 * └────────────────────────┬────────────────────────────────────────────────┘
 *                          │
 *                          ▼
 * ┌─────────────────────────────────────────────────────────────────────────┐
 * │                     UNIFIED RAG SYSTEM LAYER                            │
 * │                    (unified-rag-system.ts)                              │
 * │                                                                          │
 * │  ┌──────────────────────────────────────────────────────────────────┐  │
 * │  │ 1. PARSE INTENT                                                 │  │
 * │  │    Using: intent-parser.ts                                      │  │
 * │  │    Detects: ATTENDANCE, FEES, SCHEDULE, ACADEMICS, etc.         │  │
 * │  └──────────────────────────────────────────────────────────────────┘  │
 * │                                                                          │
 * │  ┌──────────────────────────────────────────────────────────────────┐  │
 * │  │ 2. VECTORIZE QUESTION                                           │  │
 * │  │    Using: embedding-service.ts                                  │  │
 * │  │    Input: "What should I do about low attendance?"              │  │
 * │  │    Output: Vector[384] = semantic representation                │  │
 * │  │    Provider: OpenAI / Hugging Face / Local Fallback            │  │
 * │  └──────────────────────────────────────────────────────────────────┘  │
 * │         │                                                                │
 * │         ▼                                                                │
 * │  ┌──────────────────────────────────────────────────────────────────┐  │
 * │  │ 3. RETRIEVE WITH MMR                                            │  │
 * │  │    Using: mmr-retriever.ts                                      │  │
 * │  │    Algorithm:                                                    │  │
 * │  │    MMR = λ × Relevance - (1-λ) × Similarity to Selected         │  │
 * │  │    λ = 0.7 (default)                                             │  │
 * │  │                                                                   │  │
 * │  │    Step 1: Find top-20 candidates by similarity                 │  │
 * │  │    Step 2: Iteratively select top-5 using MMR                   │  │
 * │  │    Result: Balanced relevance + diversity                       │  │
 * │  └──────────────────────────────────────────────────────────────────┘  │
 * │         │                                                                │
 * │         └─────────────────────────────────────────────────────────────┐ │
 * └─────────────────────────────────────────────────────────────────────┬─┘ │
 *                          ▼                                            │    │
 * ┌─────────────────────────────────────────────────────────────────────┐   │
 * │                    VECTOR DATABASE LAYER                           │   │
 * │                   (vector-db.ts)                                   │   │
 * │                                                                     │   │
 * │  Storage:                                                           │   │
 * │  ┌─────────────────────────────────────────────────────────────┐  │   │
 * │  │ Document 1: "Attendance policy..."         → Vector[384]   │  │   │
 * │  │ Document 2: "How to improve attendance..." → Vector[384]   │  │   │
 * │  │ Document 3: "Fee payment options..."      → Vector[384]   │  │   │
 * │  │ ...                                                          │  │   │
 * │  │ Document N: "Academic probation..."       → Vector[384]   │  │   │
 * │  └─────────────────────────────────────────────────────────────┘  │   │
 * │                                                                     │   │
 * │  Retrieval Methods:                                                 │   │
 * │  • Cosine Similarity: Measure how close vectors are                │   │
 * │  • Euclidean Distance: Alternative metric                          │   │
 * │  • Metadata Filtering: Filter by category, type, etc.              │   │
 * │                                                                     │   │
 * │  Output:                                                            │   │
 * │  [                                                                  │   │
 * │    {id: "doc-1", text: "...", relevance: 0.95},                   │   │
 * │    {id: "doc-2", text: "...", relevance: 0.92},                   │   │
 * │    {id: "doc-3", text: "...", relevance: 0.87},                   │   │
 * │    ...                                                              │   │
 * │  ]                                                                  │   │
 * └─────────────────────────────────────────────────────────────────────┘   │
 *                          ▲                                                │
 *                          └────────────────────────────────────────────────┘
 *
 * ┌─────────────────────────────────────────────────────────────────────────┐
 * │                   CONTEXT PREPARATION LAYER                             │
 * │                                                                          │
 * │  Combine:                                                               │
 * │  1. Retrieved Vector Documents (from MMR)                               │
 * │  2. Structured Student Data:                                            │
 * │     - Attendance records                                                │
 * │     - Fee information                                                   │
 * │     - Schedule                                                          │
 * │     - Academic records                                                  │
 * │     - Query Intent                                                      │
 * │                                                                          │
 * │  Final Context:                                                         │
 * │  ─────────────────────────────────────────────────────────────────────  │
 * │  "User Query: What should I do about my low attendance?"                │
 * │  Student: John Doe (ID: 123)                                            │
 * │  Intent: ATTENDANCE                                                     │
 * │                                                                          │
 * │  Retrieved Knowledge Base:                                              │
 * │  [1] (Relevance: 95.2%) Attendance policy: Students must maintain 75%   │
 * │  [2] (Relevance: 91.8%) To improve attendance: Contact department head  │
 * │  [3] (Relevance: 87.3%) Academic probation: Below 75% may result in...  │
 * │                                                                          │
 * │  Current Attendance Data:                                               │
 * │  - Math: 60%                                                            │
 * │  - Physics: 70%                                                         │
 * │  - Chemistry: 65%                                                       │
 * │  Average: 65% (Below 75% threshold)                                     │
 * │  ─────────────────────────────────────────────────────────────────────  │
 * └─────────────────────────────────────────────────────────────────────────┘
 *                          │
 *                          ▼
 * ┌─────────────────────────────────────────────────────────────────────────┐
 * │                    REASONING ENGINE LAYER                               │
 * │                                                                          │
 * │  Enhanced Reasoning (reasoning-engine.ts):                              │
 * │  1. Input: Full context from above                                      │
 * │  2. Process:                                                             │
 * │     - Calculate confidence (avg relevance)                              │
 * │     - Calculate diversity (document diversity)                          │
 * │  3. Output: Metadata for response tracking                              │
 * └─────────────────────────────────────────────────────────────────────────┘
 *                          │
 *                          ▼
 * ┌─────────────────────────────────────────────────────────────────────────┐
 * │                        LLM LAYER                                         │
 * │                   (llm-service.ts)                                      │
 * │                                                                          │
 * │  Input to LLM:                                                           │
 * │  ┌───────────────────────────────────────────────────────────────────┐  │
 * │  │ System: You are a college assistant specializing in reasoning     │  │
 * │  │ User: [Full context from preparation layer]                       │  │
 * │  │                                                                    │  │
 * │  │ Question: What should I do about my low attendance?               │  │
 * │  └───────────────────────────────────────────────────────────────────┘  │
 * │                                                                          │
 * │  LLM Processing:                                                        │
 * │  • GPT-3.5-turbo or GPT-4                                               │
 * │  • Temperature: 0.7 (balanced)                                          │
 * │  • Max tokens: 500                                                      │
 * │  • Context window: 4K or 8K tokens                                      │
 * │                                                                          │
 * │  Output from LLM:                                                       │
 * │  ┌───────────────────────────────────────────────────────────────────┐  │
 * │  │ "Based on the college policy, you must maintain 75% attendance.  │  │
 * │  │ Your current average is 65%, which puts you at risk of academic  │  │
 * │  │ probation.                                                        │  │
 * │  │                                                                    │  │
 * │  │ Here are immediate action steps:                                 │  │
 * │  │ 1. Contact your department head to explain your situation         │  │
 * │  │ 2. If you have medical reasons, provide medical certificates     │  │
 * │  │ 3. Attend all remaining classes for these subjects               │  │
 * │  │ 4. Ask about make-up sessions or attendance waivers              │  │
 * │  │                                                                    │  │
 * │  │ Act quickly - you have limited time to bring up your attendance."│  │
 * │  └───────────────────────────────────────────────────────────────────┘  │
 * └─────────────────────────────────────────────────────────────────────────┘
 *                          │
 *                          ▼
 * ┌─────────────────────────────────────────────────────────────────────────┐
 * │                     RESPONSE LAYER                                       │
 * │                                                                          │
 * │  Final Response Structure:                                              │
 * │  {                                                                       │
 * │    answer: "[Detailed answer from LLM]",                                │
 * │    retrievedDocuments: [                                                │
 * │      {                                                                   │
 * │        id: "attendance-policy-1",                                        │
 * │        content: "College attendance policy...",                          │
 * │        relevance: 0.95,                                                 │
 * │        source: "policy"                                                 │
 * │      },                                                                  │
 * │      // ... more documents                                              │
 * │    ],                                                                    │
 * │    reasoning: {                                                         │
 * │      query: "What should I do about my low attendance?",                │
 * │      intent: "ATTENDANCE",                                              │
 * │      confidence: 0.92,      // Avg relevance of retrieved docs          │
 * │      diversityScore: 0.45   // How diverse the results are              │
 * │    },                                                                    │
 * │    metadata: {                                                          │
 * │      processingTime: 245,    // Total ms                                │
 * │      embeddingTime: 45,      // Vectorization                           │
 * │      retrievalTime: 78,      // MMR retrieval                           │
 * │      reasoningTime: 122,     // LLM reasoning                           │
 * │      vectorsUsed: 3          // Documents retrieved                     │
 * │    }                                                                     │
 * │  }                                                                       │
 * └─────────────────────────────────────────────────────────────────────────┘
 *                          │
 *                          ▼
 * ┌─────────────────────────────────────────────────────────────────────────┐
 * │                    BACK TO USER INTERFACE                               │
 * │                                                                          │
 * │  Display:                                                               │
 * │  ┌────────────────────────────────────────────────────────────────────┐ │
 * │  │ Assistant: [Answer text]                                           │ │
 * │  │                                                                     │ │
 * │  │ 📚 Retrieved 3 documents                                            │ │
 * │  │ ✅ Confidence: 92%                                                 │ │
 * │  │ 🌈 Diversity: 45%                                                  │ │
 * │  │ ⏱️ Processed in 245ms                                              │ │
 * │  └────────────────────────────────────────────────────────────────────┘ │
 * └─────────────────────────────────────────────────────────────────────────┘
 *
 * ============================================================================
 * KEY METRICS EXPLAINED
 * ============================================================================
 *
 * CONFIDENCE SCORE (0-1):
 *   • Average relevance of retrieved documents
 *   • Higher = better match found in knowledge base
 *   • Used to indicate answer reliability
 *   • Example: 0.92 = 92% sure we found good context
 *
 * DIVERSITY SCORE (0-1):
 *   • How different the retrieved documents are from each other
 *   • Lower = more similar/redundant documents
 *   • Higher = more diverse perspectives
 *   • Example: 0.45 = documents cover different aspects
 *
 * LAMBDA (λ) PARAMETER:
 *   • Controls MMR trade-off
 *   • λ = 1.0 → Pure relevance (ignore diversity)
 *   • λ = 0.7 → 70% relevance, 30% diversity (default)
 *   • λ = 0.5 → Balanced
 *   • λ = 0.0 → Pure diversity (ignore relevance)
 *
 * ============================================================================
 * PERFORMANCE CHARACTERISTICS
 * ============================================================================
 *
 * Typical Response Times:
 * • Embedding: 40-80ms (depends on API)
 * • MMR Retrieval: 50-150ms (depends on vector DB size)
 * • LLM Reasoning: 100-300ms (depends on response length)
 * • Total: 200-500ms
 *
 * Scalability:
 * • In-memory: ~10,000 vectors on standard machine
 * • With external DB: Millions of vectors possible
 * • Embedding dimension: 384 (standard)
 * • Document size: Supports variable lengths
 *
 * ============================================================================
 * EXTENDING THE ARCHITECTURE
 * ============================================================================
 *
 * Add New Data Sources:
 *   1. Create documents in new source format
 *   2. Call addDocumentsToRAG() to vectorize
 *   3. System automatically retrieves when relevant
 *
 * Use External Vector DB:
 *   1. Modify vector-db.ts to use Pinecone/Weaviate
 *   2. Benefits: Persistence, scalability, durability
 *   3. Same API, different backend
 *
 * Custom Reasoning Logic:
 *   1. Use advancedReasoning() with custom lambda
 *   2. Add custom context before LLM call
 *   3. Implement custom filters
 *
 * ============================================================================
 */

// Flow Visualization in Code
const RAG_FLOW = {
  "1_INPUT": "User Question + Student Context",
  "2_INTENT": "Parse intent (ATTENDANCE, FEES, etc.)",
  "3_VECTORIZE": "Convert question to 384-dim vector",
  "4_RETRIEVE": "MMR retrieval from vector DB",
  "5_CONTEXT": "Combine retrieved docs + structured data",
  "6_REASON": "LLM processes full context",
  "7_OUTPUT": "Detailed answer with citations",
  "8_METRICS": "Return confidence + diversity scores",
}

// Example Lambda Configurations
const LAMBDA_CONFIGS = {
  "relevance_focused": { lambda: 0.9, description: "90% relevance, 10% diversity" },
  "default": { lambda: 0.7, description: "70% relevance, 30% diversity" },
  "balanced": { lambda: 0.5, description: "50% relevance, 50% diversity" },
  "diversity_focused": { lambda: 0.3, description: "30% relevance, 70% diversity" },
}

// Document Source Types
const DOC_SOURCES = [
  "attendance",  // Attendance policies and records
  "fees",        // Fee information and payment options
  "schedule",    // Class schedules and timetables
  "academics",   // Academic performance and GPA
  "faq",         // General FAQ and policies
  "policy",      // College policies and procedures
]

// Metadata Examples
const METADATA_FILTERS = {
  category: ["attendance", "fees", "schedule", "academics", "financial"],
  type: ["policy", "advice", "info", "procedure"],
  importance: ["critical", "high", "medium", "low"],
}
