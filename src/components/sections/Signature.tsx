import { useApp, Lang } from '../../context'

const TREATMENTS: Record<Lang, { name: string; sub: string; dur: string; price: string }[]> = {
  fr: [
    { name: 'Hydradermie Jeunesse', sub: 'La star — hydratation intensive', dur: '60 MIN', price: '75 €' },
    { name: 'Hydradermie Lift', sub: 'Gymnastique des muscles · lifting immédiat', dur: '90 MIN', price: '83 €' },
    { name: 'Soin Âge Summum', sub: 'Anti-âge longévité · rides & fermeté', dur: '75 MIN', price: '99 €' },
    { name: 'Dermapen', sub: 'Mini-invasif acide hyaluronique', dur: '80 MIN', price: '139 €' },
  ],
  nl: [
    { name: 'Hydradermie Jeunesse', sub: 'De ster — intensieve hydratatie', dur: '60 MIN', price: '75 €' },
    { name: 'Hydradermie Lift', sub: 'Spiergymnastiek · onmiddellijke lifting', dur: '90 MIN', price: '83 €' },
    { name: 'Soin Âge Summum', sub: 'Anti-aging · rimpels & stevigheid', dur: '75 MIN', price: '99 €' },
    { name: 'Dermapen', sub: 'Mini-invasief hyaluronzuur', dur: '80 MIN', price: '139 €' },
  ],
}

export default function Signature() {
  const { t, lang } = useApp()
  const treatments = TREATMENTS[lang]
  return (
    <section className="signature">
      <div className="glow-bg" />
      <div className="signature-grid">
        <div className="signature-visual reveal">
          <div
            className="atmo has-photo"
            style={{ backgroundImage: "url('/guinot_photo.png')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: 'var(--bg-2)' }}
          />
          <div className="badge">Guinot<small>{t('sig_badge')}</small></div>
        </div>
        <div className="reveal">
          <div className="eyebrow">{t('sig_eyebrow')}</div>
          <h2 className="section-title">{t('sig_title_pre')}<em>{t('sig_title_em')}</em><br />{t('sig_title_post')}</h2>
          <p className="lede">{t('sig_lede')}</p>
          <div className="treatments">
            {treatments.map((tr) => (
              <div key={tr.name} className="treatment">
                <div className="i">·</div>
                <div className="name">{tr.name}<small>{tr.sub}</small></div>
                <div className="dur">{tr.dur}</div>
                <div className="price">{tr.price}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <a className="btn" href="#services">{t('sig_cta')}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
