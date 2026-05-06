import { useApp } from '../context'

export default function Dock() {
  const { t } = useApp()
  return (
    <nav className="dock" aria-label="Réservation rapide">
      <a className="primary" href="tel:+3256555529">{t('dock_call')}</a>
      <a href="https://m.me/CominesVendome">{t('dock_msg')}</a>
    </nav>
  )
}
