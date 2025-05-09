import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Mail } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-zinc-100">About Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="md:col-span-1">
          <div className="sticky top-24">
            <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 mb-6">
              <div className="mx-auto w-48 h-48 relative mb-6">
                <img
                  src="/Professional Headshot of Confident Young Man.png"
                  alt="Profile"
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
              <h2 className="text-2xl font-bold text-center mb-2 text-zinc-100">Nour Abdelrahman</h2>
              <p className="text-zinc-400 text-center mb-4">Mechatronics Engineering Student</p>
              <div className="flex justify-center gap-4 mb-6">
                <Button asChild variant="outline" className="border-zinc-600 text-zinc-400 hover:bg-zinc-800">
                  <a href="/resume.pdf" download>
                    <Download className="mr-2 h-4 w-4" /> Download PDF
                  </a>
                </Button>
                <Button asChild className="bg-zinc-700 hover:bg-zinc-600">
                  <Link href="mailto:nouredden.abdelrahman06@gmail.com">
                    <Mail className="mr-2 h-4 w-4" /> Contact
                  </Link>
                </Button>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Location:</span>
                  <span className="text-zinc-200">Waterdown, ON, Canada</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">University:</span>
                  <span className="text-zinc-200">University of Waterloo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Expected Graduation:</span>
                  <span className="text-zinc-200">2029</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-zinc-100">My Journey</h2>
            <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
              <p className="text-zinc-300 mb-4">
                I'm a passionate mechatronics engineering student at the University of Waterloo with a deep interest in
                robotics, automation, and embedded systems. My journey began when I first dismantled my RC car at age
                10, curious about how it worked. That curiosity has evolved into a professional pursuit of creating
                innovative solutions that blend mechanical, electrical, and software engineering.
              </p>
              <p className="text-zinc-300 mb-4">
                Throughout my academic career, I've focused on developing practical skills alongside theoretical
                knowledge. I've participated in robotics competitions, led engineering projects, and collaborated with
                industry partners to solve real-world problems.
              </p>
              <p className="text-zinc-300">
                My goal is to contribute to the advancement of technology that improves lives and addresses global
                challenges. I'm particularly interested in sustainable technology, medical devices, and intelligent
                systems that can adapt to human needs.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-zinc-100">Education</h2>
            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-6">
                <div className="mb-6 last:mb-0">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-medium text-zinc-100">
                      Bachelor of Applied Science in Mechatronics Engineering
                    </h3>
                    <span className="text-purple-400 font-medium">2024 - 2029</span>
                  </div>
                  <p className="text-zinc-300 mb-1">University of Waterloo, Waterloo, Canada</p>
                  <p className="text-zinc-400">GPA: 3.70/4.00</p>
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-medium text-zinc-100">Ontario Secondary School Diploma (Bilingual)</h3>
                    <span className="text-purple-400 font-medium">Graduated 2024</span>
                  </div>
                  <p className="text-zinc-300 mb-1">École Secondaire Catholique Sainte-Trinité, Oakville, Canada</p>
                  <p className="text-zinc-400">GPA: 4.00/4.00</p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-zinc-100">Technical Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  category: "Programming Languages",
                  skills: ["C++", "Python", "RobotC"],
                },
                {
                  category: "CAD & Modelling",
                  skills: ["SolidWorks (CSWA)", "AutoCAD", "Altium Designer"],
                },
                {
                  category: "Software",
                  skills: ["Excel", "SAP", "SolidWorks PDM", "MS Office", "Tortoise SVN"],
                },
              ].map((skillGroup, index) => (
                <Card key={index} className="bg-zinc-800 border-zinc-700">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-3 text-zinc-100">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill, idx) => (
                        <span key={idx} className="bg-zinc-700 text-zinc-300 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-zinc-100">Languages & Interests</h2>
            <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-2 text-zinc-100">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-zinc-700 text-zinc-300 px-3 py-1 rounded-full text-sm">English (Fluent)</span>
                  <span className="bg-zinc-700 text-zinc-300 px-3 py-1 rounded-full text-sm">French (Fluent)</span>
                  <span className="bg-zinc-700 text-zinc-300 px-3 py-1 rounded-full text-sm">Arabic (Fluent)</span>
                </div>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-2 text-zinc-100">Hobbies</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-zinc-700 text-zinc-300 px-3 py-1 rounded-full text-sm">Skiing</span>
                  <span className="bg-zinc-700 text-zinc-300 px-3 py-1 rounded-full text-sm">Rock Climbing</span>
                  <span className="bg-zinc-700 text-zinc-300 px-3 py-1 rounded-full text-sm">Boxing</span>
                  <span className="bg-zinc-700 text-zinc-300 px-3 py-1 rounded-full text-sm">Mountain Biking</span>
                  <span className="bg-zinc-700 text-zinc-300 px-3 py-1 rounded-full text-sm">Camping</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 text-zinc-100">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-zinc-700 text-zinc-300 px-3 py-1 rounded-full text-sm">Aerospace</span>
                  <span className="bg-zinc-700 text-zinc-300 px-3 py-1 rounded-full text-sm">Cars</span>
                  <span className="bg-zinc-700 text-zinc-300 px-3 py-1 rounded-full text-sm">Motor sports</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
