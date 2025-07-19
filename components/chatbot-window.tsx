import React, { useRef, useState } from "react"
import { X, Send } from "lucide-react"

interface ChatbotWindowProps {
  onClose: () => void
}

function LoadingDots() {
  return (
    <span className="inline-block text-blue-600 animate-pulse">Lakshay's Bot is typing<span className="dot-1">.</span><span className="dot-2">.</span><span className="dot-3">.</span></span>
  )
}

export function ChatbotWindow({ onClose }: ChatbotWindowProps) {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can I help you today?" },
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  async function fetchGeminiResponse(message: string): Promise<string> {
    const res = await fetch("/api/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    })
    const data = await res.json()
    return data.text
  }

  const handleSend = async () => {
    if (!input.trim()) return
    setMessages((msgs) => [...msgs, { from: "user", text: input }])
    setInput("")
    setLoading(true)
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 100)
    const aiText = await fetchGeminiResponse(input)
    setLoading(false)
    setMessages((msgs) => [
      ...msgs,
      { from: "bot", text: aiText },
    ])
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  return (
    <div className="fixed z-50 bottom-24 right-6 w-80 max-w-[95vw] bg-white rounded-xl shadow-2xl border border-blue-100 flex flex-col overflow-hidden animate-fade-in">
      <div className="flex items-center justify-between px-4 py-3 bg-blue-600 text-white">
        <span className="font-semibold">AI Chatbot</span>
        <button onClick={onClose} aria-label="Close chat" className="hover:text-blue-200">
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 bg-blue-50" style={{ maxHeight: 320 }}>
        {messages.map((msg, i) => (
          <div
            key={i}
            className={
              msg.from === "user"
                ? "text-right"
                : "text-left"
            }
          >
            <span
              className={
                msg.from === "user"
                  ? "inline-block bg-blue-600 text-white rounded-lg px-3 py-1 text-sm"
                  : "inline-block bg-white border border-blue-200 text-blue-900 rounded-lg px-3 py-1 text-sm"
              }
            >
              {msg.text}
            </span>
          </div>
        ))}
        {loading && (
          <div className="text-left">
            <span className="inline-block bg-white border border-blue-200 text-blue-900 rounded-lg px-3 py-1 text-sm">
              <LoadingDots />
            </span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <form
        className="flex items-center border-t border-blue-100 bg-white px-2 py-2"
        onSubmit={e => {
          e.preventDefault()
          handleSend()
        }}
      >
        <input
          type="text"
          className="flex-1 rounded-md border border-blue-200 px-2 py-1 mr-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Type your message..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition-all duration-200"
          aria-label="Send message"
          disabled={loading}
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  )
}