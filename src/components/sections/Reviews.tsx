const REVIEWS = [
  {
    stars: '★★★★★',
    text: "Très bon accueil, équipe souriante, ambiance cosy et bien chauffée. On ressort détendue, on revient.",
    who: 'Aurélie',
    source: 'Comines · Google',
  },
  {
    stars: '★★★★★',
    text: "Le forfait Évasion en duo avec ma sœur, c’est devenu notre rituel d’anniversaire. La coupe de champagne, c’est un détail qui change tout.",
    who: 'Sophie',
    source: 'Wervicq · Facebook',
  },
  {
    stars: '★★★★☆',
    text: "Magalie m’a fait son diagnostic Guinot la première fois — depuis, elle suit ma peau comme une pro. C’est rare.",
    who: 'Caroline',
    source: 'Lille · Groupon',
  },
]

export default function Reviews() {
  return (
    <section className="reviews">
      <div className="reviews-head reveal">
        <div className="eyebrow">Ambiance</div>
        <h2 className="section-title">Ce qu&apos;on dit <em>de nous.</em></h2>
        <p className="lede" style={{ margin: '0 auto' }}>
          Plusieurs dizaines d&apos;avis cumul&eacute;s sur Google, Groupon et Facebook. Note moyenne de 4/5.
        </p>
      </div>
      <div className="reviews-grid">
        {REVIEWS.map((r) => (
          <div key={r.who} className="review reveal">
            <div className="stars">{r.stars}</div>
            <p>&laquo; {r.text} &raquo;</p>
            <div className="who"><strong>{r.who}</strong> &mdash; {r.source}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
