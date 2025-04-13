"use client"

import { useEffect, useRef, useState } from "react"
import { Icon } from "@iconify/react"

const skills = [
  { name: "HTML", icon: "vscode-icons:file-type-html", color: "text-orange-500" },
  { name: "CSS", icon: "vscode-icons:file-type-css", color: "text-blue-500" },
  { name: "JavaScript", icon: "logos:javascript", color: "text-yellow-400" },
  { name: "TypeScript", icon: "logos:typescript-icon", color: "text-blue-600" },
  { name: "React", icon: "logos:react", color: "text-cyan-400" },
  { name: "Next.js", icon: "logos:nextjs-icon", color: "text-black dark:text-white" },
  { name: "Tailwind CSS", icon: "logos:tailwindcss-icon", color: "text-cyan-500" },
  { name: "Git", icon: "logos:git-icon", color: "text-orange-600" },
  { name: "Figma", icon: "logos:figma", color: "text-purple-500" },
  { name: "VS Code", icon: "logos:visual-studio-code", color: "text-blue-500" },
  { name: "Ant Design", icon: "logos:ant-design", color: "text-blue-400" },
  { name: "Bootstrap", icon: "logos:bootstrap", color: "text-purple-600" },
  { name: "Material UI", icon: "logos:material-ui", color: "text-blue-500" },
]

export function SkillsSection() {
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
    <section
      id="skills"
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-black via-[#0f172a] to-[#1e293b] transition-colors duration-500"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-4 sm:mb-6">My Skills</h2>
        <div className="w-16 sm:w-20 h-1 bg-cyan-400 mx-auto mb-8 sm:mb-12 rounded-full"></div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`transition-all duration-700 ease-in-out delay-${index * 75} transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="group bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all border border-white/10 flex flex-col items-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 backdrop-blur-sm flex items-center justify-center mb-3 sm:mb-4 shadow-md group-hover:scale-105 transition-transform">
                  <Icon icon={skill.icon} className={`text-2xl sm:text-3xl md:text-4xl ${skill.color}`} />
                </div>
                <h3 className="text-center font-medium text-white text-sm sm:text-base">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
