import Hero from '@/components/sections/hero'
import TechStack from '@/components/sections/tech-stack'
import Journey from '@/components/sections/journey'
import Services from '@/components/sections/services'
import Projects from '@/components/sections/projects'
import Contact from '@/components/sections/contact'

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <Journey />
      <Services />
      <Projects />
      <Contact />
    </>
  )
}
