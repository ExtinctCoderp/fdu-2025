import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "FDU 2025 - Forum Diskusi Umat",
  description: "Ajang Perlombaan Islami Tingkat SMP/MTs Sederajat | 04 Oktober 2025 | SMA Negeri 24 Bandung",
  generator: "v0.app",
  icons: {
    icon: "/logo_fdu.jpeg",
  },
  keywords: ["FDU 2025", "Forum Diskusi Umat", "Lomba Islami", "SMP", "MTs", "Bandung"],
  openGraph: {
    title: "FDU 2025 - Forum Diskusi Umat",
    description: "Ajang Perlombaan Islami Tingkat SMP/MTs Sederajat",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
