"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { TypeAnimation } from "react-type-animation"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="min-h-screen pt-16 md:pt-20 flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.15),transparent_50%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 items-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="block">Hi, I'm</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-300">
              Ajay Goswami
            </span>
          </h1>

          <div className="text-lg sm:text-xl md:text-2xl font-medium text-foreground/80 mb-6 h-[32px] sm:h-[40px] md:h-[48px]">
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

          <p className="text-base sm:text-lg text-foreground/70 mb-6 sm:mb-8 max-w-lg">
            I build exceptional and accessible digital experiences for the web. Focused on creating clean, user-friendly
            interfaces with modern technologies.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
        
          </div>

          <div className="flex gap-3 sm:gap-4">
            <a
              href="https://github.com/ajjjugoswami"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ajay-goswami-7200bb242/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a
              href="goswamiajay526@gmail.com"
              className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </div>
        </div>

        <div
          className={`relative transition-all duration-1000 delay-300 mt-8 md:mt-0 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="relative w-full aspect-square max-w-xs sm:max-w-sm md:max-w-md mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-300 blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative bg-muted rounded-full overflow-hidden border-4 border-background shadow-xl">
              <img
                src="/images/ajay1.webp"
                alt="John Doe"
                className="w-full h-[300px] sm:h-[400px] md:h-[450px] object-cover"
               />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          aria-label="Scroll down"
          className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
        >
          <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5" />
        </a>
      </div>
    </section>
  )
}
