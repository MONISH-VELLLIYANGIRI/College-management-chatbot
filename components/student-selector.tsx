// Student selection component for identifying users

"use client"

import type { Student } from "@/types"
import { studentsDB } from "@/data/mock-database"
import { StudentSearch } from "@/components/student-search"

interface StudentSelectorProps {
  onSelect: (studentId: string) => void
  currentStudent: Student | null
}

export function StudentSelector({ onSelect, currentStudent }: StudentSelectorProps) {
  const students = Object.values(studentsDB)

  const handleSelectStudent = (student: Student) => {
    onSelect(student.id)
  }

  if (currentStudent) {
    return (
      <div className="space-y-4">
        {/* Current student card */}
        <div className="rounded-lg border border-border bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 p-4">
          <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wide">Currently Selected</p>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white font-bold">
              {currentStudent.name.charAt(0)}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">{currentStudent.name}</p>
              <p className="text-xs text-muted-foreground">
                {currentStudent.dept} • Year {currentStudent.year}
              </p>
            </div>
          </div>
        </div>

        {/* Search to switch student */}
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wide">Switch Student</p>
          <StudentSearch students={students} onSelect={handleSelectStudent} currentStudent={currentStudent} />
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="space-y-4">
        <div>
          <p className="text-sm font-medium text-foreground">👤 Find & Select Your Profile</p>
          <p className="text-xs text-muted-foreground mt-1">Search by name, ID, or department</p>
        </div>
        <StudentSearch students={students} onSelect={handleSelectStudent} currentStudent={currentStudent} />
      </div>
    </div>
  )
}
