import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Dock from './components/Dock'
import Hero from './components/sections/Hero'
import BrandStrip from './components/sections/BrandStrip'
import USPs from './components/sections/USPs'
import Services from './components/sections/Services'
import Team from './components/sections/Team'
import Signature from './components/sections/Signature'
import SpaHighlight from './components/sections/SpaHighlight'
import Booking from './components/sections/Booking'
import Reviews from './components/sections/Reviews'
import Visit from './components/sections/Visit'
import ServicesPage from './pages/ServicesPage'
import TarifsPage from './pages/TarifsPage'
import ContactPage from './pages/ContactPage'

function HomePage() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <NavBar activePage="home" />
      <main>
        <Hero />
        <BrandStrip />
        <USPs />
        <Services />
        <Team />
        <Signature />
        <SpaHighlight />
        <Booking />
        <Reviews />
        <Visit />
      </main>
      <Footer />
      <Dock />
    </>
  )
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/tarifs" element={<TarifsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}
