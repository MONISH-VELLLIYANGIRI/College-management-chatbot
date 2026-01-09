// Mock database with realistic university data

import type { Student, Attendance, Timetable, Fee, Academic } from "@/types"

export const studentsDB: Record<string, Student> = {
  STU001: {
    id: "STU001",
    name: "Arjun Patel",
    dept: "Computer Science",
    year: 3,
    email: "arjun.patel@university.edu",
  },
  STU002: {
    id: "STU002",
    name: "Priya Sharma",
    dept: "Electronics",
    year: 2,
    email: "priya.sharma@university.edu",
  },
  STU003: {
    id: "STU003",
    name: "Rohan Kumar",
    dept: "Mechanical",
    year: 4,
    email: "rohan.kumar@university.edu",
  },
}

export const attendanceDB: Record<string, Attendance[]> = {
  STU001: [
    { studentId: "STU001", subject: "Data Structures", percentage: 92, lastUpdated: "2024-12-15" },
    { studentId: "STU001", subject: "Web Development", percentage: 88, lastUpdated: "2024-12-14" },
    { studentId: "STU001", subject: "Database Systems", percentage: 85, lastUpdated: "2024-12-13" },
  ],
  STU002: [
    { studentId: "STU002", subject: "Circuit Theory", percentage: 78, lastUpdated: "2024-12-15" },
    { studentId: "STU002", subject: "Signals & Systems", percentage: 81, lastUpdated: "2024-12-14" },
    { studentId: "STU002", subject: "Digital Electronics", percentage: 75, lastUpdated: "2024-12-13" },
  ],
  STU003: [
    { studentId: "STU003", subject: "Thermodynamics", percentage: 89, lastUpdated: "2024-12-15" },
    { studentId: "STU003", subject: "Mechanics", percentage: 91, lastUpdated: "2024-12-14" },
    { studentId: "STU003", subject: "Materials Science", percentage: 86, lastUpdated: "2024-12-13" },
  ],
}

export const timetableDB: Timetable[] = [
  { day: "Monday", subject: "Data Structures", time: "09:00 - 10:30", room: "A101", instructor: "Dr. Sharma" },
  { day: "Monday", subject: "Web Development", time: "11:00 - 12:30", room: "B202", instructor: "Prof. Verma" },
  { day: "Tuesday", subject: "Database Systems", time: "09:00 - 10:30", room: "A101", instructor: "Dr. Malhotra" },
  { day: "Wednesday", subject: "Circuit Theory", time: "10:00 - 11:30", room: "C303", instructor: "Prof. Singh" },
  { day: "Thursday", subject: "Thermodynamics", time: "09:00 - 10:30", room: "D404", instructor: "Dr. Desai" },
  { day: "Friday", subject: "Web Development", time: "14:00 - 15:30", room: "B202", instructor: "Prof. Verma" },
]

export const feesDB: Record<string, Fee[]> = {
  STU001: [
    {
      studentId: "STU001",
      semester: 5,
      totalFee: 50000,
      paidAmount: 50000,
      dueAmount: 0,
      status: "paid",
      dueDate: "2024-01-15",
    },
    {
      studentId: "STU001",
      semester: 6,
      totalFee: 50000,
      paidAmount: 30000,
      dueAmount: 20000,
      status: "partial",
      dueDate: "2025-02-15",
    },
  ],
  STU002: [
    {
      studentId: "STU002",
      semester: 3,
      totalFee: 50000,
      paidAmount: 0,
      dueAmount: 50000,
      status: "pending",
      dueDate: "2024-12-30",
    },
    {
      studentId: "STU002",
      semester: 4,
      totalFee: 50000,
      paidAmount: 50000,
      dueAmount: 0,
      status: "paid",
      dueDate: "2024-08-15",
    },
  ],
  STU003: [
    {
      studentId: "STU003",
      semester: 7,
      totalFee: 50000,
      paidAmount: 50000,
      dueAmount: 0,
      status: "paid",
      dueDate: "2024-01-15",
    },
    {
      studentId: "STU003",
      semester: 8,
      totalFee: 50000,
      paidAmount: 50000,
      dueAmount: 0,
      status: "paid",
      dueDate: "2024-08-15",
    },
  ],
}

export const academicsDB: Record<string, Academic[]> = {
  STU001: [
    {
      studentId: "STU001",
      semester: 5,
      gpa: 8.7,
      grades: { "Data Structures": "A", "Web Dev": "A-", Database: "B+" },
      status: "good",
    },
  ],
  STU002: [
    {
      studentId: "STU002",
      semester: 3,
      gpa: 7.2,
      grades: { "Circuit Theory": "B", Signals: "B+", Electronics: "B-" },
      status: "warning",
    },
  ],
  STU003: [
    {
      studentId: "STU003",
      semester: 7,
      gpa: 8.9,
      grades: { Thermodynamics: "A", Mechanics: "A", Materials: "A-" },
      status: "good",
    },
  ],
}

export const getStudentById = (id: string): Student | undefined => studentsDB[id]
export const getAttendance = (studentId: string): Attendance[] => attendanceDB[studentId] || []
export const getTimetable = (day?: string): Timetable[] => {
  if (!day) return timetableDB
  return timetableDB.filter((t) => t.day.toLowerCase() === day.toLowerCase())
}
export const getFees = (studentId: string): Fee[] => feesDB[studentId] || []
export const getAcademics = (studentId: string): Academic[] => academicsDB[studentId] || []
