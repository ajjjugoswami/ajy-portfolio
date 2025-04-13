"use client"

import { useEffect, useRef, useState } from "react"
import { Code, Laptop, Lightbulb, Palette } from "lucide-react"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-12 sm:py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">About Me</h2>
        <div className="w-16 sm:w-20 h-1 bg-primary mx-auto mb-8 sm:mb-12 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-purple-600/20 to-pink-500/20 rounded-lg blur-xl"></div>
              <div className="relative bg-card rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/images/aboutme.webp"
                  alt="About me"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">I&apos;m a passionate developer with a creative mindset</h3>
            <p className="text-sm sm:text-base text-foreground/70 mb-4 sm:mb-6">
              With 1.5 years of experience as a frontend developer, I specialize in crafting modern, responsive, and
              user-friendly web interfaces. My journey into tech began with a fascination for how websites work, which
              led me to pursue web development and focus on frontend technologies.
            </p>
            <p className="text-sm sm:text-base text-foreground/70 mb-6 sm:mb-8">
              I&apos;m passionate about building clean, maintainable code and creating engaging user experiences. I love
              learning new tools and technologies to stay ahead in the fast-evolving world of web development. I believe
              in combining creativity with technical skills to deliver high-quality results.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Code className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-sm sm:text-base">Clean Code</h4>
                  <p className="text-xs sm:text-sm text-foreground/70">Writing maintainable and efficient code</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Palette className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-sm sm:text-base">JavaScript Frameworks</h4>
                  <p className="text-xs sm:text-sm text-foreground/70">Experienced with React, Next.js, and modern web development practices</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Laptop className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-sm sm:text-base">Responsive</h4>
                  <p className="text-xs sm:text-sm text-foreground/70">Mobile-first approach to web design</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-sm sm:text-base">Problem Solver</h4>
                  <p className="text-xs sm:text-sm text-foreground/70">Finding creative solutions to challenges</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
