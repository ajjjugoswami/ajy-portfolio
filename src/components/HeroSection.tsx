"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { TypeAnimation } from "react-type-animation"
 
export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="min-h-screen pt-12 sm:pt-16 md:pt-20 flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.15),transparent_50%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            <span className="block">Hi, I&apos;m</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-300">
              Ajay
            </span>
          </h1>

          <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-foreground/80 mb-4 sm:mb-6 h-[28px] sm:h-[32px] md:h-[40px] lg:h-[48px]">
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "UI/UX Designer",
                2000,
                "React Specialist",
                2000,
                "Web Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
            />
          </div>

          <p className="text-sm sm:text-base md:text-lg text-foreground/70 mb-4 sm:mb-6 max-w-lg">
            I build exceptional and accessible digital experiences for the web. Focused on creating clean, user-friendly
            interfaces with modern technologies.
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
            <a
              href="https://github.com/ajjjugoswami"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ajay-goswami-7200bb242/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
            </a>
            <a
              href="mailto:goswamiajay526@gmail.com"
              className="p-1.5 sm:p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
            </a>
          </div>
        </div>

        <div
          className={`relative transition-all duration-1000 delay-300 mt-6 sm:mt-8 md:mt-0 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="relative w-full aspect-square max-w-[280px] xs:max-w-[320px] sm:max-w-sm md:max-w-md mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-300 blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative bg-muted rounded-full overflow-hidden border-4 border-background shadow-xl">
              <img
                src="/images/aj2.webp"
                alt="Ajay Goswami"
                width={450}
                height={450}
                className="w-full h-[280px] xs:h-[280px] sm:h-[370px] md:h-[450px] object-cover"
               />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-2 sm:bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          aria-label="Scroll down"
          className="p-1.5 sm:p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
        >
          <ArrowDown className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
        </a>
      </div>
    </section>
  )
}
