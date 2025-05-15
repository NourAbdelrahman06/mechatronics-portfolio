"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"

export default function AISearch() {
  const [query, setQuery] = useState("")
  const [response, setResponse] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSearch = async () => {
    if (!query.trim()) return

    setLoading(true)
    try {
      const response = await fetch("/api/ai-search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response")
      }

      const data = await response.json()
      setResponse(data.response)
    } catch (error) {
      console.error("Error:", error)
      setResponse("Sorry, I encountered an error while processing your request.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div className="flex gap-4">
        <Input
          type="text"
          placeholder="Ask me anything about my experience, skills, or projects..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="flex-1 h-14 text-lg"
        />
        <Button onClick={handleSearch} disabled={loading} className="h-14 px-8 text-lg">
          {loading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Searching...
            </>
          ) : (
            "Search"
          )}
        </Button>
      </div>
      
      {response && (
        <div className="p-6 rounded-lg border border-zinc-700 bg-zinc-800/50">
          <p className="text-zinc-300 whitespace-pre-wrap text-lg">{response}</p>
        </div>
      )}
    </div>
  )
} 