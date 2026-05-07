import { useApp } from '../../context'

export default function Team() {
  const { t } = useApp()
  return (
    <section className="team-home">
      <div className="team-home-head reveal">
        <div>
          <div className="eyebrow">{t('team_eyebrow')}</div>
          <h2 className="section-title">Magalie <em>&amp;</em><br />Églantine.</h2>
        </div>
        <p className="lede">{t('team_lede')}</p>
      </div>
      <div className="team-banner reveal">
        <div
          className="atmo has-photo team-banner-photo"
          style={{ backgroundImage: "url('/photo_equipe.jpg')" }}
        />
        <div className="team-banner-overlay" />
        <div className="team-banner-names">
          <div className="team-banner-member">
            <div className="team-banner-first">Églantine</div>
            <div className="team-banner-role">{t('team_role1')}</div>
          </div>
          <div className="team-banner-sep" />
          <div className="team-banner-member">
            <div className="team-banner-first">Magalie</div>
            <div className="team-banner-role">{t('team_role2')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
