// Student selection component for identifying users

"use client"

import type { Student } from "@/types"
import { studentsDB } from "@/data/mock-database"

interface StudentSelectorProps {
  onSelect: (studentId: string) => void
  currentStudent: Student | null
}

export function StudentSelector({ onSelect, currentStudent }: StudentSelectorProps) {
  const students = Object.values(studentsDB)

  if (currentStudent) {
    return (
      <div className="rounded-lg border border-border bg-muted p-4">
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
    )
  }

  return (
    <div className="rounded-lg border border-border bg-muted p-4">
      <p className="mb-3 text-sm font-medium text-foreground">👤 Select your profile:</p>
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2">
        {students.map((student) => (
          <button
            key={student.id}
            onClick={() => onSelect(student.id)}
            className="text-left rounded-lg border border-border bg-background p-3 hover:bg-muted transition-colors text-sm"
          >
            <p className="font-medium text-foreground">{student.name}</p>
            <p className="text-xs text-muted-foreground">{student.dept}</p>
          </button>
        ))}
      </div>
    </div>
  )
}
