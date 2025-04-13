import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-6 sm:py-8 border-t">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="text-center md:text-left">
            <p className="text-base sm:text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-300">
              Ajay Portfolio
            </p>
            <p className="text-xs sm:text-sm text-foreground/70">&copy; {new Date().getFullYear()} All rights reserved</p>
          </div>

          <div className="flex gap-3 sm:gap-4">
            <a
              href="https://github.com/ajjjugoswami"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ajay-goswami-7200bb242/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a
              href="goswamiajay526@gmail.com"
              className="p-1.5 sm:p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
