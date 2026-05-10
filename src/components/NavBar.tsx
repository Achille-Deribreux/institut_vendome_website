import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useApp, Lang } from '../context'

interface NavBarProps {
  activePage?: string
}

export default function NavBar({ activePage }: NavBarProps) {
  const { lang, t } = useApp()
  const navigate = useNavigate()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const close = () => setMenuOpen(false)

  const switchLang = (newLang: Lang) => {
    localStorage.setItem('vd_lang', newLang)
    const newPath = location.pathname.replace(/^\/(fr|nl)/, `/${newLang}`)
    navigate(newPath + location.search)
  }

  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="brand" href={`/${lang}/`} aria-label="Institut Vendôme">
          <span>Vendôme</span>
          <small>Comines</small>
        </a>
        <nav className={`nav-links${menuOpen ? ' open' : ''}`} aria-label="Principal">
          <a href={`/${lang}/`} className={activePage === 'home' || !activePage ? 'active' : ''} onClick={close}>
            {t('nav_home')}
          </a>
          <a href={`/${lang}/services`} className={activePage === 'services' ? 'active' : ''} onClick={close}>
            {t('nav_services')}
          </a>
          <a href={`/${lang}/tarifs`} className={activePage === 'tarifs' ? 'active' : ''} onClick={close}>
            {t('nav_tarifs')}
          </a>
          <a href={`/${lang}/contact`} className={activePage === 'contact' ? 'active' : ''} onClick={close}>
            {t('nav_contact')}
          </a>
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div className="lang-switch" role="group" aria-label="Langue">
            <button className={lang === 'fr' ? 'active' : ''} onClick={() => switchLang('fr')}>FR</button>
            <button className={lang === 'nl' ? 'active' : ''} onClick={() => switchLang('nl')}>NL</button>
          </div>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
          <a className="nav-cta" href={`/${lang}#booking`}>
            {t('cta_book')}
          </a>
        </div>
      </div>
    </header>
  )
}
