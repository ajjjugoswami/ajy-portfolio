"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "NoteNexus",
    description:
      "A real-time note-taking web app that automatically syncs your notes across sessions, offering a seamless writing experience. Built with modern web technologies, it ensures your notes are always up to date and accessible.",
    image: "/images/note-sync.png",
    tags: ["React", "Next.js", "Tailwind CSS", "Antd Design"],
    liveUrl: "https://note-syncs.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "FAB Builder",
    description:
      "FAB Builder is an AI-assisted low-code platform that enables rapid development of both web and mobile applications. With pre-built templates and customizable components, developers can quickly generate applications with minimal code.",
    image: "/images/fab.png",
    tags: ["React", "TypeScript", "Redux", "Antd Design"],
    liveUrl: "https://studio.fabbuilder.com/",
    githubUrl: "#",
  },
  {
    title: "Analytics",
    description: "A modern analytics tool for website performance, providing real-time metrics and insights with a user-friendly interface. It supports smooth animations, dark mode, and is fully responsive for an optimal viewing experience.",
    image: "/images/ana.png",
    tags: ["React", "TypeScript", "Redux", "Antd Design"],
    liveUrl: "https://analytics.fabbuilder.com/",
    githubUrl: "#",
  },
  {
    title: "Fitness Tracker",
    description: "A fitness tracking web app inspired by the leveling system of the Solo Leveling series, designed to help users monitor and track their fitness progress. This application is built with Next.js, providing an intuitive and responsive experience.",
    image: "/images/sl.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://solo-leveling-fit.vercel.app/",
    githubUrl: "#",
  },
];

export function ProjectsSection() {
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
    <section id="projects" ref={sectionRef} className="py-12 sm:py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">Worked On those Projects</h2>
        <div className="w-16 sm:w-20 h-1 bg-primary mx-auto mb-8 sm:mb-12 rounded-full"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-card bg-card rounded-xl overflow-hidden shadow-lg transition-all duration-700 delay-${
                index * 200
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            >
              <div className="relative aspect-video overflow-hidden rounded-t-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority={index < 2}
                  quality={90}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy0vLzYvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLz/2wBDAR0dHR4dHR4dHR4dHR4dHR4dHR4dHR4dHR4dHR4dHR4dHR4dHR4dHR4dHR4dHR4dHR4dHR4dHR4dHR4dHR4dLz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm sm:text-base text-foreground/70 mb-3 sm:mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 sm:gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-primary hover:underline"
                  >
                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
