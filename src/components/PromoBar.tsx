import { useApp } from '../context'

export default function PromoBar() {
  const { t } = useApp()
  return (
    <div className="promo-bar">
      <span>{t('promo')}</span>
    </div>
  )
}
