export default function Team() {
  return (
    <section className="team-home">
      <div className="team-home-head reveal">
        <div>
          <div className="eyebrow">L&apos;équipe</div>
          <h2 className="section-title">Magalie <em>&amp;</em><br />Églantine.</h2>
        </div>
        <p className="lede">
          Deux femmes, un seul registre : faire que l&apos;on se sente attendue.
          Toutes les deux passent vous saluer dès l&apos;entrée.
        </p>
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
            <div className="team-banner-role">Coiffure · Onglerie · SPA</div>
          </div>
          <div className="team-banner-sep" />
          <div className="team-banner-member">
            <div className="team-banner-first">Magalie</div>
            <div className="team-banner-role">Gérante · Institut</div>
          </div>
        </div>
      </div>
    </section>
  )
}
