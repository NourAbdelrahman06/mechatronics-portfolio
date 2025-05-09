import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-zinc-400">Nour Abdelrahman</span>
            </Link>
            <p className="text-zinc-400 mt-2 text-sm">Mechatronics Engineering Portfolio</p>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-12 space-y-6 md:space-y-0 mb-6 md:mb-0">
            <div>
              <h3 className="text-zinc-100 font-medium mb-2">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-zinc-400 hover:text-zinc-300 text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-zinc-400 hover:text-zinc-300 text-sm">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-zinc-400 hover:text-zinc-300 text-sm">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/resume" className="text-zinc-400 hover:text-zinc-300 text-sm">
                    Resume
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-zinc-100 font-medium mb-2">Contact</h3>
              <ul className="space-y-2">
                <li className="text-zinc-400 text-sm">
                  <Mail className="h-4 w-4 inline-block mr-2" />
                  nouredden.abdelrahman06@gmail.com
                </li>
                <li className="text-zinc-400 text-sm">+1-905-514-5200</li>
                <li className="text-zinc-400 text-sm">Waterdown, ON - L8B 1Y1, Canada</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-zinc-100 font-medium mb-2">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-300"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-300"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-300"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="mailto:nouredden.abdelrahman06@gmail.com" className="text-zinc-400 hover:text-zinc-300">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8 text-center">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Nouredden Abdelrahman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
