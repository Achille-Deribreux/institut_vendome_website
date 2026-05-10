import { useApp, Lang } from '../context'
import { useSEO } from '../hooks/useSEO'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Dock from '../components/Dock'

const IMAGES: Record<string, string> = {
  coiffure: '/salon.png',
  'soins-visage': 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
  spa: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
  onglerie: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
  epilation: 'https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&w=800&q=80',
  maquillage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
  solarium: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80',
  enfants: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80',
}

type Service = { slug: string; filter: string; label: string; title: string; script: string; desc: string; price: string; tone: string; wide?: boolean }

const SERVICES: Record<Lang, Service[]> = {
  fr: [
    { slug: 'coiffure', filter: 'coiffure', label: 'Coiffure', title: 'Coiffure', script: 'dame, homme, enfant', desc: "Brushing, coloration, balayage, ombré, mèches, chignon mariage, extensions à chaud. Et la gamme « petit prince & princesse » jusqu'à 10 ans.", price: 'Dès 5 € (frange) — 169 € (lissage brésilien)', tone: 'warm' },
    { slug: 'soins-visage', filter: 'visage', label: 'Visage', title: 'Soins visage', script: 'la signature Guinot', desc: "Hydraclean, Hydradermie Jeunesse, Hydradermie Lift, Âge Summum, Eye Logic, Dermapen. Diagnostic de peau offert.", price: 'De 49 € à 139 €', tone: 'cool' },
    { slug: 'spa', filter: 'spa', label: 'SPA', title: 'SPA & massages', script: 'avec champagne & tapas', desc: "Sauna, hammam, jacuzzi. Forfaits Détente, Relax, Évasion. Tous déclinables en duo. Massages corps, dos, jambes, futures mamans.", price: 'De 35 € à 195 €', tone: '' },
    { slug: 'onglerie', filter: 'onglerie', label: 'Onglerie', title: 'Onglerie', script: 'manucure, pose, vernis', desc: "Manucure spa, pédicure médicale, pose d'ongles, vernis semi-permanent, gel renforçateur, paraffine.", price: 'De 9 € à 49 €', tone: 'warm' },
    { slug: 'epilation', filter: 'epilation', label: 'Épilation', title: 'Épilation', script: 'cire, fil, photodépilation', desc: "Épilations à la cire, au fil, teintures cils & sourcils. Photodépilation femmes ET hommes : 10 séances + 1 gratuite.", price: 'De 9 € à 149 €', tone: 'cool' },
    { slug: 'maquillage', filter: 'maquillage', label: 'Maquillage', title: 'Maquillage', script: 'classique & permanent', desc: "Maquillage du jour, soirée, cours. Maquillage permanent longue durée (5 à 10 ans, retouche incluse) : sourcils, eye-liner, lèvres.", price: 'De 25 € à 399 €', tone: 'dark' },
    { slug: 'solarium', filter: 'solarium', label: 'Solarium', title: 'Solarium', script: 'climatisé', desc: "Séances 10 ou 20 minutes. Forfait 10 + 2 séances offertes. Et nos autobronzants visage, décolleté, jambes.", price: 'De 4 € à 69 €', tone: 'warm' },
    { slug: 'enfants', filter: 'enfants', label: 'Petit prince & princesse', title: 'Pour les enfants', script: "jusqu'à 10 ans", desc: "Coiffure fille & garçon, soin visage 30 min, massage corps, vernis. Et le « duo maman ou papa » : massage corps en duo, 30 min.", price: 'De 3 € à 55 €', tone: 'cool', wide: true },
  ],
  nl: [
    { slug: 'coiffure', filter: 'coiffure', label: 'Kapsalon', title: 'Kapsalon', script: 'dames, heren, kinderen', desc: "Brushing, kleuring, balayage, ombré, mèches, bruidschapskapsel, warmte-extensions. En de « klein prinsje & prinsesje » reeks tot 10 jaar.", price: 'Vanaf 5 € (pony) — 169 € (Braziliaanse uitgroei)', tone: 'warm' },
    { slug: 'soins-visage', filter: 'visage', label: 'Gezicht', title: 'Gezichtsbehandelingen', script: 'de Guinot-handtekening', desc: "Hydraclean, Hydradermie Jeunesse, Hydradermie Lift, Âge Summum, Eye Logic, Dermapen. Gratis huiddiagnose aangeboden.", price: 'Van 49 € tot 139 €', tone: 'cool' },
    { slug: 'spa', filter: 'spa', label: 'SPA', title: 'SPA & massages', script: 'met champagne & tapas', desc: "Sauna, hammam, jacuzzi. Pakketten Ontspanning, Relax, Ontvluchting. Allemaal beschikbaar als duo. Lichaamsmassage, rug, benen, aanstaande moeders.", price: 'Van 35 € tot 195 €', tone: '' },
    { slug: 'onglerie', filter: 'onglerie', label: 'Nagelstudio', title: 'Nagelstudio', script: 'manicure, pose, lak', desc: "Spa-manicure, medische pédicure, nagelposa, semi-permanent lak, verstevigingsgel, paraffine.", price: 'Van 9 € tot 49 €', tone: 'warm' },
    { slug: 'epilation', filter: 'epilation', label: 'Ontharing', title: 'Ontharing', script: 'wax, draad, photodepilatie', desc: "Ontharing met wax, draad, wimper- & wenkbrauwverven. Photodepilatie vrouwen EN mannen: 10 sessies + 1 gratis.", price: 'Van 9 € tot 149 €', tone: 'cool' },
    { slug: 'maquillage', filter: 'maquillage', label: 'Make-up', title: 'Make-up', script: 'klassiek & permanent', desc: "Dagelijkse make-up, avond, cursus. Permanente make-up lange duur (5 tot 10 jaar, retouche inbegrepen): wenkbrauwen, eye-liner, lippen.", price: 'Van 25 € tot 399 €', tone: 'dark' },
    { slug: 'solarium', filter: 'solarium', label: 'Zonnebank', title: 'Zonnebank', script: 'geklimatiseerd', desc: "Sessies van 10 of 20 minuten. Pakket 10 + 2 sessies gratis. En onze zelfbruinende producten voor gezicht, decolleté, benen.", price: 'Van 4 € tot 69 €', tone: 'warm' },
    { slug: 'enfants', filter: 'enfants', label: 'Klein prinsje & prinsesje', title: 'Voor de kinderen', script: "tot 10 jaar", desc: "Kapsalon meisjes & jongens, gezichtsbehandeling 30 min, lichaamsmassage, lak. En het « duo met mama of papa »: lichaamsmassage in duo, 30 min.", price: 'Van 3 € tot 55 €', tone: 'cool', wide: true },
  ],
}

const SERVICES_SEO = {
  fr: { title: 'Services — Coiffure, Soins, SPA, Onglerie | Institut Vendôme Comines', description: 'Découvrez les 6 univers de l\'Institut Vendôme à Comines : coiffure, soins visage Guinot, SPA & massages, onglerie, épilation, solarium climatisé.' },
  nl: { title: 'Diensten — Kapsalon, Behandelingen, SPA, Nagelstudio | Institut Vendôme Komen', description: 'Ontdek de 6 domeinen van Institut Vendôme in Komen: kapsalon, Guinot gezichtsbehandelingen, SPA & massages, nagelstudio, ontharing, zonnebank.' },
}

export default function ServicesPage() {
  const { t, lang } = useApp()
  useSEO({ ...SERVICES_SEO[lang], canonical: 'https://institut-vendome.be/services' })
  const services = SERVICES[lang]
  return (
    <>
      <NavBar activePage="services" />
      <main>
        <section className="page-hero">
          <div className="glow-bg" />
          <div className="container">
            <div className="crumbs">{t('svcp_crumbs')}</div>
            <h1>{t('svcp_title_pre')}<em>{t('svcp_title_em')}</em><br />{t('svcp_title_post')}</h1>
            <p className="lede">{t('svcp_lede')}</p>
          </div>
        </section>

        <section className="hub">
          <div className="hub-grid">
            {services.map((s) => (
              <a
                key={s.slug}
                className={`hub-card${s.wide ? ' span-2' : ''}`}
                href={`/tarifs?filtre=${s.filter}`}
              >
                <div className="atmo has-photo" data-tone={s.tone || undefined} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('${IMAGES[s.slug]}')` }} />
                <div className="body">
                  <div>
                    <span className="num">{s.label}</span>
                  </div>
                  <div>
                    <h3>{s.title}<span className="script">{s.script}</span></h3>
                    <p>{s.desc}</p>
                    <div className="meta">
                      <span>{s.price}</span>
                      <span className="arrow">→</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <Dock />
    </>
  )
}
