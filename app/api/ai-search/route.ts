import { NextResponse } from "next/server"

const GROQ_API_KEY = process.env.GROQ_API_KEY
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions"

export async function POST(req: Request) {
  if (!GROQ_API_KEY) {
    return NextResponse.json(
      { error: "Groq API key not configured" },
      { status: 500 }
    )
  }

  try {
    const { query } = await req.json()

    const response = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: `You are an AI assistant helping to answer questions about Nour Abdelrahman, a Mechatronics Engineering student at the University of Waterloo. 
            Use the following information to answer questions:
            - Currently studying Mechatronics Engineering at University of Waterloo
            - Has experience in CAD (SolidWorks, AutoCAD), design for manufacturing, and quality assurance
            - Proficient in C++, Python, and technical drawing standards
            - Has worked as a Manufacturing Engineering Intern at Lincoln Electric and Quality Technician Intern at The Home Depot
            - Created projects like SketchBot and V6 Engine Assembly
            - Trilingual (English, French, Arabic)
            - Has skills in leadership, organization, time management, and communication
            Keep responses concise, professional, and based on the provided information.`
          },
          {
            role: "user",
            content: query
          }
        ],
        temperature: 0.7,
        max_tokens: 1024,
        stream: false
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("Groq API Error:", errorData)
      throw new Error("Failed to get response from Groq API")
    }

    const data = await response.json()
    return NextResponse.json({ response: data.choices[0].message.content })
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    )
  }
} 