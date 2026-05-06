export default function Visit() {
  return (
    <section className="visit" id="visit">
      <div className="visit-inner">
        <div className="reveal">
          <div className="eyebrow">Nous trouver</div>
          <h2 className="section-title">À la <em>frontière,</em><br />au milieu de la Lys.</h2>
          <p className="lede">
            Rue du Fort 24 · 7780 Comines-Warneton · Belgique. Au cœur de la commune, à 20 minutes de Lille
            et accessible depuis tout l&apos;Eurométropole. Entrée plain-pied, fauteuil roulant.
          </p>
          <ul className="visit-info">
            <li><span className="k">Téléphone</span><span className="v"><strong>+32 56 55 55 29</strong></span></li>
            <li className="hrs"><span className="k">Mar — Ven</span><span className="v"><strong>08h30 → 19h00</strong></span></li>
            <li className="hrs"><span className="k">Samedi</span><span className="v"><strong>08h30 → 18h00</strong></span></li>
            <li><span className="k">Dim &amp; Lun</span><span className="v">Fermé</span></li>
            <li><span className="k">Paiements</span><span className="v">Cartes · sans contact NFC · espèces</span></li>
          </ul>
        </div>
        <div className="map reveal">
          <iframe
            src="https://maps.google.com/maps?q=Rue+du+Fort+24,+7780+Comines-Warneton,+Belgique&z=16&output=embed&hl=fr"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Institut Vendôme — Rue du Fort 24, Comines"
            style={{ width: '100%', height: '100%', border: 0, display: 'block' }}
          />
        </div>
      </div>
    </section>
  )
}
