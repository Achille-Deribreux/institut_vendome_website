export default function Booking() {
  return (
    <section className="booking-strip" id="booking">
      <div className="booking-inner">
        <div className="reveal">
          <div className="eyebrow">Rendez-vous</div>
          <h2 className="section-title">Trois <em>chemins</em> vers la cabine.</h2>
          <p className="lede">
            Appelez-nous pendant les heures d&apos;ouverture ou écrivez-nous via Messenger —
            nous répondons dans les meilleurs délais.
          </p>
        </div>
        <div className="channels reveal">
          <a className="channel" href="tel:+3256555529">
            <div className="ico">①</div>
            <div>
              <div className="l1">Appel direct · pendant l'ouverture</div>
              <div className="l2">+32 56 55 55 29</div>
            </div>
            <div className="ind">Réponse vocale</div>
          </a>
          <a className="channel" href="https://m.me/CominesVendome">
            <div className="ico">②</div>
            <div>
              <div className="l1">Messenger</div>
              <div className="l2">@CominesVendome</div>
            </div>
            <div className="ind">Discussion</div>
          </a>
        </div>
      </div>
    </section>
  )
}
