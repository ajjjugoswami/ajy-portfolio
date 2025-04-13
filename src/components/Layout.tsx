import type React from "react"
import type { Metadata } from "next"
import { Header } from "./Header"
import { Footer } from "./Footer"

export const metadata: Metadata = {
  title: "Developer Portfolio",
  description: "A modern developer portfolio showcasing skills and projects",
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
