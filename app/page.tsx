import Hero from "@/components/sections/Hero"
import UrgenceBanner from "@/components/sections/UrgenceBanner"
import Services from "@/components/sections/Services"
import WhyUs from "@/components/sections/WhyUs"
import Process from "@/components/sections/Process"
import Realisations from "@/components/sections/Realisations"
import Testimonials from "@/components/sections/Testimonials"
import About from "@/components/sections/About"
import FAQ from "@/components/sections/FAQ"
import Contact from "@/components/sections/Contact"

export default function HomePage() {
  return (
    <>
      <Hero />
      <UrgenceBanner />
      <Services />
      <WhyUs />
      <Process />
      <Realisations />
      <Testimonials />
      <About />
      <FAQ />
      <Contact />
    </>
  )
}
