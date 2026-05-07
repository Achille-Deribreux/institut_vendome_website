import { useApp } from '../context'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Dock from '../components/Dock'
import TweaksPanel from '../components/TweaksPanel'

export default function ContactPage() {
  const { t } = useApp()
  return (
    <>
      <NavBar activePage="contact" />
      <main>
        <section className="page-hero">
          <div className="glow-bg" />
          <div className="container">
            <div className="crumbs">{t('cont_crumbs')}</div>
            <h1>{t('cont_title_pre')}<em>{t('cont_title_em')}</em></h1>
            <p className="lede">{t('cont_lede')}</p>
          </div>
        </section>

        <section className="contact-section">
          <div className="container">
            <div className="contact-grid">
              <div className="info-block">
                <div className="info-card">
                  <div className="info-icon">⌖</div>
                  <div>
                    <div className="info-label">{t('cont_addr')}</div>
                    <div className="info-value">Rue du Fort 24</div>
                    <div className="info-sub">7780 Comines-Warneton, Belgique</div>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">☎</div>
                  <div>
                    <div className="info-label">{t('cont_tel')}</div>
                    <a className="info-value info-link" href="tel:+3256555529">056 55 55 29</a>
                    <div className="info-sub">+32 56 55 55 29</div>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">✉</div>
                  <div>
                    <div className="info-label">{t('cont_msg_label')}</div>
                    <a
                      className="info-value info-link"
                      href="https://m.me/institutvendome"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('cont_msg_cta')}
                    </a>
                    <div className="info-sub">{t('cont_msg_sub')}</div>
                  </div>
                </div>

                <div className="info-card info-card--hours">
                  <div className="info-icon">◷</div>
                  <div>
                    <div className="info-label">{t('cont_hours')}</div>
                    <div className="hours-row">
                      <span className="hours-day">{t('cont_mon')}</span>
                      <span className="hours-val closed">{t('cont_closed')}</span>
                    </div>
                    <div className="hours-row">
                      <span className="hours-day">{t('cont_marven')}</span>
                      <span className="hours-val">08h30 — 19h00</span>
                    </div>
                    <div className="hours-row">
                      <span className="hours-day">{t('cont_sat')}</span>
                      <span className="hours-val">08h30 — 18h00</span>
                    </div>
                    <div className="hours-row">
                      <span className="hours-day">{t('cont_sun')}</span>
                      <span className="hours-val closed">{t('cont_closed')}</span>
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
                    {t('cont_maps')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="access">
          <div className="container">
            <h2 className="section-title">{t('cont_access_pre')}<em>{t('cont_access_em')}</em></h2>
            <div className="access-grid">
              <div className="ac-item">
                <div className="ac-icon">⊕</div>
                <h3>{t('cont_car_h')}</h3>
                <p>{t('cont_car_p')}</p>
              </div>
              <div className="ac-item">
                <div className="ac-icon">⊕</div>
                <h3>{t('cont_bus_h')}</h3>
                <p>{t('cont_bus_p')}</p>
              </div>
              <div className="ac-item">
                <div className="ac-icon">⊕</div>
                <h3>{t('cont_fr_h')}</h3>
                <p>{t('cont_fr_p')}</p>
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
