import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Lang = 'fr' | 'nl'
export type Palette = 'faithful' | 'luxe' | 'editorial' | 'bolder'

const DICT = {
  fr: {
    // Nav & dock
    nav_home: 'Accueil',
    nav_services: 'Services',
    nav_tarifs: 'Tarifs',
    nav_contact: 'Contact',
    cta_book: 'Prendre rendez-vous',
    dock_call: 'Appeler',
    dock_msg: 'Messenger',
    // Footer
    ftr_explore: 'Explorer',
    ftr_services: 'Nos services',
    ftr_visit: 'Nous trouver',
    ftr_hours: 'Mardi → vendredi · 09h00 — 18h30',
    ftr_hours_2: 'Samedi · 08h30 — 17h00',
    ftr_hours_3: 'Dimanche & lundi · fermé',
    ftr_rdv: 'Rendez-vous sur appel ou Messenger',
    ftr_legal: '© 2026 Institut Vendôme · Comines',
    ftr_mentions: 'Mentions légales & confidentialité',
    ftr_made_by: 'Site réalisé par AD IT Solutions',
    ftr_tagline: 'Coiffure · Parfumerie · Institut · Onglerie · SPA · Solarium climatisé',
    ftr_intro: 'Établissement multi-services au cœur de Comines, à la frontière franco-belge. Référence Guinot en cabine.',
    ftr_svc1: 'Coiffure',
    ftr_svc2: 'Soins visage Guinot',
    ftr_svc3: 'SPA & massages',
    ftr_svc4: 'Onglerie',
    ftr_svc5: 'Épilation & photodépilation',
    ftr_svc6: 'Solarium climatisé',
    // Tweaks
    tweaks_title: 'Palette',
    tweaks_faithful: 'Plum',
    tweaks_luxe: 'Or',
    tweaks_editorial: 'Sobre',
    tweaks_bolder: 'Néon',
    // Hero
    hero_headline: 'La beauté',
    hero_script: 'comme une évasion.',
    hero_tagline: 'Coiffure · Institut · SPA · Onglerie · Parfumerie',
    hero_cta_discover: 'Découvrir les services',
    hero_stat1: 'Univers de soin',
    hero_stat2: 'Ouvert mardi au samedi',
    hero_stat3: 'Sur Google & Groupon',
    // USPs
    usps_eyebrow: 'Nos signatures',
    usps_title_pre: 'Trois ',
    usps_title_em: 'raisons',
    usps_title_post: ' de pousser la porte.',
    usp1_h: 'Tout sous un même toit',
    usp1_p: "Coiffure, soins visage, onglerie, SPA, parfumerie, solarium. Un seul rendez-vous, six univers de prise en charge — c'est unique à Comines.",
    usp2_h: 'Référence Guinot en cabine',
    usp2_p: "Hydradermie, Âge Summum, Technispa : nos soins visage premium s'appuient sur la marque pro française. Diagnostic de peau offert.",
    usp3_h: 'SPA avec champagne & tapas',
    usp3_p: 'Chaque forfait sauna · hammam · jacuzzi inclut la coupe de champagne, les tapas, la boisson rafraîchissante, la serviette et le peignoir.',
    // Services section (homepage)
    svc_eyebrow: 'Nos univers',
    svc_title_pre: 'Six ',
    svc_title_em: 'chemins',
    svc_title_post: 'vers le bien-être.',
    svc_lede: "Chaque univers a sa propre cabine, son propre rythme, sa propre équipe. Nous les avons pensés pour qu'ils se complètent : commencez par un soin Guinot, finissez au jacuzzi avec une coupe à la main.",
    // Brand strip
    brand_parfumerie: 'PARFUMERIE',
    brand_cabine: 'EN CABINE',
    // Signature
    sig_eyebrow: 'En cabine',
    sig_title_pre: "L'expertise ",
    sig_title_em: 'Guinot,',
    sig_title_post: 'geste à geste.',
    sig_lede: "Marque-référence des instituts pro français, Guinot inspire toute notre cabine soin. Avant chaque protocole, votre peau est analysée gratuitement pour choisir le geste juste — hydratation, anti-âge, pureté, lifting manuel ou Dermapen.",
    sig_badge: 'Diagnostic offert',
    sig_cta: 'Voir tous les soins visage',
    // SPA Highlight
    spa_eyebrow: 'Forfaits SPA',
    spa_headline_1: 'Sauna, hammam,',
    spa_headline_2: 'jacuzzi ',
    spa_headline_script: '— et la coupe.',
    spa_lede: "Tous nos forfaits SPA incluent boisson rafraîchissante, coupe de champagne et tapas. Serviette et peignoir mis à disposition. Tous déclinables en duo.",
    spa_feat1_name: 'Détente',
    spa_feat1_rest: ' · 1 personne · 1h00 — dès 55€',
    spa_feat2_name: 'Relax',
    spa_feat2_rest: ' · SPA + soin visage 30 min OU massage corps 30 min — dès 115€',
    spa_feat3_name: 'Évasion',
    spa_feat3_rest: ' · SPA + massage corps 40 min + soin visage 40 min — dès 175€',
    spa_cta: 'Tous les forfaits SPA',
    spa_card1_tag: 'Détente · 1h00',
    spa_card1_script: 'Détente',
    spa_card1_p: 'Sauna, hammam, jacuzzi. Boisson, coupe, tapas inclus. Disponible en duo.',
    spa_card1_from: 'À partir de',
    spa_card2_tag: 'Plébiscité · 2h30',
    spa_card2_script: 'Évasion',
    spa_card2_p: 'SPA + massage corps 40 min + soin visage 40 min. Le grand jeu.',
    spa_card2_from: 'Dès',
    spa_card3_tag: 'Relax · 1h30',
    spa_card3_script: 'Relax',
    spa_card3_p: 'SPA + 30 min de soin visage ou de massage corps au choix.',
    spa_card3_from: 'À partir de',
    // Booking
    book_eyebrow: 'Rendez-vous',
    book_title_pre: 'Trois ',
    book_title_em: 'chemins',
    book_title_post: ' vers la cabine.',
    book_lede: "Appelez-nous pendant les heures d'ouverture, écrivez via Messenger ou par e-mail — nous répondons dans les meilleurs délais.",
    book_ch1_l1: "Appel direct · pendant l'ouverture",
    book_ch1_ind: 'Réponse vocale',
    book_ch2_l1: 'Messenger',
    book_ch2_ind: 'Discussion',
    book_ch3_l1: 'E-mail',
    book_ch3_ind: 'Réponse rapide',
    // Reviews
    rev_eyebrow: 'Ambiance',
    rev_title_pre: "Ce qu'on dit ",
    rev_title_em: 'de nous.',
    rev_lede: "Plusieurs dizaines d'avis cumulés sur Google, Groupon et Facebook. Note moyenne de 4/5.",
    // Visit
    vis_eyebrow: 'Nous trouver',
    vis_title_pre: 'À la ',
    vis_title_em: 'frontière,',
    vis_title_post: 'au milieu de la Lys.',
    vis_lede: "Rue du Fort 24 · 7780 Comines-Warneton · Belgique. Au cœur de la commune, à 20 minutes de Lille et accessible depuis tout l'Eurométropole. Entrée plain-pied, fauteuil roulant.",
    vis_tel: 'Téléphone',
    vis_marven: 'Mar — Ven',
    vis_sat: 'Samedi',
    vis_dimlon: 'Dim & Lun',
    vis_closed: 'Fermé',
    vis_payments: 'Paiements',
    vis_payments_val: 'Cartes · sans contact NFC · espèces',
    // Team
    team_eyebrow: "L'équipe",
    team_lede: "Deux femmes, un seul registre : faire que l'on se sente attendue. Toutes les deux passent vous saluer dès l'entrée.",
    team_role1: 'Esthétique & Onglerie',
    team_role2: 'Gérante · Institut',
    // Services Page
    svcp_crumbs: 'Vendôme · Services',
    svcp_title_pre: 'Six ',
    svcp_title_em: 'univers,',
    svcp_title_post: 'une seule maison.',
    svcp_lede: "Coiffure, soins visage, onglerie, épilation, SPA, parfumerie. Choisissez votre porte d'entrée — vous repartirez probablement par une autre.",
    // Tarifs Page
    tarif_crumbs: 'Vendôme · Tarifs',
    tarif_title_pre: 'Grille ',
    tarif_title_em: 'tarifaire',
    tarif_title_post: ' 2026.',
    tarif_lede: "L'ensemble des prestations Vendôme, prix TTC. Filtrez par catégorie ou cherchez une prestation ci-dessous.",
    tarif_search: 'Chercher une prestation, une zone, un soin…',
    tarif_empty: 'Aucune prestation trouvée.',
    tarif_footnote: "Tarifs TTC en euros, applicables au 1ᵉʳ janvier 2026. Sous réserve d'erreur typographique. Pour confirmer un tarif ou demander un devis personnalisé :",
    // Contact Page
    cont_crumbs: 'Vendôme · Contact',
    cont_title_pre: 'Nous ',
    cont_title_em: 'trouver.',
    cont_lede: 'Institut Vendôme — Rue du Fort 24, 7780 Comines-Warneton. À deux pas de la frontière franco-belge, au cœur de Comines.',
    cont_addr: 'Adresse',
    cont_tel: 'Téléphone',
    cont_msg_label: 'Messenger',
    cont_msg_cta: 'Écrire via Messenger',
    cont_msg_sub: 'Réponse sous 24h en semaine',
    cont_email_label: 'E-mail',
    cont_email_sub: 'Réponse rapide',
    cont_hours: 'Horaires',
    cont_mon: 'Lundi',
    cont_marven: 'Mar — Ven',
    cont_sat: 'Samedi',
    cont_sun: 'Dimanche',
    cont_closed: 'Fermé',
    cont_maps: 'Ouvrir dans Google Maps →',
    cont_access_pre: 'Comment ',
    cont_access_em: 'venir',
    cont_car_h: 'En voiture',
    cont_car_p: 'Depuis Courtrai : E403 sortie Comines. Depuis Lille : A25 sortie Comines. Parking gratuit Rue du Fort.',
    cont_bus_h: 'En transport',
    cont_bus_p: 'Bus TEC ligne 65 arrêt "Comines Centre". Depuis Courtrai, bus De Lijn ligne W61, arrêt "Komen Markt", 5 min à pied.',
    cont_fr_h: 'Depuis la France',
    cont_fr_p: "Comines est à la frontière franco-belge. Depuis Comines-France (59560), traversez le pont sur la Lys — l'institut est à 3 min à pied.",
  },
  nl: {
    // Nav & dock
    nav_home: 'Home',
    nav_services: 'Diensten',
    nav_tarifs: 'Tarieven',
    nav_contact: 'Contact',
    cta_book: 'Afspraak maken',
    dock_call: 'Bellen',
    dock_msg: 'Messenger',
    // Footer
    ftr_explore: 'Verkennen',
    ftr_services: 'Onze diensten',
    ftr_visit: 'Ons vinden',
    ftr_hours: 'Dinsdag → vrijdag · 09u00 — 18u30',
    ftr_hours_2: 'Zaterdag · 08u30 — 17u00',
    ftr_hours_3: 'Zondag & maandag · gesloten',
    ftr_rdv: 'Afspraken via telefoon of Messenger',
    ftr_legal: '© 2026 Institut Vendôme · Komen',
    ftr_mentions: 'Wettelijke vermeldingen & privacy',
    ftr_made_by: 'Website gerealiseerd door AD IT Solutions',
    ftr_tagline: 'Kapsalon · Parfumerie · Instituut · Nagelstudio · SPA · Geklimatiseerde zonnebank',
    ftr_intro: 'Multi-service etablissement in het hart van Komen, aan de Frans-Belgische grens. Guinot-referentie in cabine.',
    ftr_svc1: 'Kapsalon',
    ftr_svc2: 'Guinot gezichtsbehandelingen',
    ftr_svc3: 'SPA & massages',
    ftr_svc4: 'Nagelstudio',
    ftr_svc5: 'Ontharing & photodepilatie',
    ftr_svc6: 'Geklimatiseerde zonnebank',
    // Tweaks
    tweaks_title: 'Palet',
    tweaks_faithful: 'Plum',
    tweaks_luxe: 'Goud',
    tweaks_editorial: 'Sober',
    tweaks_bolder: 'Neon',
    // Hero
    hero_headline: 'De schoonheid',
    hero_script: 'als een ontsnapping.',
    hero_tagline: 'Kapsalon · Instituut · SPA · Nagelstudio · Parfumerie',
    hero_cta_discover: 'Ontdek de diensten',
    hero_stat1: 'Verzorgingsdomeinen',
    hero_stat2: 'Open dinsdag tot zaterdag',
    hero_stat3: 'Op Google & Groupon',
    // USPs
    usps_eyebrow: 'Onze handtekeningen',
    usps_title_pre: 'Drie ',
    usps_title_em: 'redenen',
    usps_title_post: ' om binnen te stappen.',
    usp1_h: 'Alles onder één dak',
    usp1_p: 'Kapsalon, gezichtsbehandelingen, nagelstudio, SPA, parfumerie, zonnebank. Één afspraak, zes domeinen van verzorging — uniek in Komen.',
    usp2_h: 'Guinot-referentie in cabine',
    usp2_p: 'Hydradermie, Âge Summum, Technispa: onze premium gezichtsbehandelingen steunen op het Franse pro-merk. Gratis huiddiagnose aangeboden.',
    usp3_h: 'SPA met champagne & tapas',
    usp3_p: 'Elk sauna · hammam · jacuzzi pakket omvat een glas champagne, tapas, een verfrissende drank, handdoek en badjas.',
    // Services section (homepage)
    svc_eyebrow: 'Onze domeinen',
    svc_title_pre: 'Zes ',
    svc_title_em: 'wegen',
    svc_title_post: 'naar welzijn.',
    svc_lede: 'Elk domein heeft zijn eigen cabine, eigen ritme, eigen team. Ontworpen om elkaar aan te vullen: begin met een Guinot-behandeling, eindig in de jacuzzi met een glas in de hand.',
    // Brand strip
    brand_parfumerie: 'PARFUMERIE',
    brand_cabine: 'IN CABINE',
    // Signature
    sig_eyebrow: 'In de cabine',
    sig_title_pre: 'De expertise ',
    sig_title_em: 'Guinot,',
    sig_title_post: 'beweging voor beweging.',
    sig_lede: 'Guinot, referentiemerk van de Franse professionele instituten, inspireert onze volledige behandelingscabine. Vóór elk protocol wordt uw huid gratis geanalyseerd om de juiste behandeling te kiezen — hydratatie, anti-aging, zuiverheid, manuele lifting of Dermapen.',
    sig_badge: 'Diagnose gratis',
    sig_cta: 'Bekijk alle gezichtsbehandelingen',
    // SPA Highlight
    spa_eyebrow: 'SPA-pakketten',
    spa_headline_1: 'Sauna, hammam,',
    spa_headline_2: 'jacuzzi ',
    spa_headline_script: '— en het glas.',
    spa_lede: 'Al onze SPA-pakketten omvatten een verfrissende drank, een glas champagne en tapas. Handdoek en badjas ter beschikking. Allemaal beschikbaar als duo.',
    spa_feat1_name: 'Ontspanning',
    spa_feat1_rest: ' · 1 persoon · 1u00 — vanaf 55€',
    spa_feat2_name: 'Relax',
    spa_feat2_rest: ' · SPA + gezichtsbehandeling 30 min OF lichaamsmassage 30 min — vanaf 115€',
    spa_feat3_name: 'Ontvluchting',
    spa_feat3_rest: ' · SPA + lichaamsmassage 40 min + gezichtsbehandeling 40 min — vanaf 175€',
    spa_cta: 'Alle SPA-pakketten',
    spa_card1_tag: 'Ontspanning · 1u00',
    spa_card1_script: 'Ontspanning',
    spa_card1_p: 'Sauna, hammam, jacuzzi. Drank, champagne, tapas inbegrepen. Beschikbaar als duo.',
    spa_card1_from: 'Vanaf',
    spa_card2_tag: 'Populairste · 2u30',
    spa_card2_script: 'Ontvluchting',
    spa_card2_p: 'SPA + lichaamsmassage 40 min + gezichtsbehandeling 40 min. Het grote werk.',
    spa_card2_from: 'Vanaf',
    spa_card3_tag: 'Relax · 1u30',
    spa_card3_script: 'Relax',
    spa_card3_p: 'SPA + 30 min gezichtsbehandeling of lichaamsmassage naar keuze.',
    spa_card3_from: 'Vanaf',
    // Booking
    book_eyebrow: 'Afspraken',
    book_title_pre: 'Drie ',
    book_title_em: 'wegen',
    book_title_post: ' naar de cabine.',
    book_lede: 'Bel ons tijdens de openingsuren, schrijf via Messenger of per e-mail — we antwoorden zo snel mogelijk.',
    book_ch1_l1: 'Direct bellen · tijdens openingsuren',
    book_ch1_ind: 'Telefonisch antwoord',
    book_ch2_l1: 'Messenger',
    book_ch2_ind: 'Bericht',
    book_ch3_l1: 'E-mail',
    book_ch3_ind: 'Snel antwoord',
    // Reviews
    rev_eyebrow: 'Sfeer',
    rev_title_pre: 'Wat men zegt ',
    rev_title_em: 'over ons.',
    rev_lede: 'Tientallen beoordelingen op Google, Groupon en Facebook. Gemiddelde score van 4/5.',
    // Visit
    vis_eyebrow: 'Ons vinden',
    vis_title_pre: 'Aan de ',
    vis_title_em: 'grens,',
    vis_title_post: 'midden in de Leie.',
    vis_lede: "Rue du Fort 24 · 7780 Komen-Waasten · België. In het hart van de gemeente, op 20 minuten van Lille en bereikbaar vanuit de hele Eurometropool. Gelijkvloerse toegang, rolstoeltoegankelijk.",
    vis_tel: 'Telefoon',
    vis_marven: 'Din — Vri',
    vis_sat: 'Zaterdag',
    vis_dimlon: 'Zon & Maa',
    vis_closed: 'Gesloten',
    vis_payments: 'Betalingen',
    vis_payments_val: 'Kaarten · contactloos NFC · contanten',
    // Team
    team_eyebrow: 'Het team',
    team_lede: 'Twee vrouwen, één doel: u zich welkom laten voelen. Ze komen u allebei al bij de deur begroeten.',
    team_role1: 'Esthetiek & Nagelstudio',
    team_role2: 'Zaakvoerster · Instituut',
    // Services Page
    svcp_crumbs: 'Vendôme · Diensten',
    svcp_title_pre: 'Zes ',
    svcp_title_em: 'domeinen,',
    svcp_title_post: 'één huis.',
    svcp_lede: "Kapsalon, gezichtsbehandelingen, nagelstudio, ontharing, SPA, parfumerie. Kies uw ingang — u vertrekt waarschijnlijk via een andere.",
    // Tarifs Page
    tarif_crumbs: 'Vendôme · Tarieven',
    tarif_title_pre: 'Onze ',
    tarif_title_em: 'tarieven',
    tarif_title_post: ' 2026.',
    tarif_lede: 'Alle diensten van Vendôme, prijs inclusief btw. Filter op categorie of zoek een behandeling hieronder.',
    tarif_search: 'Zoek een behandeling, zone, verzorging…',
    tarif_empty: 'Geen behandeling gevonden.',
    tarif_footnote: 'Tarieven inclusief btw in euro, geldig vanaf 1 januari 2026. Onder voorbehoud van drukfouten. Om een tarief te bevestigen of een persoonlijk offerte aan te vragen:',
    // Contact Page
    cont_crumbs: 'Vendôme · Contact',
    cont_title_pre: 'Ons ',
    cont_title_em: 'vinden.',
    cont_lede: 'Institut Vendôme — Rue du Fort 24, 7780 Komen-Waasten. Op een steenworp van de Frans-Belgische grens, in het hart van Komen.',
    cont_addr: 'Adres',
    cont_tel: 'Telefoon',
    cont_msg_label: 'Messenger',
    cont_msg_cta: 'Schrijven via Messenger',
    cont_msg_sub: 'Antwoord binnen 24u op werkdagen',
    cont_email_label: 'E-mail',
    cont_email_sub: 'Snel antwoord',
    cont_hours: 'Openingsuren',
    cont_mon: 'Maandag',
    cont_marven: 'Din — Vri',
    cont_sat: 'Zaterdag',
    cont_sun: 'Zondag',
    cont_closed: 'Gesloten',
    cont_maps: 'Openen in Google Maps →',
    cont_access_pre: 'Hoe ',
    cont_access_em: 'komen',
    cont_car_h: 'Met de wagen',
    cont_car_p: 'Vanuit Kortrijk: E403 afrit Komen. Vanuit Lille: A25 afrit Komen. Gratis parking Rue du Fort.',
    cont_bus_h: 'Met het openbaar vervoer',
    cont_bus_p: 'Bus TEC lijn 65, halte "Comines Centre". Vanuit Kortrijk, bus De Lijn lijn W61, halte "Komen Markt", 5 min te voet.',
    cont_fr_h: 'Vanuit Frankrijk',
    cont_fr_p: 'Komen ligt aan de Frans-Belgische grens. Vanuit Comines-France (59560), stap over de brug op de Leie — het instituut is 3 min te voet.',
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
