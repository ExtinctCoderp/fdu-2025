import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ContentSections } from "@/components/content-sections"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ContentSections />
      </main>
      <Footer />
    </div>
  )
}
