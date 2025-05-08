import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/ui/Header"
import { Suspense } from "react"
import CustomCursor from "@/components/ui/CustomCursor"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jayavardhan Kolla | GenAI Engineer & Full-Stack Developer",
  description:
    "Portfolio of Jayavardhan Kolla, a GenAI Engineer and Full-Stack Developer specializing in AI, Machine Learning, and Web Development.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <Header />
          {children}
          <Suspense fallback={null}>
            <CustomCursor />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
