import { useApp } from '../../context'

export default function USPs() {
  const { t } = useApp()
  return (
    <section className="usps">
      <div className="usps-head reveal">
        <div className="eyebrow">{t('usps_eyebrow')}</div>
        <h2 className="section-title">{t('usps_title_pre')}<em>{t('usps_title_em')}</em>{t('usps_title_post')}</h2>
      </div>
      <div className="usps-grid reveal">
        <div className="usp">
          <h3>{t('usp1_h')}</h3>
          <p>{t('usp1_p')}</p>
        </div>
        <div className="usp">
          <h3>{t('usp2_h')}</h3>
          <p>{t('usp2_p')}</p>
        </div>
        <div className="usp">
          <h3>{t('usp3_h')}</h3>
          <p>{t('usp3_p')}</p>
        </div>
      </div>
    </section>
  )
}
