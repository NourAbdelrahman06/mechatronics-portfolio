import { Button } from "@/components/ui/button"
import { Download, Printer } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-zinc-100">Resume</h1>
        <div className="flex gap-4">
          <Button className="bg-zinc-700 hover:bg-zinc-600">
            <Download className="mr-2 h-4 w-4" /> Download PDF
          </Button>
          <Button variant="outline" className="border-zinc-600 text-zinc-300 hover:bg-zinc-700">
            <Printer className="mr-2 h-4 w-4" /> Print
          </Button>
        </div>
      </div>

      <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-8 mb-8 max-w-4xl mx-auto">
        {/* Header */}
        <div className="border-b border-zinc-700 pb-6 mb-6">
          <h2 className="text-3xl font-bold text-zinc-100 mb-2">Nouredden Abdelrahman</h2>
          <p className="text-xl text-zinc-400 mb-4">Mechatronics Engineering Student</p>
          <div className="flex flex-wrap gap-4 text-zinc-400">
            <span>nouredden.abdelrahman06@gmail.com</span>
            <span>•</span>
            <span>+1-905-514-5200</span>
            <span>•</span>
            <span>Waterdown, ON - L8B 1Y1, Canada</span>
          </div>
        </div>

        {/* Summary */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-zinc-100">Summary</h3>
          <p className="text-zinc-300">
            Motivated Mechatronics Engineering student at the University of Waterloo with hands-on experience in CAD
            (SolidWorks, AutoCAD), design for manufacturing, and quality assurance. Skilled in C++, Python, and
            technical drawing standards, including ECR processes and PDM systems. Trilingual and adaptable, with a
            strong drive for innovation and continuous improvement.
          </p>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-zinc-100">Education</h3>
          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <h4 className="font-medium text-zinc-200">Bachelor of Applied Science, Mechatronics Engineering</h4>
              <span className="text-purple-400">09/2024 - 06/2029</span>
            </div>
            <p className="text-zinc-300">University of Waterloo, Waterloo, Canada</p>
            <p className="text-zinc-400 mt-1">GPA: 3.70/4.00</p>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <h4 className="font-medium text-zinc-200">Ontario Secondary School Diploma (Bilingual)</h4>
              <span className="text-purple-400">Graduated 06/2024</span>
            </div>
            <p className="text-zinc-300">École Secondaire Catholique Sainte-Trinité, Oakville, Canada</p>
            <p className="text-zinc-400 mt-1">GPA: 4.00/4.00</p>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-zinc-100">Projects</h3>

          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <h4 className="font-medium text-zinc-200">SketchBot</h4>
              <span className="text-purple-400">10/2024 - 11/2024</span>
            </div>
            <p className="text-zinc-400 mb-2">Tools: C++, PPT, Word, Excel, RobotC</p>
            <ul className="list-disc list-inside text-zinc-400 space-y-1">
              <li>
                Designed and coded a robot capable of creating outlines for engineering sketches using C++ and Robot C.
              </li>
              <li>Enabled engineering to create outlines 3x faster and more accurate than by drawing by hand.</li>
              <li>Successfully presented and communicated progress to course instructors.</li>
              <li>
                Authored a comprehensive project report with analysis and actionable recommendations for future
                improvements.
              </li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <h4 className="font-medium text-zinc-200">V8 Engine Assembly and Simulation</h4>
              <span className="text-purple-400">01/2025 - 03/2025</span>
            </div>
            <p className="text-zinc-400 mb-2">Tools: SolidWorks</p>
            <ul className="list-disc list-inside text-zinc-400 space-y-1">
              <li>
                Designed and modeled a complete V8 engine assembly in SolidWorks, including all individual components
                such as pistons, crankshaft, camshafts, and valves.
              </li>
              <li>
                Applied mechanical constraints using advanced mates to accurately simulate real-world engine motion and
                timing.
              </li>
            </ul>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-zinc-100">Experience</h3>

          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <h4 className="font-medium text-zinc-200">Manufacturing Engineering Intern</h4>
              <span className="text-purple-400">01/2025 - 05/2025</span>
            </div>
            <p className="text-zinc-300 mb-1">Lincoln Electric, Python X, Waterdown, Canada</p>
            <ul className="list-disc list-inside text-zinc-400 space-y-1">
              <li>
                Created over 300 precise engineering drawings and assemblies in SolidWorks and AutoCAD, using SolidWorks
                PDM and SAP while following strict ECR and GD&T standards.
              </li>
              <li>
                Performed torque, tolerance, and force analysis calculations, along with FEA simulations, to inform
                design decisions, demonstrating strong problem-solving skills and attention to detail.
              </li>
              <li>
                Collaborated with senior engineers across departments on complex projects, contributing ideas and
                presenting technical work clearly during team meetings.
              </li>
              <li>
                Developed a solid understanding of weldments, sheet metal fabrication, and material selection, applying
                adaptability and a continuous learning mindset to real-world manufacturing challenges.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <h4 className="font-medium text-zinc-200">Electrical Team Member</h4>
              <span className="text-purple-400">01/2025 - Present</span>
            </div>
            <p className="text-zinc-300 mb-1">Waterloo Formula Electric Design Team, Waterloo, Canada</p>
            <ul className="list-disc list-inside text-zinc-400 space-y-1">
              <li>
                Designed and assembled custom PCBs integrated into the team's car, supporting vehicle systems and
                performance.
              </li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <h4 className="font-medium text-zinc-200">Quality Technician Intern</h4>
              <span className="text-purple-400">06/2024 - 09/2024</span>
            </div>
            <p className="text-zinc-300 mb-1">The Home Depot Store Support Center, Bolton, Canada</p>
            <ul className="list-disc list-inside text-zinc-400 space-y-1">
              <li>
                Conducted quality inspections on a variety of products, ensuring compliance with company standards.
              </li>
              <li>Helped uncover production problems in order to reduce overall defect rates.</li>
              <li>Sampled products to conduct in-depth measurements and tests.</li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-zinc-100">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-zinc-200 mb-2">Programming Languages and Softwares</h4>
              <p className="text-zinc-400">C++, Python, Excel, SAP, SolidWorks PDM, MS Office, Tortoise SVN</p>
            </div>
            <div>
              <h4 className="font-medium text-zinc-200 mb-2">Modelling</h4>
              <p className="text-zinc-400">SolidWorks (CSWA), AutoCAD, Altium Designer</p>
            </div>
            <div>
              <h4 className="font-medium text-zinc-200 mb-2">Soft Skills</h4>
              <p className="text-zinc-400">
                Leadership, Organization, Time Management, Communication, Attention to Detail, Critical Thinking
              </p>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section>
          <h3 className="text-xl font-semibold mb-3 text-zinc-100">Additional Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-zinc-200 mb-2">Languages</h4>
              <p className="text-zinc-400">English (Fluent), French (Fluent), Arabic (Fluent)</p>
            </div>
            <div>
              <h4 className="font-medium text-zinc-200 mb-2">Interests</h4>
              <p className="text-zinc-400">
                Rock climbing, Mountain Biking, Skiing, Camping, Aerospace, Boxing, Motor sports
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
