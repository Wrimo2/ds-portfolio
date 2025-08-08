// REPLACE ALL CONTENTS OF src/App.jsx WITH THIS
import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

// NEW sections you added:
import TrustedBy from './components/TrustedBy'
import ValueProps from './components/ValueProps'
import Process from './components/Process'

// Existing sections:
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Blog from './components/Blog'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

import AOS from 'aos'

export default function App(){
  useEffect(() => {
    AOS.init({ once:true, duration: 800, easing:'ease-out-cubic' })
    // Keep the tiny GSAP hero animation if the CDN loaded it
    const run = () => {
      if (window.gsap) {
        window.gsap.fromTo('.hero-headline',{opacity:0, y:20},{opacity:1, y:0, duration:1.0, delay:0.2})
        window.gsap.fromTo('.hero-cta',{opacity:0, y:10},{opacity:1, y:0, duration:0.8, delay:0.6})
      }
    }
    run()
    setTimeout(run, 1000)
  }, [])

  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />

        {/* NEW blocks (Mosey-like structure) */}
        <TrustedBy />
        <ValueProps />
        <Process />

        {/* Your existing sections */}
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Blog />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
