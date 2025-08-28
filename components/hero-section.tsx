"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2025-10-04T00:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen relative flex items-center justify-center islamic-pattern">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/mosque.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto pt-20">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          Forum Diskusi Umat
          <span className="block text-xl sm:text-2xl md:text-4xl text-accent mt-2">FDU 2025</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-2 opacity-90">
          Ajang Perlombaan Islami Tingkat SMP/MTs Sederajat
        </p>

        <p className="text-sm sm:text-base md:text-lg mb-8 opacity-80">04 Oktober 2025 | SMA Negeri 24 Bandung</p>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-8 max-w-sm sm:max-w-md mx-auto">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <Card key={unit} className="glassmorphism countdown-glow p-2 sm:p-4 text-center">
              <div className="text-lg sm:text-2xl md:text-3xl font-bold text-primary">{value}</div>
              <div className="text-xs uppercase text-muted-foreground">
                {unit === "days" ? "Hari" : unit === "hours" ? "Jam" : unit === "minutes" ? "Menit" : "Detik"}
              </div>
            </Card>
          ))}
        </div>

        {/* Navigation Buttons - improved mobile responsiveness */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 max-w-4xl mx-auto">
          <Button
            onClick={() => scrollToSection("tentang")}
            className="glassmorphism hover:bg-primary/20 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            variant="outline"
          >
            Tentang Acara
          </Button>
          <Button
            onClick={() => scrollToSection("lomba")}
            className="glassmorphism hover:bg-primary/20 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            variant="outline"
          >
            Jenis Perlombaan
          </Button>
          <Button
            onClick={() => scrollToSection("pendaftaran")}
            className="glassmorphism hover:bg-primary/20 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            variant="outline"
          >
            Pendaftaran Lomba
          </Button>
          <Button
            onClick={() => scrollToSection("biaya")}
            className="glassmorphism hover:bg-primary/20 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            variant="outline"
          >
            Biaya Perlombaan
          </Button>
          <Button
            onClick={() => scrollToSection("tempat")}
            className="glassmorphism hover:bg-primary/20 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            variant="outline"
          >
            Tempat Perlombaan
          </Button>
          <Button
            onClick={() => scrollToSection("partnership")}
            className="glassmorphism hover:bg-primary/20 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            variant="outline"
          >
            Partnership
          </Button>
          <Button
            onClick={() => scrollToSection("kontak")}
            className="glassmorphism hover:bg-primary/20 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            variant="outline"
          >
            Kontak
          </Button>
          <Button
            onClick={() => window.open("https://bit.ly/PendaftaranLombaFDU2025", "_blank")}
            className="bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 font-semibold text-sm sm:text-base sm:col-span-2 lg:col-span-1"
          >
            Daftar Sekarang
          </Button>
        </div>
      </div>
    </section>
  )
}
