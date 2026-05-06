export default function SpaHighlight() {
  return (
    <section className="spa-highlight">
      <div className="spa-inner">
        <div className="reveal">
          <div className="eyebrow" style={{ color: 'var(--accent-2)' }}>Forfaits SPA</div>
          <h2 className="spa-headline">
            Sauna, hammam,<br />jacuzzi <span className="script">— et la coupe.</span>
          </h2>
          <p className="lede" style={{ marginTop: 24 }}>
            Tous nos forfaits SPA incluent boisson rafraîchissante, coupe de champagne et
            tapas. Serviette et peignoir mis à disposition. Tous déclinables en duo.
          </p>
          <div className="spa-features">
            <div className="spa-feature">
              <div className="v"><strong>Détente</strong> · 1 personne · 1h00 — dès 55€</div>
            </div>
            <div className="spa-feature">
              <div className="v"><strong>Relax</strong> · SPA + soin visage 30 min OU massage corps 30 min — dès 115€</div>
            </div>
            <div className="spa-feature">
              <div className="v"><strong>Évasion</strong> · SPA + massage corps 40 min + soin visage 40 min — dès 175€</div>
            </div>
          </div>
          <div style={{ marginTop: 36 }}>
            <a className="btn primary" href="tel:+3256555529">Tous les forfaits SPA</a>
          </div>
        </div>

        <div className="spa-cards reveal">
          <div className="spa-card">
            <span className="tag">Détente · 1h00</span>
            <h4>Forfait <span className="script">Détente</span></h4>
            <p className="desc">Sauna, hammam, jacuzzi. Boisson, coupe, tapas inclus. Disponible en duo.</p>
            <div className="price-line">
              <span className="from">À partir de</span>
              <span className="price">55 €</span>
            </div>
          </div>
          <div className="spa-card featured">
            <span className="tag">Plébiscité · 2h30</span>
            <h4>Forfait <span className="script">Évasion</span></h4>
            <p className="desc">SPA + massage corps 40 min + soin visage 40 min. Le grand jeu.</p>
            <div className="price-line">
              <span className="from">Dès</span>
              <span className="price">175 €</span>
            </div>
          </div>
          <div className="spa-card wide-card">
            <div>
              <span className="tag">Relax · 1h30</span>
              <h4 style={{ marginTop: 14 }}>Forfait <span className="script">Relax</span></h4>
              <p className="desc">SPA + 30 min de soin visage ou de massage corps au choix.</p>
            </div>
            <div className="price-line">
              <span className="from">À partir de</span>
              <span className="price">115 €</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
