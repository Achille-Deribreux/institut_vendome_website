import PromoBar from '../components/PromoBar'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Dock from '../components/Dock'
import TweaksPanel from '../components/TweaksPanel'

export default function ContactPage() {
  return (
    <>
      <PromoBar />
      <NavBar activePage="contact" />
      <main>
        <section className="page-hero">
          <div className="glow-bg" />
          <div className="container">
            <div className="crumbs">Vendôme · Contact</div>
            <h1>Nous <em>trouver.</em></h1>
            <p className="lede">
              Institut Vendôme — Rue du Fort&nbsp;24, 7780&nbsp;Comines-Warneton.
              À deux pas de la frontière franco-belge, au cœur de&nbsp;Comines.
            </p>
          </div>
        </section>

        <section className="contact-section">
          <div className="container">
            <div className="contact-grid">
              <div className="info-block">
                <div className="info-card">
                  <div className="info-icon">⌖</div>
                  <div>
                    <div className="info-label">Adresse</div>
                    <div className="info-value">Rue du Fort 24</div>
                    <div className="info-sub">7780 Comines-Warneton, Belgique</div>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">☎</div>
                  <div>
                    <div className="info-label">Téléphone</div>
                    <a className="info-value info-link" href="tel:+3256555529">056 55 55 29</a>
                    <div className="info-sub">+32 56 55 55 29</div>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">✉</div>
                  <div>
                    <div className="info-label">Messenger</div>
                    <a
                      className="info-value info-link"
                      href="https://m.me/institutvendome"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Écrire via Messenger
                    </a>
                    <div className="info-sub">Réponse sous 24h en semaine</div>
                  </div>
                </div>

                <div className="info-card info-card--hours">
                  <div className="info-icon">◷</div>
                  <div>
                    <div className="info-label">Horaires</div>
                    <div className="hours-row">
                      <span className="hours-day">Lundi</span>
                      <span className="hours-val closed">Fermé</span>
                    </div>
                    <div className="hours-row">
                      <span className="hours-day">Mar — Ven</span>
                      <span className="hours-val">08h30 — 19h00</span>
                    </div>
                    <div className="hours-row">
                      <span className="hours-day">Samedi</span>
                      <span className="hours-val">08h30 — 18h00</span>
                    </div>
                    <div className="hours-row">
                      <span className="hours-day">Dimanche</span>
                      <span className="hours-val closed">Fermé</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="map-block">
                <iframe
                  className="contact-map-iframe"
                  src="https://maps.google.com/maps?q=Rue+du+Fort+24,+7780+Comines-Warneton,+Belgique&z=16&output=embed&hl=fr"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Institut Vendôme — Rue du Fort 24, Comines"
                />
                <div className="map-foot">
                  <a
                    href="https://maps.google.com/?q=Rue+du+Fort+24,+7780+Comines-Warneton"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-cta"
                  >
                    Ouvrir dans Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="access">
          <div className="container">
            <h2 className="section-title">Comment <em>venir</em></h2>
            <div className="access-grid">
              <div className="ac-item">
                <div className="ac-icon">⊕</div>
                <h3>En voiture</h3>
                <p>Depuis Courtrai : E403 sortie Comines. Depuis Lille : A25 sortie Comines. Parking gratuit Rue du Fort.</p>
              </div>
              <div className="ac-item">
                <div className="ac-icon">⊕</div>
                <h3>En transport</h3>
                <p>Bus TEC ligne 65 arrêt "Comines Centre". Depuis Courtrai, bus De Lijn ligne W61, arrêt "Komen Markt", 5 min à pied.</p>
              </div>
              <div className="ac-item">
                <div className="ac-icon">⊕</div>
                <h3>Depuis la France</h3>
                <p>Comines est à la frontière franco-belge. Depuis Comines-France (59560), traversez le pont sur la Lys — l'institut est à 3 min à pied.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Dock />
      <TweaksPanel />
    </>
  )
}
