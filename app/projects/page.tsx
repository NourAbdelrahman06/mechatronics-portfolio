import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github, Download } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  // Project data based on resume
  const projects = [
    {
      id: "sketchbot",
      title: "SketchBot",
      description: "A robot capable of creating outlines for engineering sketches using C++ and Robot C.",
      longDescription:
        "Designed and coded a robot capable of creating outlines for engineering sketches. The robot enables engineers to create outlines 3x faster and more accurate than by drawing by hand. The project included successful presentations to course instructors and a comprehensive project report with analysis and actionable recommendations for future improvements.",
      image: "/SketchBot%20full%20pic.jpg",
      tags: ["software", "robotics"],
      technologies: ["C++", "PPT", "Word", "Excel", "RobotC"],
      timeframe: "10/2024 - 11/2024",
      links: {
        report: "/SketchBot Report Portfolio.pdf",
        demo: null,
      },
    },
    {
      id: "v6-engine",
      title: "V6 Engine Assembly and Simulation",
      description: "Complete V6 engine assembly in SolidWorks with simulated real-world engine motion and timing.",
      longDescription:
        "Designed and modeled a complete V6 engine assembly in SolidWorks, including all individual components such as pistons, crankshaft, camshafts, and valves. Applied mechanical constraints using advanced mates to accurately simulate real-world engine motion and timing.",
      image: "/V6 Engine.png",
      tags: ["mechanical", "cad"],
      technologies: ["SolidWorks"],
      timeframe: "01/2025 - 03/2025",
      links: {
        github: null,
        demo: null,
      },
    },
  ];

  // Categories for filtering based on resume skills
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "software", name: "Software" },
    { id: "robotics", name: "Robotics" },
    { id: "mechanical", name: "Mechanical" },
    { id: "cad", name: "CAD" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-zinc-100">Projects</h1>

      <Tabs defaultValue="all" className="mb-12">
        <TabsList className="bg-zinc-800 border border-zinc-700 p-1 mb-8">
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="data-[state=active]:bg-zinc-700 data-[state=active]:text-zinc-100"
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects
                .filter((project) => category.id === "all" || project.tags.includes(category.id))
                .map((project) => (
                  <Card
                    key={project.id}
                    id={project.id}
                    className="bg-zinc-800 border-zinc-700 overflow-hidden flex flex-col"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-zinc-100">{project.title}</CardTitle>
                        <span className="text-purple-400 text-sm">{project.timeframe}</span>
                      </div>
                      <CardDescription className="text-zinc-400">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-zinc-300 mb-4">{project.longDescription}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="bg-zinc-700 text-zinc-300 px-2 py-1 rounded-md text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t border-zinc-700 pt-4">
                      {project.links.report && (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="border-zinc-600 text-zinc-300 hover:bg-zinc-700"
                        >
                          <Link href={project.links.report} target="_blank" rel="noopener noreferrer">
                            <Download className="mr-2 h-4 w-4" /> Download Report
                          </Link>
                        </Button>
                      )}
                      {project.links.demo && (
                        <Button asChild size="sm" className="bg-zinc-700 hover:bg-zinc-600">
                          <Link href={project.links.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                          </Link>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
