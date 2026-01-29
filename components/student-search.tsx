// Student search component with name filtering

"use client"

import { useState, useMemo } from "react"
import type { Student } from "@/types"
import { Input } from "@/components/ui/input"

interface StudentSearchProps {
  students: Student[]
  onSelect: (student: Student) => void
  currentStudent: Student | null
}

export function StudentSearch({ students, onSelect, currentStudent }: StudentSearchProps) {
  const [searchQuery, setSearchQuery] = useState("")

  // Filter students based on search query
  const filteredStudents = useMemo(() => {
    if (!searchQuery.trim()) {
      return students
    }

    const query = searchQuery.toLowerCase()
    return students.filter(
      (student) =>
        student.name.toLowerCase().includes(query) ||
        student.id.toLowerCase().includes(query) ||
        student.dept.toLowerCase().includes(query) ||
        student.email.toLowerCase().includes(query)
    )
  }, [searchQuery, students])

  // Sort filtered results - exact name matches first, then partial matches
  const sortedStudents = useMemo(() => {
    if (!searchQuery.trim()) {
      return filteredStudents
    }

    const query = searchQuery.toLowerCase()
    return filteredStudents.sort((a, b) => {
      const aStartsWith = a.name.toLowerCase().startsWith(query)
      const bStartsWith = b.name.toLowerCase().startsWith(query)

      if (aStartsWith && !bStartsWith) return -1
      if (!aStartsWith && bStartsWith) return 1
      return 0
    })
  }, [filteredStudents, searchQuery])

  return (
    <div className="space-y-4">
      {/* Search input */}
      <div className="relative">
        <Input
          type="text"
          placeholder="🔍 Search by name, ID, or department..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-4 pr-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>

      {/* Search results */}
      {sortedStudents.length > 0 ? (
        <div className="space-y-2 max-h-80 overflow-y-auto">
          <p className="text-xs text-muted-foreground px-1">
            {sortedStudents.length} student{sortedStudents.length !== 1 ? "s" : ""} found
          </p>
          <div className="grid gap-2">
            {sortedStudents.map((student) => (
              <button
                key={student.id}
                onClick={() => onSelect(student)}
                className={`text-left rounded-lg border-2 p-3 transition-all ${
                  currentStudent?.id === student.id
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-950"
                    : "border-border bg-background hover:border-blue-300 hover:bg-muted"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white text-xs font-bold flex-shrink-0">
                    {student.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground truncate">{student.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {student.dept} • Year {student.year} • {student.id}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-8 text-muted-foreground">
          <p className="text-sm">No students found matching "{searchQuery}"</p>
          <p className="text-xs mt-1">Try searching by name, ID, or department</p>
        </div>
      )}

      {/* Recent/All students if no search */}
      {!searchQuery && students.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          <p className="text-sm">No students available</p>
        </div>
      )}
    </div>
  )
}
