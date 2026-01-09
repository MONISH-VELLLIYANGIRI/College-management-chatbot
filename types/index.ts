// Type definitions for the college management chatbot system

export interface Student {
  id: string
  name: string
  dept: string
  year: number
  email: string
}

export interface Attendance {
  studentId: string
  subject: string
  percentage: number
  lastUpdated: string
}

export interface Timetable {
  day: string
  subject: string
  time: string
  room: string
  instructor: string
}

export interface Fee {
  studentId: string
  semester: number
  totalFee: number
  paidAmount: number
  dueAmount: number
  status: "pending" | "partial" | "paid"
  dueDate: string
}

export interface Academic {
  studentId: string
  semester: number
  gpa: number
  grades: Record<string, string>
  status: "good" | "warning" | "probation"
}

export interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export interface ChatContext {
  currentStudent: Student | null
  messages: Message[]
  conversationState: Record<string, any>
}

export interface RAGResult {
  intent: string
  confidence: number
  data: any[]
  source: string
}

export interface RAGOutputLayer {
  formattedResponse: string // For UI display
  structuredContext: {
    // For LLM reasoning
    intent: string
    data: any[]
    studentInfo?: Student | null
    dataDescription: string
  }
  result: RAGResult
}

export interface EnhancedMessage extends Message {
  llmMode?: "data" | "data+reasoning" | "fallback"
  structuredContext?: any
  requiresReasoning?: boolean
}
