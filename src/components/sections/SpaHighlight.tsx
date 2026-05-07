import { useApp } from '../../context'

export default function SpaHighlight() {
  const { t } = useApp()
  return (
    <section className="spa-highlight">
      <div className="spa-inner">
        <div className="reveal">
          <div className="eyebrow" style={{ color: 'var(--accent-2)' }}>{t('spa_eyebrow')}</div>
          <h2 className="spa-headline">
            {t('spa_headline_1')}<br />{t('spa_headline_2')}<span className="script">{t('spa_headline_script')}</span>
          </h2>
          <p className="lede" style={{ marginTop: 24 }}>{t('spa_lede')}</p>
          <div className="spa-features">
            <div className="spa-feature">
              <div className="v"><strong>{t('spa_feat1_name')}</strong>{t('spa_feat1_rest')}</div>
            </div>
            <div className="spa-feature">
              <div className="v"><strong>{t('spa_feat2_name')}</strong>{t('spa_feat2_rest')}</div>
            </div>
            <div className="spa-feature">
              <div className="v"><strong>{t('spa_feat3_name')}</strong>{t('spa_feat3_rest')}</div>
            </div>
          </div>
          <div style={{ marginTop: 36 }}>
            <a className="btn primary" href="tel:+3256555529">{t('spa_cta')}</a>
          </div>
        </div>

        <div className="spa-cards reveal">
          <div className="spa-card">
            <span className="tag">{t('spa_card1_tag')}</span>
            <h4>Forfait <span className="script">{t('spa_card1_script')}</span></h4>
            <p className="desc">{t('spa_card1_p')}</p>
            <div className="price-line">
              <span className="from">{t('spa_card1_from')}</span>
              <span className="price">55 €</span>
            </div>
          </div>
          <div className="spa-card featured">
            <span className="tag">{t('spa_card2_tag')}</span>
            <h4>Forfait <span className="script">{t('spa_card2_script')}</span></h4>
            <p className="desc">{t('spa_card2_p')}</p>
            <div className="price-line">
              <span className="from">{t('spa_card2_from')}</span>
              <span className="price">175 €</span>
            </div>
          </div>
          <div className="spa-card wide-card">
            <div>
              <span className="tag">{t('spa_card3_tag')}</span>
              <h4 style={{ marginTop: 14 }}>Forfait <span className="script">{t('spa_card3_script')}</span></h4>
              <p className="desc">{t('spa_card3_p')}</p>
            </div>
            <div className="price-line">
              <span className="from">{t('spa_card3_from')}</span>
              <span className="price">115 €</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
