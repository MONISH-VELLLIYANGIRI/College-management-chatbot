// SQL-like Query Engine - Simulates database queries with WHERE, JOIN-like operations, and aggregations

import { getStudentById, getAttendance, getTimetable, getFees, getAcademics, studentsDB } from "@/data/mock-database"

export interface QueryResult {
  type: string
  data: any[]
  count: number
  aggregations?: Record<string, any>
}

export const queryStudentInfo = (studentId: string): QueryResult => {
  const student = getStudentById(studentId)
  return {
    type: "STUDENT",
    data: student ? [student] : [],
    count: student ? 1 : 0,
  }
}

export const queryAttendance = (studentId: string): QueryResult => {
  const attendance = getAttendance(studentId)
  const avgPercentage =
    attendance.length > 0 ? attendance.reduce((sum, a) => sum + a.percentage, 0) / attendance.length : 0

  return {
    type: "ATTENDANCE",
    data: attendance,
    count: attendance.length,
    aggregations: {
      averagePercentage: Math.round(avgPercentage * 100) / 100,
      lowestSubject:
        attendance.length > 0 ? attendance.reduce((min, a) => (a.percentage < min.percentage ? a : min)) : null,
    },
  }
}

export const querySchedule = (studentId?: string, day?: string): QueryResult => {
  let schedule = getTimetable(day)

  // Filter by common subjects for the student's department
  if (studentId) {
    const student = getStudentById(studentId)
    if (student) {
      const deptSubjects = getAttendance(studentId).map((a) => a.subject)
      schedule = schedule.filter((s) => deptSubjects.some((ds) => s.subject.includes(ds.split(" ")[0])))
    }
  }

  return {
    type: "SCHEDULE",
    data: schedule,
    count: schedule.length,
  }
}

export const queryFees = (studentId: string): QueryResult => {
  const fees = getFees(studentId)
  const totalDue = fees.reduce((sum, f) => sum + f.dueAmount, 0)
  const totalPaid = fees.reduce((sum, f) => sum + f.paidAmount, 0)

  return {
    type: "FEES",
    data: fees,
    count: fees.length,
    aggregations: {
      totalDue,
      totalPaid,
      pendingFees: fees.filter((f) => f.status !== "paid"),
    },
  }
}

export const queryAcademics = (studentId: string): QueryResult => {
  const academics = getAcademics(studentId)
  const currentAcademic = academics[academics.length - 1]
  const status = currentAcademic?.status || "unknown"

  return {
    type: "ACADEMICS",
    data: academics,
    count: academics.length,
    aggregations: {
      currentGPA: currentAcademic?.gpa || 0,
      status,
      needsAttention: status === "warning" || status === "probation",
    },
  }
}

export const queryAllStudents = (): QueryResult => {
  const students = Object.values(studentsDB)
  return {
    type: "STUDENTS",
    data: students,
    count: students.length,
  }
}
