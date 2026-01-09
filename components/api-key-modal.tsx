"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { setLLMApiKey, clearLLMApiKey, isLLMAvailable } from "@/services/llm-service"

interface APIKeyModalProps {
  isOpen: boolean
  onClose: () => void
}

export function APIKeyModal({ isOpen, onClose }: APIKeyModalProps) {
  const [apiKey, setApiKey] = useState("")
  const [showKey, setShowKey] = useState(false)
  const [isSaved, setIsSaved] = useState(isLLMAvailable())

  const handleSave = () => {
    if (apiKey.trim()) {
      setLLMApiKey(apiKey)
      setIsSaved(true)
      setApiKey("")
    }
  }

  const handleClear = () => {
    clearLLMApiKey()
    setIsSaved(false)
    setApiKey("")
  }

  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-lg border border-border bg-background p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-foreground">OpenAI API Configuration</h2>
          <button
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-lg p-1 hover:bg-muted transition-colors"
          >
            <X className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">API Key</label>
            <div className="relative">
              <input
                type={showKey ? "text" : "password"}
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk-..."
                className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="button"
                onClick={() => setShowKey(!showKey)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
              >
                {showKey ? "Hide" : "Show"}
              </button>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Get your API key from{" "}
              <a
                href="https://platform.openai.com/api-keys"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                OpenAI Dashboard
              </a>
            </p>
          </div>

          {isSaved && (
            <div className="rounded-lg bg-green-500/10 border border-green-500/20 p-3">
              <p className="text-xs text-green-700 dark:text-green-400">✅ API Key saved successfully</p>
            </div>
          )}

          <div className="flex gap-2">
            <button
              onClick={handleSave}
              disabled={!apiKey.trim()}
              className="flex-1 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Save API Key
            </button>
            {isSaved && (
              <button
                onClick={handleClear}
                className="flex-1 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
              >
                Clear
              </button>
            )}
          </div>

          <div className="rounded-lg bg-muted p-3 space-y-2">
            <p className="text-xs font-medium text-foreground">How it works:</p>
            <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
              <li>Your API key is stored locally in your browser</li>
              <li>Never shared with our servers</li>
              <li>Enhances responses using OpenAI's GPT</li>
              <li>Works offline without an API key</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
