const SERVICES = [
  {
    slug: 'coiffure',
    label: 'Coiffure',
    title: 'Coiffure dame, homme',
    script: '& petits princes.',
    sub: 'Brushing · couleur · balayage',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=80',
    wide: true,
  },
  {
    slug: 'soins-visage',
    label: 'Visage',
    title: 'Soins',
    script: 'visage Guinot',
    sub: 'Hydradermie · Âge Summum',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80',
  },
  {
    slug: 'spa',
    label: 'SPA',
    title: 'SPA & massages',
    script: 'avec champagne',
    sub: 'Sauna · hammam · jacuzzi',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80',
    tall: true,
  },
  {
    slug: 'onglerie',
    label: 'Onglerie',
    title: 'Onglerie',
    script: '& maquillage',
    sub: 'Pose · vernis · permanent',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=80',
  },
  {
    slug: 'epilation',
    label: 'Épilation',
    title: 'Cire, fil',
    script: '& photodépilation',
    sub: 'Femmes & hommes',
    image: 'https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&w=1000&q=80',
  },
  {
    slug: 'amincissement',
    label: 'Silhouette',
    title: 'Amincissement',
    script: 'Technispa Guinot',
    sub: 'Forfaits 5 et 10 séances',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1400&q=80',
    wide: true,
  },
]

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-head reveal">
        <div>
          <div className="eyebrow">Nos univers</div>
          <h2 className="section-title">Six <em>chemins</em><br />vers le bien-être.</h2>
        </div>
        <p className="lede">
          Chaque univers a sa propre cabine, son propre rythme, sa propre équipe. Nous les avons
          pensés pour qu'ils se complètent : commencez par un soin Guinot, finissez au jacuzzi
          avec une coupe à la main.
        </p>
      </div>
      <div className="services-grid">
        {SERVICES.map((s) => (
          <a
            key={s.slug}
            className={`service-card reveal${s.wide ? ' wide' : ''}${s.tall ? ' tall' : ''}`}
            href="/services"
          >
            <div
              className="atmo has-photo"
              style={{ backgroundImage: `url('${s.image}')` }}
            />
            <div className="body">
              <span className="num">{s.label}</span>
              <div>
                <h3>{s.title}<span className="script">{s.script}</span></h3>
                <div className="meta">
                  <span>{s.sub}</span>
                  <span className="arrow">→</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
