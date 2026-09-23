import { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { TbWorld, TbUser, TbFileText, TbBriefcase, TbMail } from "react-icons/tb"
import { useTranslation } from 'react-i18next'
import LanguageContext from '../context'

export default function Navbar() {
  const locales = [
    { title: 'English', code: 'EN', short: 'en' },
    { title: 'Deutsch', code: 'DE', short: 'de' },
    { title: 'فارسی', code: 'FA', short: 'fa' },
  ]

  const context = useContext(LanguageContext)
  const { t, i18n } = useTranslation()

  const handleChangeLanguage = () => {
    const currentIndex = locales.findIndex(
      (locale) => locale.short === context.language
    )
    const validIndex = currentIndex >= 0 ? currentIndex : 0
    const nextIndex = (validIndex + 1) % locales.length

    context.setLanguage(locales[nextIndex].short)
  }

  const currentIndex = locales.findIndex(
    (locale) => locale.short === context.language
  )
  const activeIndex = currentIndex >= 0 ? currentIndex : 0

  const navLinkClass = ({ isActive }) => `navbar-link${isActive ? " active" : ""}`

  useEffect(() => {
    i18n.changeLanguage(context.language)
  }, [context.language, i18n])

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink className={navLinkClass} to="/" end>
            <TbUser className="nav-icon" />
            <span>{t('pages.navbar.about')}</span>
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink className={navLinkClass} to="/resume">
            <TbFileText className="nav-icon" />
            <span>{t('pages.navbar.resume')}</span>
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink className={navLinkClass} to="/portfolio">
            <TbBriefcase className="nav-icon" />
            <span>{t('pages.navbar.portfolio')}</span>
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink className={navLinkClass} to="/contact">
            <TbMail className="nav-icon" />
            <span>{t('pages.navbar.contact')}</span>
          </NavLink>
        </li>

        <li className="navbar-item">
          <button
            type="button"
            className="navbar-link lang-switch-btn"
            onClick={handleChangeLanguage}
            title={`Switch language (current: ${locales[activeIndex].title})`}
            aria-label={`Switch language: currently ${locales[activeIndex].title}`}
          >
            <TbWorld className="nav-icon" />
            <span className="lang-text">{locales[activeIndex].title}</span>
            <span className="lang-badge">{locales[activeIndex].code}</span>
          </button>
        </li>
      </ul>
    </nav>
  )
}
