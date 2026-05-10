import { useApp } from '../../context'

export default function Booking() {
  const { t } = useApp()
  return (
    <section className="booking-strip" id="booking">
      <div className="booking-inner">
        <div className="reveal">
          <div className="eyebrow">{t('book_eyebrow')}</div>
          <h2 className="section-title">{t('book_title_pre')}<em>{t('book_title_em')}</em>{t('book_title_post')}</h2>
          <p className="lede">{t('book_lede')}</p>
        </div>
        <div className="channels reveal">
          <a className="channel" href="tel:+3256555529">
            <div>
              <div className="l1">{t('book_ch1_l1')}</div>
              <div className="l2">+32 56 55 55 29</div>
            </div>
            <div className="ind">{t('book_ch1_ind')}</div>
          </a>
          <a className="channel" href="https://m.me/CominesVendome">
            <div>
              <div className="l1">{t('book_ch2_l1')}</div>
              <div className="l2">@CominesVendome</div>
            </div>
            <div className="ind">{t('book_ch2_ind')}</div>
          </a>
          <a className="channel" href="mailto:magalie.doolaeghe@gmail.com">
            <div>
              <div className="l1">{t('book_ch3_l1')}</div>
              <div className="l2">magalie.doolaeghe@gmail.com</div>
            </div>
            <div className="ind">{t('book_ch3_ind')}</div>
          </a>
        </div>
      </div>
    </section>
  )
}
