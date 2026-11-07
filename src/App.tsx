import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Process from './components/Process'
import Portfolio from './components/Portfolio'
import WhyPixelSync from './components/WhyPixelSync'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="grain min-h-screen bg-background font-sans text-ink">
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <About />
        <Process />
        <Portfolio />
        <WhyPixelSync />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
