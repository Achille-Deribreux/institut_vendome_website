import { useApp } from '../context'

export default function Footer() {
  const { t } = useApp()
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="brand" style={{ fontSize: 42 }}>
            <span>Vendôme</span>
          </div>
          <p style={{ marginTop: 14 }}>{t('ftr_tagline')}</p>
          <p>{t('ftr_intro')}</p>
        </div>
        <div>
          <h4>{t('ftr_explore')}</h4>
          <ul>
            <li><a href="#services">{t('nav_services')}</a></li>
            <li><a href="#booking">{t('nav_tarifs')}</a></li>
            <li><a href="#visit">{t('nav_contact')}</a></li>
          </ul>
        </div>
        <div>
          <h4>{t('ftr_services')}</h4>
          <ul>
            <li>Coiffure</li>
            <li>Soins visage Guinot</li>
            <li>SPA &amp; massages</li>
            <li>Onglerie</li>
            <li>Épilation &amp; photodépilation</li>
            <li>Amincissement Technispa</li>
            <li>Solarium climatisé</li>
          </ul>
        </div>
        <div>
          <h4>{t('ftr_visit')}</h4>
          <ul>
            <li>Rue du Fort 24</li>
            <li>7780 Comines-Warneton · Belgique</li>
            <li><a href="tel:+3256555529">+32 56 55 55 29</a></li>
            <li><a href="mailto:serviceclient@parfumerie-vendome.com">serviceclient@parfumerie-vendome.com</a></li>
            <li style={{ marginTop: 16 }}>{t('ftr_hours')}</li>
            <li>{t('ftr_hours_2')}</li>
            <li>{t('ftr_hours_3')}</li>
            <li style={{ color: 'var(--accent)', marginTop: 10 }}>{t('ftr_rdv')}</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>{t('ftr_legal')}</span>
        <span>
          <a href="https://facebook.com/cominesvendome">Facebook</a>
          {' · '}
          <a href="https://parfumerie-vendome.com">E-shop parfumerie</a>
        </span>
      </div>
    </footer>
  )
}
