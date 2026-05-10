import { useState } from 'react'
import { useApp } from '../context'

interface NavBarProps {
  activePage?: string
}

export default function NavBar({ activePage }: NavBarProps) {
  const { lang, setLang, t } = useApp()
  const [menuOpen, setMenuOpen] = useState(false)

  const close = () => setMenuOpen(false)

  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="brand" href="/" aria-label="Institut Vendôme">
          <span>Vendôme</span>
          <small>Comines</small>
        </a>
        <nav className={`nav-links${menuOpen ? ' open' : ''}`} aria-label="Principal">
          <a href="/" className={activePage === 'home' || !activePage ? 'active' : ''} onClick={close}>
            {t('nav_home')}
          </a>
          <a href="/services" className={activePage === 'services' ? 'active' : ''} onClick={close}>
            {t('nav_services')}
          </a>
          <a href="/tarifs" className={activePage === 'tarifs' ? 'active' : ''} onClick={close}>
            {t('nav_tarifs')}
          </a>
          <a href="/contact" className={activePage === 'contact' ? 'active' : ''} onClick={close}>
            {t('nav_contact')}
          </a>
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div className="lang-switch" role="group" aria-label="Langue">
            <button className={lang === 'fr' ? 'active' : ''} onClick={() => setLang('fr')}>FR</button>
            <button className={lang === 'nl' ? 'active' : ''} onClick={() => setLang('nl')}>NL</button>
          </div>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
          <a className="nav-cta" href="/#booking">
            {t('cta_book')}
          </a>
        </div>
      </div>
    </header>
  )
}
