// Individual chat message component with styling based on role

"use client"

interface ChatMessageProps {
  content: string
  role: "user" | "assistant"
  isLoading?: boolean
}

export function ChatMessage({ content, role, isLoading }: ChatMessageProps) {
  const isAssistant = role === "assistant"

  return (
    <div
      className={`flex gap-3 ${isAssistant ? "justify-start" : "justify-end"} animate-in fade-in slide-in-from-bottom-2 w-full`}
    >
      {isAssistant && (
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500">
          <span className="text-sm">🤖</span>
        </div>
      )}

      <div
        className={`flex gap-2 rounded-lg px-4 py-3 max-w-2xl break-words ${
          isAssistant ? "bg-muted text-foreground" : "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
        }`}
      >
        <div className="flex-1 min-w-0">
          {isLoading ? (
            <div className="flex gap-1">
              <div className="h-2 w-2 rounded-full bg-current opacity-70 animate-bounce"></div>
              <div className="h-2 w-2 rounded-full bg-current opacity-70 animate-bounce [animation-delay:0.2s]"></div>
              <div className="h-2 w-2 rounded-full bg-current opacity-delay [animation-delay:0.4s]"></div>
            </div>
          ) : (
            <p className="whitespace-pre-wrap text-sm leading-relaxed break-words overflow-hidden">{content}</p>
          )}
        </div>
      </div>

      {!isAssistant && (
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500">
          <span className="text-sm">👤</span>
        </div>
      )}
    </div>
  )
}
