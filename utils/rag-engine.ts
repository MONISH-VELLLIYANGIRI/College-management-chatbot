// RAG (Retrieval-Augmented Generation) Engine - Combines intent detection with data retrieval

import { parseIntent } from "./intent-parser"
import { queryAttendance, querySchedule, queryFees, queryAcademics } from "./query-engine"
import type { RAGOutputLayer, Student } from "@/types"

const generateAttendanceResponse = (
  queryResult: any,
  studentName: string,
): {
  formatted: string
  structured: string
} => {
  if (queryResult.data.length === 0) {
    return {
      formatted: `📊 I couldn't find attendance records for ${studentName}. Please check if you're registered for these courses.`,
      structured: `No attendance data available for ${studentName}.`,
    }
  }

  const avg = queryResult.aggregations?.averagePercentage || 0
  const records = queryResult.data.map((a: any) => `  • ${a.subject}: ${a.percentage}%`).join("\n")

  let statusEmoji = "✅"
  if (avg < 75) statusEmoji = "⚠️"
  if (avg < 60) statusEmoji = "❌"

  const formatted = `📊 Here's your attendance summary:\n\n${records}\n\nOverall: ${statusEmoji} ${avg}%\n\nKeep up with your classes!`
  const structured = `Student ${studentName} has the following attendance records: ${queryResult.data.map((a: any) => `${a.subject}: ${a.percentage}%`).join(", ")}. Average attendance: ${avg}%.`

  return { formatted, structured }
}

const generateFeesResponse = (
  queryResult: any,
  studentName: string,
): {
  formatted: string
  structured: string
} => {
  if (queryResult.data.length === 0) {
    return {
      formatted: `💰 No fee records found for ${studentName}.`,
      structured: `No fee data available for ${studentName}.`,
    }
  }

  const totalDue = queryResult.aggregations?.totalDue || 0
  if (totalDue === 0) {
    return {
      formatted: `✅ Great news! Your fees are all paid up. No pending dues.`,
      structured: `All fees paid. No pending dues.`,
    }
  }

  const pending = queryResult.aggregations?.pendingFees || []
  const details = pending.map((f: any) => `  • Semester ${f.semester}: ₹${f.dueAmount} due by ${f.dueDate}`).join("\n")

  const formatted = `💰 Fee Summary:\n\n${details}\n\nTotal Due: ₹${totalDue}\n\nPlease clear your dues at the finance office.`
  const structured = `Student ${studentName} has total dues of ₹${totalDue} across semesters. ${pending.map((f: any) => `Semester ${f.semester}: ₹${f.dueAmount}`).join("; ")}.`

  return { formatted, structured }
}

const generateScheduleResponse = (
  queryResult: any,
  day?: string,
): {
  formatted: string
  structured: string
} => {
  if (queryResult.data.length === 0) {
    const msg = day ? `📅 No classes scheduled for ${day}.` : `📅 No schedule information available.`
    return { formatted: msg, structured: msg }
  }

  const schedule = queryResult.data.map((t: any) => `  • ${t.day}: ${t.subject} at ${t.time} in ${t.room}`).join("\n")

  const formatted = `📅 Your Schedule:\n\n${schedule}\n\nDon't be late!`
  const structured = `Schedule: ${queryResult.data.map((t: any) => `${t.day} - ${t.subject} at ${t.time}`).join("; ")}.`

  return { formatted, structured }
}

const generateAcademicsResponse = (
  queryResult: any,
  studentName: string,
): {
  formatted: string
  structured: string
} => {
  if (queryResult.data.length === 0) {
    return {
      formatted: `📚 No academic records found for ${studentName}.`,
      structured: `No academic data available for ${studentName}.`,
    }
  }

  const agg = queryResult.aggregations || {}
  const gpa = agg.currentGPA || 0
  let statusEmoji = "✅"
  if (agg.status === "warning") statusEmoji = "⚠️"
  if (agg.status === "probation") statusEmoji = "❌"

  const formatted = `📚 Academic Performance:\n\nCurrent GPA: ${gpa.toFixed(2)}\nStatus: ${statusEmoji} ${agg.status || "good"}\n\nKeep pushing for excellence!`
  const structured = `Academic record: GPA ${gpa.toFixed(2)}, status ${agg.status || "good"}.`

  return { formatted, structured }
}

const generateStudentInfoResponse = (
  student: Student | null,
): {
  formatted: string
  structured: string
} => {
  if (!student) {
    return {
      formatted: "👤 Could not find student information.",
      structured: "No student information available.",
    }
  }

  const formatted = `👤 Student Profile:\n\nName: ${student.name}\nDepartment: ${student.dept}\nYear: ${student.year}\nEmail: ${student.email}`
  const structured = `Student: ${student.name}, Department: ${student.dept}, Year: ${student.year}, Email: ${student.email}.`

  return { formatted, structured }
}

export const ragEngine = (userMessage: string, currentStudent: Student | null): RAGOutputLayer => {
  const intentResult = parseIntent(userMessage)

  let queryResult: any = null
  let formattedResponse = ""
  let structuredContext = ""
  let dataDescription = ""

  switch (intentResult.intent) {
    case "ATTENDANCE":
      if (!currentStudent) {
        return {
          formattedResponse: "👤 Could you tell me which student you are? I can help you check attendance.",
          structuredContext: {
            intent: "ATTENDANCE",
            data: [],
            studentInfo: null,
            dataDescription: "Student not identified. Need student information to fetch attendance.",
          },
          result: {
            intent: "ATTENDANCE",
            confidence: intentResult.confidence,
            data: [],
            source: "ATTENDANCE_DB",
          },
        }
      }
      queryResult = queryAttendance(currentStudent.id)
      const attendanceRes = generateAttendanceResponse(queryResult, currentStudent.name)
      formattedResponse = attendanceRes.formatted
      structuredContext = attendanceRes.structured
      dataDescription = "Attendance data retrieved from database"
      break

    case "FEES":
      if (!currentStudent) {
        return {
          formattedResponse: "👤 Which student are you? Let me pull up your fee records.",
          structuredContext: {
            intent: "FEES",
            data: [],
            studentInfo: null,
            dataDescription: "Student not identified. Need student information to fetch fees.",
          },
          result: {
            intent: "FEES",
            confidence: intentResult.confidence,
            data: [],
            source: "FEES_DB",
          },
        }
      }
      queryResult = queryFees(currentStudent.id)
      const feesRes = generateFeesResponse(queryResult, currentStudent.name)
      formattedResponse = feesRes.formatted
      structuredContext = feesRes.structured
      dataDescription = "Fee data retrieved from database"
      break

    case "SCHEDULE":
      if (!currentStudent) {
        queryResult = querySchedule()
      } else {
        queryResult = querySchedule(currentStudent.id)
      }
      const scheduleRes = generateScheduleResponse(queryResult)
      formattedResponse = scheduleRes.formatted
      structuredContext = scheduleRes.structured
      dataDescription = "Schedule data retrieved from database"
      break

    case "ACADEMICS":
      if (!currentStudent) {
        return {
          formattedResponse: "👤 Tell me your name so I can check your academic performance.",
          structuredContext: {
            intent: "ACADEMICS",
            data: [],
            studentInfo: null,
            dataDescription: "Student not identified. Need student information to fetch academics.",
          },
          result: {
            intent: "ACADEMICS",
            confidence: intentResult.confidence,
            data: [],
            source: "ACADEMICS_DB",
          },
        }
      }
      queryResult = queryAcademics(currentStudent.id)
      const academicsRes = generateAcademicsResponse(queryResult, currentStudent.name)
      formattedResponse = academicsRes.formatted
      structuredContext = academicsRes.structured
      dataDescription = "Academic data retrieved from database"
      break

    case "STUDENT_INFO":
      const infoRes = generateStudentInfoResponse(currentStudent)
      formattedResponse = infoRes.formatted
      structuredContext = infoRes.structured
      dataDescription = "Student profile information"
      break

    case "GREETING":
      formattedResponse =
        "🤖 Hello! I'm your AI College Assistant. I can help you with attendance, fees, schedule, and academic records. How can I assist you today?"
      structuredContext = "Greeting received. Ready to assist with college management tasks."
      dataDescription = "Greeting"
      break

    default:
      formattedResponse =
        "🤔 I didn't quite understand that. You can ask me about your attendance, fees, schedule, or academic performance. What would you like to know?"
      structuredContext = "Query intent not clearly identified. Requesting clarification."
      dataDescription = "Unknown intent"
  }

  return {
    formattedResponse,
    structuredContext: {
      intent: intentResult.intent,
      data: queryResult?.data || [],
      studentInfo: currentStudent || null,
      dataDescription,
    },
    result: {
      intent: intentResult.intent,
      confidence: intentResult.confidence,
      data: queryResult?.data || [],
      source: queryResult?.type || "UNKNOWN",
    },
  }
}
