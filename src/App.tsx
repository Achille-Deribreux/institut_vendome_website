import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, Outlet, useParams } from 'react-router-dom'
import { AppProvider, useApp, Lang } from './context'
import { useSEO } from './hooks/useSEO'
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
import MentionsLegalesPage from './pages/MentionsLegalesPage'

const HOME_SEO = {
  fr: { title: 'Institut Vendôme — Coiffure, SPA & Soins Guinot · Comines', description: 'Institut multi-services à Comines : coiffure, soins visage Guinot, SPA avec champagne, onglerie, photodépilation, parfumerie. Ouvert mar–sam. Frontière France-Belgique.' },
  nl: { title: 'Institut Vendôme — Kapsalon, SPA & Guinot-behandelingen · Komen', description: 'Multi-service instituut in Komen: kapsalon, Guinot gezichtsbehandelingen, SPA met champagne, nagelstudio, ontharing, parfumerie. Open di–za.' },
}

const HOME_ALTERNATES = [
  { hreflang: 'fr-BE', href: 'https://institut-vendome.be/fr/' },
  { hreflang: 'nl-BE', href: 'https://institut-vendome.be/nl/' },
  { hreflang: 'x-default', href: 'https://institut-vendome.be/fr/' },
]

function HomePage() {
  const { lang } = useApp()
  useSEO({ ...HOME_SEO[lang], canonical: `https://institut-vendome.be/${lang}/`, alternates: HOME_ALTERNATES })

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

function LangRedirect() {
  const savedLang = (localStorage.getItem('vd_lang') as Lang) || 'fr'
  return <Navigate to={`/${savedLang}`} replace />
}

function LangLayout() {
  const { lang } = useParams<{ lang: string }>()
  if (lang !== 'fr' && lang !== 'nl') {
    return <Navigate to="/fr" replace />
  }
  return (
    <AppProvider lang={lang as Lang}>
      <Outlet />
    </AppProvider>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LangRedirect />} />
        {/* Legacy URL redirects — preserve any existing indexed links */}
        <Route path="/services" element={<Navigate to="/fr/services" replace />} />
        <Route path="/tarifs" element={<Navigate to="/fr/tarifs" replace />} />
        <Route path="/contact" element={<Navigate to="/fr/contact" replace />} />
        <Route path="/mentions-legales" element={<Navigate to="/fr/mentions-legales" replace />} />
        <Route path="/:lang" element={<LangLayout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="tarifs" element={<TarifsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="mentions-legales" element={<MentionsLegalesPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/fr" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
