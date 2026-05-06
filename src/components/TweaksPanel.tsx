import { useState } from 'react'
import { useApp, Palette } from '../context'

const PALETTES: { id: Palette; label: string; colors: string[] }[] = [
  { id: 'faithful', label: 'tweaks_faithful', colors: ['#1a0d2e', '#e6007e', '#f8c8dc'] },
  { id: 'luxe', label: 'tweaks_luxe', colors: ['#1c1018', '#d4a24c', '#e9d4a3'] },
  { id: 'editorial', label: 'tweaks_editorial', colors: ['#14121a', '#c9a8ff', '#d8c9ea'] },
  { id: 'bolder', label: 'tweaks_bolder', colors: ['#0d0814', '#ff1493', '#c44dff'] },
]

export default function TweaksPanel() {
  const { t, palette, setPalette } = useApp()
  const [open, setOpen] = useState(false)

  return (
    <>
      <button className="tweaks-toggle" aria-label="Palette de couleurs" onClick={() => setOpen((v) => !v)}>
        ◐
      </button>
      <aside className={`tweaks-panel${open ? ' open' : ''}`} role="dialog" aria-label="Palette">
        <h5>{t('tweaks_title')}</h5>
        <div className="tweaks-swatches">
          {PALETTES.map((p) => (
            <button
              key={p.id}
              data-palette={p.id}
              className={palette === p.id ? 'active' : ''}
              onClick={() => setPalette(p.id)}
            >
              <span className="swatch-row">
                {p.colors.map((c, i) => (
                  <span key={i} style={{ background: c }} />
                ))}
              </span>
              <span>{t(p.label as Parameters<typeof t>[0])}</span>
            </button>
          ))}
        </div>
      </aside>
    </>
  )
}
