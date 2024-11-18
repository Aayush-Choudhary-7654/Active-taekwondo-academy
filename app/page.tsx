import Navbar from "@/components/ui/Navbar"
import HeroSection from "@/components/ui/HeroSection"
import StudentsSection from "@/components/ui/StudentsSection"
import Footer from "@/components/ui/Footer"
import Contact from '@/components/ui/Contact'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StudentsSection />
      <Contact />
      <Footer />
    </main>
  )
}

