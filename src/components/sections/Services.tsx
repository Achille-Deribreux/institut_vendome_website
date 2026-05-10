import { useApp, Lang } from '../../context'

const SERVICES: Record<Lang, { slug: string; label: string; title: string; script: string; sub: string; image: string; wide?: boolean; tall?: boolean }[]> = {
  fr: [
    { slug: 'coiffure', label: 'Coiffure', title: 'Coiffure dame, homme', script: '& petits princes.', sub: 'Brushing · couleur · balayage', image: '/salon.png', wide: true },
    { slug: 'soins-visage', label: 'Visage', title: 'Soins', script: 'visage Guinot', sub: 'Hydradermie · Âge Summum', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80' },
    { slug: 'spa', label: 'SPA', title: 'SPA & massages', script: 'avec champagne', sub: 'Sauna · hammam · jacuzzi', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80', tall: true },
    { slug: 'onglerie', label: 'Onglerie', title: 'Onglerie', script: '& maquillage', sub: 'Pose · vernis · permanent', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=80' },
    { slug: 'epilation', label: 'Épilation', title: 'Cire, fil', script: '& photodépilation', sub: 'Femmes & hommes', image: 'https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&w=1000&q=80' },
  ],
  nl: [
    { slug: 'coiffure', label: 'Kapsalon', title: 'Kapsalon dames, heren', script: '& kleine prinsjes.', sub: 'Brushing · kleur · balayage', image: '/salon.png', wide: true },
    { slug: 'soins-visage', label: 'Visage', title: 'Gezichts-', script: 'behandelingen Guinot', sub: 'Hydradermie · Âge Summum', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80' },
    { slug: 'spa', label: 'SPA', title: 'SPA & massages', script: 'met champagne', sub: 'Sauna · hammam · jacuzzi', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80', tall: true },
    { slug: 'onglerie', label: 'Nagelstudio', title: 'Nagelstudio', script: '& make-up', sub: 'Pose · vernis · permanent', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=80' },
    { slug: 'epilation', label: 'Ontharing', title: 'Wax, draad', script: '& photodepilatie', sub: 'Vrouwen & mannen', image: 'https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&w=1000&q=80' },
  ],
}

export default function Services() {
  const { t, lang } = useApp()
  const services = SERVICES[lang]
  return (
    <section className="services-section" id="services">
      <div className="services-head reveal">
        <div>
          <div className="eyebrow">{t('svc_eyebrow')}</div>
          <h2 className="section-title">{t('svc_title_pre')}<em>{t('svc_title_em')}</em><br />{t('svc_title_post')}</h2>
        </div>
        <p className="lede">{t('svc_lede')}</p>
      </div>
      <div className="services-grid">
        {services.map((s) => (
          <a
            key={s.slug}
            className={`service-card reveal${s.wide ? ' wide' : ''}${s.tall ? ' tall' : ''}`}
            href={`/${lang}/services`}
          >
            <div className="atmo has-photo" style={{ backgroundImage: `url('${s.image}')` }} />
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
