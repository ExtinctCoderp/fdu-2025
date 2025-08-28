"use client"

import { useState } from "react"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glassmorphism">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10">
              <Image src="/logo_fdu.jpeg" alt="FDU Logo" width={40} height={40} className="object-contain" priority />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-primary leading-tight">FDU 2025</span>
              <span className="text-xs text-muted-foreground leading-tight">Forum Diskusi Umat</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("tentang")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Tentang
            </button>
            <button
              onClick={() => scrollToSection("lomba")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Lomba
            </button>
            <button
              onClick={() => scrollToSection("pendaftaran")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Pendaftaran
            </button>
            <button
              onClick={() => scrollToSection("kontak")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Kontak
            </button>
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="glassmorphism"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden glassmorphism"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 p-4 glassmorphism rounded-lg">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("tentang")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Tentang Acara
              </button>
              <button
                onClick={() => scrollToSection("lomba")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Jenis Perlombaan
              </button>
              <button
                onClick={() => scrollToSection("pendaftaran")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Pendaftaran
              </button>
              <button
                onClick={() => scrollToSection("biaya")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Biaya
              </button>
              <button
                onClick={() => scrollToSection("tempat")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Tempat
              </button>
              <button
                onClick={() => scrollToSection("partnership")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Partnership
              </button>
              <button
                onClick={() => scrollToSection("kontak")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Kontak
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
