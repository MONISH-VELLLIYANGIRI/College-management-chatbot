// Chat interface header with branding, theme toggle, and API key settings

"use client"
import { Moon, Sun, Settings } from "lucide-react"
import { useState } from "react"
import { APIKeyModal } from "./api-key-modal"

interface ChatHeaderProps {
  isDark: boolean
  onThemeToggle: () => void
  onReset: () => void
}

export function ChatHeader({ isDark, onThemeToggle, onReset }: ChatHeaderProps) {
  const [isAPIKeyModalOpen, setIsAPIKeyModalOpen] = useState(false)

  return (
    <>
      <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
              <span className="text-xl font-bold text-white">🎓</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-base font-bold text-foreground sm:text-lg">College AI Assistant</h1>
              <p className="text-xs text-muted-foreground sm:text-sm">RAG + SQL Architecture</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Added API key settings button */}
            <button
              onClick={() => setIsAPIKeyModalOpen(true)}
              className="inline-flex items-center justify-center rounded-lg p-2 hover:bg-muted transition-colors"
              aria-label="API Settings"
              title="Configure OpenAI API"
            >
              <Settings className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </button>

            <button
              onClick={onThemeToggle}
              className="inline-flex items-center justify-center rounded-lg p-2 hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-slate-600" />}
            </button>
            <button
              onClick={onReset}
              className="inline-flex items-center justify-center rounded-lg px-3 py-2 text-xs font-medium text-muted-foreground hover:bg-muted transition-colors sm:text-sm"
            >
              🔄 Reset
            </button>
          </div>
        </div>
      </div>

      <APIKeyModal isOpen={isAPIKeyModalOpen} onClose={() => setIsAPIKeyModalOpen(false)} />
    </>
  )
}
