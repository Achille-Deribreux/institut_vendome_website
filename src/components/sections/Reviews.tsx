import { useApp, Lang } from '../../context'

const REVIEWS: Record<Lang, { stars: string; text: string; who: string; source: string }[]> = {
  fr: [
    { stars: '★★★★★', text: "Très bon accueil, équipe souriante, ambiance cosy et bien chauffée. On ressort détendue, on revient.", who: 'Aurélie', source: 'Comines · Google' },
    { stars: '★★★★★', text: "Le forfait Évasion en duo avec ma sœur, c'est devenu notre rituel d'anniversaire. La coupe de champagne, c'est un détail qui change tout.", who: 'Sophie', source: 'Wervicq · Facebook' },
    { stars: '★★★★☆', text: "Magalie m'a fait son diagnostic Guinot la première fois — depuis, elle suit ma peau comme une pro. C'est rare.", who: 'Caroline', source: 'Lille · Groupon' },
  ],
  nl: [
    { stars: '★★★★★', text: "Heel vriendelijke ontvangst, lachend team, gezellige sfeer. Je vertrekt ontspannen en komt zeker terug.", who: 'Aurélie', source: 'Komen · Google' },
    { stars: '★★★★★', text: "Het Évasion-pakket in duo met mijn zus is ons verjaardagsritueel geworden. Het glas champagne maakt echt het verschil.", who: 'Sophie', source: 'Wervik · Facebook' },
    { stars: '★★★★☆', text: "Magalie heeft de eerste keer een Guinot-diagnose gedaan — sindsdien volgt ze mijn huid als een pro. Dat is zeldzaam.", who: 'Caroline', source: 'Rijsel · Groupon' },
  ],
}

export default function Reviews() {
  const { t, lang } = useApp()
  const reviews = REVIEWS[lang]
  return (
    <section className="reviews">
      <div className="reviews-head reveal">
        <div className="eyebrow">{t('rev_eyebrow')}</div>
        <h2 className="section-title">{t('rev_title_pre')}<em>{t('rev_title_em')}</em></h2>
        <p className="lede" style={{ margin: '0 auto' }}>{t('rev_lede')}</p>
      </div>
      <div className="reviews-grid">
        {reviews.map((r) => (
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
