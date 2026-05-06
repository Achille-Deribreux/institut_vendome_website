import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import PromoBar from '../components/PromoBar'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Dock from '../components/Dock'
import TweaksPanel from '../components/TweaksPanel'
import { CATEGORIES, TOC_ITEMS, FILTERS, TarifItem } from '../data/tarifs'

function renderItem(item: TarifItem, idx: number) {
  if (item.kind === 'subhead') {
    return <div key={idx} className="subhead">{item.text}</div>
  }
  if (item.kind === 'pkg') {
    return (
      <div key={idx} className="row-pkg">
        <div className="name">
          {item.name}
          {item.sub && <small>{item.sub}</small>}
        </div>
        <div className="price">{item.price}</div>
      </div>
    )
  }
  return (
    <div key={idx} className={`row${item.featured ? ' featured' : ''}`}>
      <div className="i">·</div>
      <div className="name">
        {item.name}
        {item.sub && <small>{item.sub}</small>}
      </div>
      <div className="dur">{item.dur ?? ''}</div>
      <div className="price">{item.price}</div>
    </div>
  )
}

function categoryMatchesSearch(cat: typeof CATEGORIES[0], term: string): boolean {
  if (!term) return true
  const t = term.toLowerCase()
  if (cat.title.toLowerCase().includes(t)) return true
  if (cat.titleScript?.toLowerCase().includes(t)) return true
  if (cat.desc?.toLowerCase().includes(t)) return true
  return cat.items.some((item) => {
    if (item.kind === 'subhead') return item.text.toLowerCase().includes(t)
    return (
      item.name.toLowerCase().includes(t) ||
      (item.sub?.toLowerCase().includes(t) ?? false)
    )
  })
}

export default function TarifsPage() {
  const [searchParams] = useSearchParams()
  const [activeFilter, setActiveFilter] = useState(() => searchParams.get('filtre') ?? 'all')
  const [search, setSearch] = useState('')

  useEffect(() => {
    const f = searchParams.get('filtre')
    if (f) setActiveFilter(f)
  }, [searchParams])

  const visible = useMemo(() => {
    return CATEGORIES.filter((cat) => {
      const filterMatch = activeFilter === 'all' || cat.filter === activeFilter
      const searchMatch = categoryMatchesSearch(cat, search)
      return filterMatch && searchMatch
    })
  }, [activeFilter, search])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <PromoBar />
      <NavBar activePage="tarifs" />
      <main>
        <section className="page-hero">
          <div className="glow-bg" />
          <div className="container">
            <div className="crumbs">Vendôme · Tarifs</div>
            <h1>Grille <em>tarifaire</em> 2026.</h1>
            <p className="lede">
              L&apos;ensemble des prestations Vendôme, prix TTC, sources&nbsp;: dépliant officiel BAT 2026.
              Filtrez par catégorie ou cherchez une prestation ci-dessous.
            </p>
          </div>
        </section>

        <div className="filter-bar">
          <div className="filter-bar-inner">
            <input
              type="text"
              className="search-input"
              placeholder="Chercher une prestation, une zone, un soin…"
              aria-label="Recherche"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {FILTERS.map((f) => (
              <button
                key={f.key}
                className={`chip${activeFilter === f.key ? ' active' : ''}`}
                onClick={() => setActiveFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {!search && activeFilter === 'all' && (
          <section className="toc">
            <div className="toc-grid">
              {TOC_ITEMS.map((item) => (
                <button
                  key={item.id}
                  className="toc-item"
                  onClick={() => scrollTo(item.id)}
                >
                  <span className="nm">{item.label}</span>
                </button>
              ))}
            </div>
          </section>
        )}

        <section className="tarifs-body">
          <div className="container">
            {visible.length === 0 && (
              <p style={{ color: 'var(--ink-mute)', padding: '40px 0' }}>
                Aucune prestation trouvée.
              </p>
            )}
            {visible.map((cat) => (
              <div key={cat.id} className="cat" id={cat.id} data-cat={cat.filter}>
                <div className="cat-head">
                  <h2>
                    {cat.title}{cat.titleScript && <> <em>{cat.titleScript}</em></>}
                  </h2>
                  <div className="summary">{cat.summary}</div>
                </div>
                {cat.desc && <p className="cat-desc">{cat.desc}</p>}
                {cat.items.map((item, i) => renderItem(item, i))}
              </div>
            ))}
            {visible.length > 0 && (
              <p className="footnote">
                Tarifs TTC en euros, applicables au 1ᵉʳ janvier 2026 — source&nbsp;: dépliant officiel BAT 2026 imprimé par Sobecom. Sous réserve d&apos;erreur typographique. Pour confirmer un tarif ou demander un devis personnalisé&nbsp;:{' '}
                <a href="tel:+3256555529" style={{ color: 'var(--accent)' }}>+32 56 55 55 29</a>.
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <Dock />
      <TweaksPanel />
    </>
  )
}
