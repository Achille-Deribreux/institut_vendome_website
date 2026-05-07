import { useApp } from '../../context'

const BRANDS = [
  { name: 'Lancôme', type: 'parfumerie' as const },
  { name: 'Azzaro', type: 'parfumerie' as const },
  { name: 'Bentley', type: 'parfumerie' as const },
  { name: 'Leonard', type: 'parfumerie' as const },
  { name: 'Lalique', type: 'parfumerie' as const },
  { name: 'Rochas', type: 'parfumerie' as const },
  { name: 'Guinot', type: 'cabine' as const },
]

export default function BrandStrip() {
  const { t } = useApp()
  const doubled = [...BRANDS, ...BRANDS]
  return (
    <section className="brand-strip" aria-label="Marques distribuées">
      <div className="row">
        {doubled.map((b, i) => (
          <span key={i} style={{ display: 'contents' }}>
            <span>{b.name}</span>
            <span className="sep">— {b.type === 'parfumerie' ? t('brand_parfumerie') : t('brand_cabine')} —</span>
          </span>
        ))}
      </div>
    </section>
  )
}
