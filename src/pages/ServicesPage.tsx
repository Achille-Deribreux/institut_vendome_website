import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Dock from '../components/Dock'
import TweaksPanel from '../components/TweaksPanel'

const SERVICES = [
  {
    slug: 'coiffure',
    filter: 'coiffure',
    label: 'Coiffure',
    title: 'Coiffure',
    script: 'dame, homme, enfant',
    desc: "Brushing, coloration, balayage, ombré, mèches, chignon mariage, extensions à chaud. Et la gamme « petit prince & princesse » jusqu'à 10 ans.",
    price: 'Dès 5 € (frange) — 169 € (lissage brésilien)',
    tone: 'warm',
  },
  {
    slug: 'soins-visage',
    filter: 'visage',
    label: 'Visage',
    title: 'Soins visage',
    script: 'la signature Guinot',
    desc: "Hydraclean, Hydradermie Jeunesse, Hydradermie Lift, Âge Summum, Eye Logic, Dermapen. Diagnostic de peau offert.",
    price: 'De 49 € à 139 €',
    tone: 'cool',
  },
  {
    slug: 'spa',
    filter: 'spa',
    label: 'SPA',
    title: 'SPA & massages',
    script: 'avec champagne & tapas',
    desc: "Sauna, hammam, jacuzzi. Forfaits Détente, Relax, Évasion. Tous déclinables en duo. Massages corps, dos, jambes, futures mamans.",
    price: 'De 35 € à 195 €',
    tone: '',
  },
  {
    slug: 'onglerie',
    filter: 'onglerie',
    label: 'Onglerie',
    title: 'Onglerie',
    script: 'manucure, pose, vernis',
    desc: "Manucure spa, pédicure médicale, pose d'ongles, vernis semi-permanent, gel renforçateur, paraffine.",
    price: 'De 9 € à 49 €',
    tone: 'warm',
  },
  {
    slug: 'epilation',
    filter: 'epilation',
    label: 'Épilation',
    title: 'Épilation',
    script: 'cire, fil, photodépilation',
    desc: "Épilations à la cire, au fil, teintures cils & sourcils. Photodépilation femmes ET hommes : 10 séances + 1 gratuite.",
    price: 'De 9 € à 149 €',
    tone: 'cool',
  },
  {
    slug: 'maquillage',
    filter: 'maquillage',
    label: 'Maquillage',
    title: 'Maquillage',
    script: 'classique & permanent',
    desc: "Maquillage du jour, soirée, cours. Maquillage permanent longue durée (5 à 10 ans, retouche incluse) : sourcils, eye-liner, lèvres.",
    price: 'De 25 € à 399 €',
    tone: 'dark',
  },
  {
    slug: 'solarium',
    filter: 'solarium',
    label: 'Solarium',
    title: 'Solarium',
    script: 'climatisé',
    desc: "Séances 10 ou 20 minutes. Forfait 10 + 2 séances offertes. Et nos autobronzants visage, décolleté, jambes.",
    price: 'De 4 € à 69 €',
    tone: 'warm',
  },
  {
    slug: 'enfants',
    filter: 'enfants',
    label: 'Petit prince & princesse',
    title: 'Pour les enfants',
    script: "jusqu'à 10 ans",
    desc: "Coiffure fille & garçon, soin visage 30 min, massage corps, vernis. Et le « duo maman ou papa » : massage corps en duo, 30 min.",
    price: 'De 3 € à 55 €',
    tone: 'cool',
    wide: true,
  },
]

export default function ServicesPage() {
  return (
    <>
      <NavBar activePage="services" />
      <main>
        <section className="page-hero">
          <div className="glow-bg" />
          <div className="container">
            <div className="crumbs">Vendôme · Services</div>
            <h1>Six <em>univers,</em><br />une seule maison.</h1>
            <p className="lede">
              Coiffure, soins visage, onglerie, épilation, SPA, parfumerie. Choisissez votre porte
              d&apos;entrée — vous repartirez probablement par une autre.
            </p>
          </div>
        </section>

        <section className="hub">
          <div className="hub-grid">
            {SERVICES.map((s) => (
              <a
                key={s.slug}
                className={`hub-card${s.wide ? ' span-2' : ''}`}
                href={`/tarifs?filtre=${s.filter}`}
              >
                <div className="atmo" data-tone={s.tone || undefined} />
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
      <TweaksPanel />
    </>
  )
}
