"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"
import Link from "next/link"

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-zinc-100">Experience</h1>

      <div className="grid grid-cols-1 gap-6">
        <Card className="bg-zinc-800 border-zinc-700">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-zinc-100">Manufacturing Engineering Intern</CardTitle>
                <CardDescription className="text-zinc-400">Lincoln Electric, Python X</CardDescription>
              </div>
              <span className="text-purple-400 text-sm">01/2025 - 05/2025</span>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-zinc-300 mb-4">Waterdown, Canada</p>
            <ul className="list-disc list-inside text-zinc-400 space-y-2">
              <li>
                Created over 300 engineering drawings and assemblies in SolidWorks, following strict ECR and GD&T standards.
              </li>
              <li>
                Streamlined the design process by performing torque, tolerance, and force analysis calculations, as well as FEA
                simulations, saving approximately 2 hours of validation time per machine while increasing overall machine
                reliability and universally improving manufacturing quality.
              </li>
              <li>
                Collaborated with senior engineers across departments on high-impact projects, including the design and
                development of a prototype that reduced production costs by 13% through optimized material selection and
                efficient component design.
              </li>
              <li>
                Compiled technical reports and maintained detailed engineering spreadsheets in SAP, including design revisions
                and BOMs, while coordinating with multiple engineers to streamline communication and improve team efficiency
                through clear, organized documentation.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-zinc-800 border-zinc-700">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-zinc-100">Electrical Team Member</CardTitle>
                <CardDescription className="text-zinc-400">Waterloo Formula Electric Design Team</CardDescription>
              </div>
              <span className="text-purple-400 text-sm">01/2025 - Present</span>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-zinc-300 mb-4">Waterloo, Canada</p>
            <ul className="list-disc list-inside text-zinc-400 space-y-2">
              <li>
                Designed a custom PCB in Altium Designer to monitor voltage levels for electrical safety, integrating a 555 timer
                circuit and system wiring to drive amplitude-based visual indicators through controlled LED flashing.
              </li>
              <li>
                Supported electrical system validation for Formula SAE compliance and collaborated in technical meetings to track
                progress, resolve issues, and coordinate tasks across subteams.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-zinc-800 border-zinc-700">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-zinc-100">Quality Technician Intern</CardTitle>
                <CardDescription className="text-zinc-400">The Home Depot Store Support Center</CardDescription>
              </div>
              <span className="text-purple-400 text-sm">06/2024 - 09/2024</span>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-zinc-300 mb-4">Bolton, Canada</p>
            <ul className="list-disc list-inside text-zinc-400 space-y-2">
              <li>
                Conducted quality inspections on a variety of products, ensuring compliance with vendor standards, reducing
                return rates by up to 15%.
              </li>
              <li>
                Contributed to uncovering production problems in order to reduce overall defect rates.
              </li>
              <li>
                Sampled products to conduct in-depth measurements and tests.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <Button asChild className="bg-zinc-700 hover:bg-zinc-600">
          <Link href="mailto:nouredden.abdelrahman06@gmail.com">
            <Mail className="mr-2 h-4 w-4" /> Contact Me
          </Link>
        </Button>
      </div>
    </div>
  )
} 