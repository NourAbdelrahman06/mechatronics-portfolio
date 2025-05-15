"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-zinc-100">Resume</h1>
        <Button asChild variant="outline" className="border-zinc-600 text-zinc-400 hover:bg-zinc-800">
          <a href="/portfolio resume.pdf" download>
            Download PDF <Download className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
      
      <div className="w-full h-[calc(100vh-200px)] rounded-lg overflow-hidden border border-zinc-700">
        <iframe
          src="/portfolio resume.pdf"
          className="w-full h-full"
          title="Resume PDF"
        />
      </div>
    </div>
  )
}
