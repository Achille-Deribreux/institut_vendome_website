import { useApp } from '../context'
import { useSEO } from '../hooks/useSEO'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Dock from '../components/Dock'

const CONTENT = {
  fr: {
    crumbs: 'Vendôme · Informations légales',
    titlePre: 'Informations ',
    titleEm: 'légales.',
    lede: 'Mentions légales, politique de confidentialité et cookies — Institut Vendôme, Comines.',

    s1: 'Mentions légales',
    pub_title: 'Éditeur du site',
    pub_body: `Vendome SRL — Société à responsabilité limitée de droit belge
Siège social : Rue du Fort 24 · 7780 Comines-Warneton · Belgique
Numéro BCE : 0675.509.087
Numéro de TVA : BE 0675.509.087
Téléphone : +32 56 55 55 29
Contact : achille@deribreux.be`,

    host_title: 'Hébergeur',
    host_body: `Render Services, Inc.
525 Brannan St Ste 300 · San Francisco · CA 94107 · États-Unis
render.com`,

    dev_title: 'Développeur',
    dev_body: `AD IT Solutions — aditsolutions.be`,

    s2: 'Politique de confidentialité (RGPD)',
    ctrl_title: 'Responsable du traitement',
    ctrl_body: `Vendome SRL — Rue du Fort 24 · 7780 Comines-Warneton · Belgique
achille@deribreux.be`,

    data_title: 'Données collectées',
    data_body: `Ce site ne collecte pas directement de données personnelles via formulaire ou inscription. Aucun compte utilisateur n'est créé.

Des données techniques (adresse IP) peuvent être traitées par des services tiers lorsque vous consultez ce site :
• Google Maps : intégration d'une carte interactive — policies.google.com/privacy
• Google Fonts : chargement des polices depuis les serveurs Google — policies.google.com/privacy

Pour tout contact via Messenger (Facebook), le traitement de vos données est régi par la politique de confidentialité de Meta Platforms, Inc.`,

    storage_title: 'Stockage local (localStorage)',
    storage_body: `Ce site utilise le stockage local de votre navigateur pour mémoriser vos préférences de langue (vd_lang) et de thème visuel (vd_palette). Ces données restent sur votre appareil et ne sont jamais transmises à nos serveurs. Il s'agit de préférences fonctionnelles, exemptées de consentement préalable.`,

    retention_title: 'Conservation',
    retention_body: `Les préférences stockées localement peuvent être supprimées à tout moment en effaçant les données de navigation de votre navigateur.`,

    rights_title: 'Vos droits',
    rights_body: `Conformément au Règlement général sur la protection des données (RGPD — Règlement UE 2016/679), vous disposez des droits suivants :
• Droit d'accès à vos données
• Droit de rectification
• Droit à l'effacement (« droit à l'oubli »)
• Droit à la limitation du traitement
• Droit à la portabilité des données
• Droit d'opposition

Pour exercer ces droits : achille@deribreux.be`,

    dpa_title: 'Autorité de contrôle',
    dpa_body: `Autorité de protection des données (APD)
Rue de la Presse 35 · 1000 Bruxelles
autoriteprotectiondonnees.be — contact@apd-gba.be`,

    s3: 'Politique en matière de cookies',
    cookies_body: `Ce site n'utilise pas de cookies de suivi ou publicitaires.

Stockage fonctionnel (localStorage) :
• vd_lang — votre langue préférée (français ou néerlandais)
• vd_palette — votre palette de couleurs choisie

Ces données sont strictement nécessaires au bon fonctionnement du site et exemptées de consentement selon l'article 129 de la loi du 13 juin 2005 relative aux communications électroniques.

Services tiers : Google Maps et Google Fonts peuvent déposer leurs propres cookies ou identifiants. Consultez la politique de confidentialité de Google pour plus d'informations : policies.google.com/privacy`,
  },

  nl: {
    crumbs: 'Vendôme · Wettelijke informatie',
    titlePre: 'Wettelijke ',
    titleEm: 'informatie.',
    lede: 'Wettelijke vermeldingen, privacyverklaring en cookies — Institut Vendôme, Komen.',

    s1: 'Wettelijke vermeldingen',
    pub_title: 'Uitgever van de website',
    pub_body: `Vendome BV — Vennootschap naar Belgisch recht met beperkte aansprakelijkheid
Maatschappelijke zetel : Rue du Fort 24 · 7780 Komen-Waasten · België
KBO-nummer : 0675.509.087
BTW-nummer : BE 0675.509.087
Telefoon : +32 56 55 55 29
Contact : achille@deribreux.be`,

    host_title: 'Hostingprovider',
    host_body: `Render Services, Inc.
525 Brannan St Ste 300 · San Francisco · CA 94107 · Verenigde Staten
render.com`,

    dev_title: 'Ontwikkelaar',
    dev_body: `AD IT Solutions — aditsolutions.be`,

    s2: 'Privacyverklaring (AVG/GDPR)',
    ctrl_title: 'Verwerkingsverantwoordelijke',
    ctrl_body: `Vendome BV — Rue du Fort 24 · 7780 Komen-Waasten · België
achille@deribreux.be`,

    data_title: 'Verzamelde gegevens',
    data_body: `Deze website verzamelt geen persoonlijke gegevens rechtstreeks via een formulier of registratie. Er worden geen gebruikersaccounts aangemaakt.

Technische gegevens (IP-adres) kunnen worden verwerkt door externe diensten wanneer u deze website gebruikt :
• Google Maps : integratie van een interactieve kaart — policies.google.com/privacy
• Google Fonts : lettertypen geladen van Google-servers — policies.google.com/privacy

Voor contact via Messenger (Facebook) wordt de verwerking van uw gegevens beheerst door het privacybeleid van Meta Platforms, Inc.`,

    storage_title: 'Lokale opslag (localStorage)',
    storage_body: `Deze website gebruikt de lokale opslag van uw browser om uw taal- (vd_lang) en themavoorkeur (vd_palette) te onthouden. Deze gegevens blijven op uw apparaat en worden nooit naar onze servers verzonden. Het gaat om functionele voorkeuren die vrijgesteld zijn van voorafgaande toestemming.`,

    retention_title: 'Bewaartermijn',
    retention_body: `Lokaal opgeslagen voorkeuren kunnen op elk moment worden verwijderd door de browsegegevens van uw browser te wissen.`,

    rights_title: 'Uw rechten',
    rights_body: `Overeenkomstig de Algemene Verordening Gegevensbescherming (AVG — Verordening EU 2016/679) heeft u de volgende rechten :
• Recht op inzage in uw gegevens
• Recht op rectificatie
• Recht op verwijdering (« recht op vergetelheid »)
• Recht op beperking van de verwerking
• Recht op gegevensoverdraagbaarheid
• Recht van bezwaar

Om deze rechten uit te oefenen : achille@deribreux.be`,

    dpa_title: 'Toezichthoudende autoriteit',
    dpa_body: `Gegevensbeschermingsautoriteit (GBA)
Drukpersstraat 35 · 1000 Brussel
gegevensbeschermingsautoriteit.be — contact@apd-gba.be`,

    s3: 'Cookiebeleid',
    cookies_body: `Deze website gebruikt geen tracking- of advertentiecookies.

Functionele opslag (localStorage) :
• vd_lang — uw voorkeurstaal (Frans of Nederlands)
• vd_palette — uw gekozen kleurenpalet

Deze gegevens zijn strikt noodzakelijk voor het goed functioneren van de website en vrijgesteld van toestemming overeenkomstig artikel 129 van de wet van 13 juni 2005 betreffende de elektronische communicatie.

Diensten van derden : Google Maps en Google Fonts kunnen eigen cookies of identificatoren plaatsen. Raadpleeg het privacybeleid van Google voor meer informatie : policies.google.com/privacy`,
  },
}

const LEGAL_SEO = {
  fr: { title: 'Mentions légales & Confidentialité | Institut Vendôme', description: 'Informations légales, politique de confidentialité et cookies de l\'Institut Vendôme à Comines — Vendome SRL, BCE 0675.509.087.' },
  nl: { title: 'Wettelijke vermeldingen & Privacy | Institut Vendôme', description: 'Wettelijke vermeldingen, privacyverklaring en cookiebeleid van Institut Vendôme in Komen — Vendome BV, KBO 0675.509.087.' },
}

export default function MentionsLegalesPage() {
  const { lang } = useApp()
  useSEO({ ...LEGAL_SEO[lang], canonical: 'https://institut-vendome.be/mentions-legales' })
  const c = CONTENT[lang]

  return (
    <>
      <NavBar activePage="home" />
      <main>
        <section className="page-hero">
          <div className="glow-bg" />
          <div className="container">
            <div className="crumbs">{c.crumbs}</div>
            <h1>{c.titlePre}<em>{c.titleEm}</em></h1>
            <p className="lede">{c.lede}</p>
          </div>
        </section>

        <section style={{ padding: '64px 0 96px' }}>
          <div className="container">
            <div style={{ maxWidth: 780 }}>

              <LegalSection title={c.s1}>
                <LegalBlock title={c.pub_title} body={c.pub_body} />
                <LegalBlock title={c.host_title} body={c.host_body} />
                <LegalBlock title={c.dev_title} body={c.dev_body} />
              </LegalSection>

              <LegalSection title={c.s2}>
                <LegalBlock title={c.ctrl_title} body={c.ctrl_body} />
                <LegalBlock title={c.data_title} body={c.data_body} />
                <LegalBlock title={c.storage_title} body={c.storage_body} />
                <LegalBlock title={c.retention_title} body={c.retention_body} />
                <LegalBlock title={c.rights_title} body={c.rights_body} />
                <LegalBlock title={c.dpa_title} body={c.dpa_body} />
              </LegalSection>

              <LegalSection title={c.s3}>
                <LegalBlock title="" body={c.cookies_body} />
              </LegalSection>

            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Dock />
    </>
  )
}

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 56 }}>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.25rem',
        fontWeight: 600,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--accent)',
        marginBottom: 28,
        paddingBottom: 10,
        borderBottom: '1px solid var(--line-strong)',
      }}>
        {title}
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {children}
      </div>
    </div>
  )
}

function LegalBlock({ title, body }: { title: string; body: string }) {
  return (
    <div>
      {title && (
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.85rem',
          fontWeight: 700,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: 'var(--ink-mute)',
          marginBottom: 8,
        }}>
          {title}
        </h3>
      )}
      <p style={{
        color: 'var(--ink-soft)',
        fontSize: '0.95rem',
        lineHeight: 1.75,
        whiteSpace: 'pre-line',
        margin: 0,
      }}>
        {body}
      </p>
    </div>
  )
}
