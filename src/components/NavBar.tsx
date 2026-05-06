import { useApp } from '../context'

interface NavBarProps {
  activePage?: string
}

export default function NavBar({ activePage }: NavBarProps) {
  const { lang, setLang, t } = useApp()

  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="brand" href="/" aria-label="Institut Vendôme">
          <span>Vendôme</span>
          <small>Comines</small>
        </a>
        <nav className="nav-links" aria-label="Principal">
          <a href="/" className={activePage === 'home' || !activePage ? 'active' : ''}>
            {t('nav_home')}
          </a>
          <a
            href="/services"
            className={activePage === 'services' ? 'active' : ''}
          >
            {t('nav_services')}
          </a>
          <a
            href="/tarifs"
            className={activePage === 'tarifs' ? 'active' : ''}
          >
            {t('nav_tarifs')}
          </a>
          <a
            href="/contact"
            className={activePage === 'contact' ? 'active' : ''}
          >
            {t('nav_contact')}
          </a>
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div className="lang-switch" role="group" aria-label="Langue">
            <button
              className={lang === 'fr' ? 'active' : ''}
              onClick={() => setLang('fr')}
            >
              FR
            </button>
            <button
              className={lang === 'nl' ? 'active' : ''}
              onClick={() => setLang('nl')}
            >
              NL
            </button>
          </div>
          <a className="nav-cta" href="tel:+3256555529">
            {t('cta_book')}
          </a>
        </div>
      </div>
    </header>
  )
}
