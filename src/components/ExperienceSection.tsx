"use client";

import { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "CodeRower",
    period: "Aug 2024 - Current",
    description:
      "Developed and maintained client websites using React, TypeScript, and Tailwind CSS. Collaborated with designers to implement pixel-perfect UI components and improved site performance.",
  },
  {
    title: "Intern",
    company: "CodeRower",
    period: "Feb 2024 - Jul 2024",
    description:
      "Assisted in the development of web applications, fixed bugs, and implemented new features. Gained experience with modern frontend frameworks and best practices.",
  },
];

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Work Experience
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full"></div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative pl-8 pb-12 last:pb-0 transition-all duration-700 delay-${
                index * 200
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <div className="timeline-dot text-primary"></div>
              {index < experiences.length - 1 && (
                <div className="timeline-line text-primary/30"></div>
              )}
              <div className="bg-card rounded-xl p-6 shadow-md">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <div className="flex items-center text-sm text-foreground/70">
                    <Calendar className="h-4 w-4 mr-1" />
                    {exp.period}
                  </div>
                </div>
                <div className="flex items-center text-primary mb-4">
                  <Briefcase className="h-4 w-4 mr-2" />
                  <span className="font-medium">{exp.company}</span>
                </div>
                <p className="text-foreground/70">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
