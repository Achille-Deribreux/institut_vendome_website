const TREATMENTS = [
  { name: 'Hydradermie Jeunesse', sub: 'La star — hydratation intensive', dur: '60 MIN', price: '75 €' },
  { name: 'Hydradermie Lift', sub: 'Gymnastique des muscles · lifting immédiat', dur: '90 MIN', price: '83 €' },
  { name: 'Soin Âge Summum', sub: 'Anti-âge longévité · rides & fermeté', dur: '75 MIN', price: '99 €' },
  { name: 'Dermapen', sub: 'Mini-invasif acide hyaluronique', dur: '80 MIN', price: '139 €' },
]

export default function Signature() {
  return (
    <section className="signature">
      <div className="glow-bg" />
      <div className="signature-grid">
        <div className="signature-visual reveal">
          <div
            className="atmo has-photo"
            style={{ backgroundImage: "url('/guinot_photo.png')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: 'var(--bg-2)' }}
          />
          <div className="badge">Guinot<small>Diagnostic offert</small></div>
        </div>
        <div className="reveal">
          <div className="eyebrow">En cabine</div>
          <h2 className="section-title">L'expertise <em>Guinot,</em><br />geste à geste.</h2>
          <p className="lede">
            Marque-référence des instituts pro français, Guinot inspire toute notre cabine soin.
            Avant chaque protocole, votre peau est analysée gratuitement pour choisir le geste
            juste — hydratation, anti-âge, pureté, lifting manuel ou Dermapen.
          </p>
          <div className="treatments">
            {TREATMENTS.map((tr) => (
              <div key={tr.name} className="treatment">
                <div className="i">·</div>
                <div className="name">{tr.name}<small>{tr.sub}</small></div>
                <div className="dur">{tr.dur}</div>
                <div className="price">{tr.price}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <a className="btn" href="#services">Voir tous les soins visage</a>
          </div>
        </div>
      </div>
    </section>
  )
}
