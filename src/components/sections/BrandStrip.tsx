const BRANDS = [
  { name: 'Lancôme', type: 'PARFUMERIE' },
  { name: 'Azzaro', type: 'PARFUMERIE' },
  { name: 'Bentley', type: 'PARFUMERIE' },
  { name: 'Leonard', type: 'PARFUMERIE' },
  { name: 'Lalique', type: 'PARFUMERIE' },
  { name: 'Rochas', type: 'PARFUMERIE' },
  { name: 'Guinot', type: 'EN CABINE' },
]

export default function BrandStrip() {
  const doubled = [...BRANDS, ...BRANDS]
  return (
    <section className="brand-strip" aria-label="Marques distribuées">
      <div className="row">
        {doubled.map((b, i) => (
          <span key={i} style={{ display: 'contents' }}>
            <span>{b.name}</span>
            <span className="sep">— {b.type} —</span>
          </span>
        ))}
      </div>
    </section>
  )
}
