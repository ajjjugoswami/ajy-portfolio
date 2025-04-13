"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export function ContactSection() {
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
    <section id="contact" ref={sectionRef} className="py-12 sm:py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">
          Get In Touch
        </h2>
        <div className="w-16 sm:w-20 h-1 bg-primary mx-auto mb-8 sm:mb-12 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Information</h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 rounded-full bg-primary/10 text-primary">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-sm sm:text-base">Email</h4>
                  <a
                    href="mailto:goswamiajay526@gmail.com"
                    className="text-foreground/70 hover:text-primary transition-colors text-sm sm:text-base"
                  >
                    goswamiajay526@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 rounded-full bg-primary/10 text-primary">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-sm sm:text-base">Phone</h4>
                  <a
                    href="tel:+1234567890"
                    className="text-foreground/70 hover:text-primary transition-colors text-sm sm:text-base"
                  >
                    +91 70820-72347
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1 text-sm sm:text-base">Location</h4>
                  <p className="text-foreground/70 text-sm sm:text-base">Rohtak, Harayana India</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <form className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-medium mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 sm:px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm sm:text-base"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 sm:px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm sm:text-base"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs sm:text-sm font-medium mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-3 sm:px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm sm:text-base"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none text-sm sm:text-base"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-4 sm:px-6 py-2 sm:py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center gap-2 text-sm sm:text-base"
              >
                <Send className="h-3 w-3 sm:h-4 sm:w-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
