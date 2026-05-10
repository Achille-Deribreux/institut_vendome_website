import { useApp } from '../../context'

export default function Visit() {
  const { t } = useApp()
  return (
    <section className="visit" id="visit">
      <div className="visit-inner">
        <div className="reveal">
          <div className="eyebrow">{t('vis_eyebrow')}</div>
          <h2 className="section-title">{t('vis_title_pre')}<em>{t('vis_title_em')}</em><br />{t('vis_title_post')}</h2>
          <p className="lede">{t('vis_lede')}</p>
          <ul className="visit-info">
            <li><span className="k">{t('vis_tel')}</span><span className="v"><strong>+32 56 55 55 29</strong></span></li>
            <li className="hrs"><span className="k">{t('vis_marven')}</span><span className="v"><strong>09h00 → 18h30</strong></span></li>
            <li className="hrs"><span className="k">{t('vis_sat')}</span><span className="v"><strong>08h30 → 17h00</strong></span></li>
            <li><span className="k">{t('vis_dimlon')}</span><span className="v">{t('vis_closed')}</span></li>
            <li><span className="k">{t('vis_payments')}</span><span className="v">{t('vis_payments_val')}</span></li>
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
