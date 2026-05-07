import { useApp } from '../../context'

export default function Hero() {
  const { t } = useApp()
  return (
    <section className="hero hero-fullscreen" id="hero">
      <div className="hero-bg" style={{ backgroundImage: "url('/institut_facade.webp')" }} />
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>
          <small>{t('hero_tagline')}</small>
          {t('hero_headline')}
          <span className="script">{t('hero_script')}</span>
        </h1>
        <div className="hero-meta">
          <a className="btn primary" href="tel:+3256555529">{t('cta_book')}</a>
          <a className="btn hero-btn-ghost" href="#services" onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }) }}>
            {t('hero_cta_discover')}
          </a>
        </div>
        <div className="hero-stats">
          <div><div className="n">6</div><div className="l">{t('hero_stat1')}</div></div>
          <div><div className="n">5j/7</div><div className="l">{t('hero_stat2')}</div></div>
          <div><div className="n">4/5</div><div className="l">{t('hero_stat3')}</div></div>
        </div>
      </div>
      <div className="hero-caption">
        <span className="script">Rue du Fort 24</span>
        <span>7780 Comines-Warneton · BE</span>
        <span className="hero-guinot-badge">Guinot<small>Référence</small></span>
      </div>
    </section>
  )
}
