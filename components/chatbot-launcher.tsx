import React from "react"
import { Bot } from "lucide-react"

interface ChatbotLauncherProps {
  onClick: () => void
}

export function ChatbotLauncher({ onClick }: ChatbotLauncherProps) {
  return (
    <button
      onClick={onClick}
      aria-label="Open AI Chatbot"
      className="fixed z-50 bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg p-4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      style={{ boxShadow: "0 4px 24px rgba(59,130,246,0.25)" }}
    >
      <Bot className="w-7 h-7" />
    </button>
  )
} 