export default function Hero() {
  return (
    <section className="hero hero-fullscreen" id="hero">
      <div className="hero-bg" style={{ backgroundImage: "url('/institut_facade.webp')" }} />
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>
          <small>Coiffure · Institut · SPA · Onglerie · Parfumerie</small>
          La beauté
          <span className="script">comme une évasion.</span>
        </h1>
        <div className="hero-meta">
          <a className="btn primary" href="tel:+3256555529">Prendre rendez-vous</a>
          <a className="btn hero-btn-ghost" href="#services" onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Découvrir les services
          </a>
        </div>
        <div className="hero-stats">
          <div><div className="n">6</div><div className="l">Univers de soin</div></div>
          <div><div className="n">5j/7</div><div className="l">Ouvert mardi au samedi</div></div>
          <div><div className="n">4/5</div><div className="l">Sur Google &amp; Groupon</div></div>
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
