import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Lang = 'fr' | 'nl'
export type Palette = 'faithful' | 'luxe' | 'editorial' | 'bolder'

const DICT = {
  fr: {
    nav_home: 'Accueil',
    nav_services: 'Services',
    nav_tarifs: 'Tarifs',
    nav_contact: 'Contact',
    cta_book: 'Prendre rendez-vous',
    dock_call: 'Appeler',
    dock_msg: 'Messenger',
    ftr_explore: 'Explorer',
    ftr_services: 'Nos services',
    ftr_visit: 'Nous trouver',
    ftr_hours: 'Mardi → vendredi · 08h30 — 19h00',
    ftr_hours_2: 'Samedi · 08h30 — 18h00',
    ftr_hours_3: 'Dimanche & lundi · fermé',
    ftr_rdv: 'Rendez-vous sur appel ou Messenger',
    ftr_legal: '© 2026 Institut Vendôme · Comines',
    ftr_tagline: 'Coiffure · Parfumerie · Institut · Onglerie · SPA · Solarium climatisé',
    ftr_intro: 'Établissement multi-services au cœur de Comines, à la frontière franco-belge. Référence Guinot en cabine.',
    tweaks_title: 'Palette',
    tweaks_faithful: 'Plum',
    tweaks_luxe: 'Or',
    tweaks_editorial: 'Sobre',
    tweaks_bolder: 'Néon',
  },
  nl: {
    nav_home: 'Onthaal',
    nav_services: 'Diensten',
    nav_tarifs: 'Tarieven',
    nav_contact: 'Contact',
    cta_book: 'Afspraak maken',
    dock_call: 'Bellen',
    dock_msg: 'Messenger',
    ftr_explore: 'Verkennen',
    ftr_services: 'Onze diensten',
    ftr_visit: 'Ons vinden',
    ftr_hours: 'Dinsdag → vrijdag · 08u30 — 19u00',
    ftr_hours_2: 'Zaterdag · 08u30 — 18u00',
    ftr_hours_3: 'Zondag & maandag · gesloten',
    ftr_rdv: 'Afspraken via telefoon of Messenger',
    ftr_legal: '© 2026 Institut Vendôme · Komen',
    ftr_tagline: 'Kapsalon · Parfumerie · Instituut · Nagelstudio · SPA · Geklimatiseerde zonnebank',
    ftr_intro: 'Multi-service etablissement in het hart van Komen, aan de Frans-Belgische grens. Guinot-referentie in cabine.',
    tweaks_title: 'Palet',
    tweaks_faithful: 'Plum',
    tweaks_luxe: 'Goud',
    tweaks_editorial: 'Sober',
    tweaks_bolder: 'Neon',
  },
}

export type DictKey = keyof typeof DICT['fr']

interface AppContextType {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: DictKey) => string
  palette: Palette
  setPalette: (p: Palette) => void
}

export const AppContext = createContext<AppContextType | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(
    () => (localStorage.getItem('vd_lang') as Lang) || 'fr'
  )
  const [palette, setPaletteState] = useState<Palette>(
    () => (localStorage.getItem('vd_palette') as Palette) || 'faithful'
  )

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('vd_lang', l)
  }

  const setPalette = (p: Palette) => {
    setPaletteState(p)
    localStorage.setItem('vd_palette', p)
  }

  const t = (key: DictKey): string => DICT[lang][key] ?? DICT['fr'][key]

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    document.documentElement.setAttribute('data-palette', palette === 'faithful' ? '' : palette)
  }, [palette])

  return (
    <AppContext.Provider value={{ lang, setLang, t, palette, setPalette }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
