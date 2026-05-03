import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SkillsTicker from '@/components/SkillsTicker'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function App() {
  return (
    <div className="bg-bg-primary min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <SkillsTicker />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
