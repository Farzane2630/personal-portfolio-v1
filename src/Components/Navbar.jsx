import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineLanguage } from "react-icons/md"
import { useTranslation } from 'react-i18next'
import LanguageContext from '../context'

export default function Navbar() {
  const locales = [
    { title: 'English', short: 'en' },
    { title: 'Deutsch', short: 'de' },
    { title: "فارسی", short: "fa" },

  ]

  const context = useContext(LanguageContext)

  const { t, i18n } = useTranslation()

  const handleChangeLanguage = () => {
    const currentIndex = locales.findIndex(
      (locale) => locale.short === context.language
    )

    const nextIndex = (currentIndex + 1) % locales.length

    context.setLanguage(locales[nextIndex].short)
  }

  const currentIndex = locales.findIndex(
    (locale) => locale.short === context.language
  )


  useEffect(() => {
    i18n.changeLanguage(context.language)
  }, [context.language, i18n])

  return (
    <nav className="navbar">

      <ul className="navbar-list">

        <li className="navbar-item">
          <Link className=" navbar-link" to='/'>
            {t('pages.navbar.about')}
          </Link>
        </li>

        <li className="navbar-item">
          <Link className=" navbar-link" to="/resume">
            {t('pages.navbar.resume')}
          </Link>
        </li>

        <li className="navbar-item">
          <Link className=" navbar-link" to="/portfolio">
            {t('pages.navbar.portfolio')}
          </Link>
        </li>

        <li className="navbar-item">
          <button className="navbar-link"
            data-nav-link style={{ display: "flex", alignItems: "center", columnGap: 4 }}
            onClick={handleChangeLanguage}
          >
            <MdOutlineLanguage fontSize="17px" />

            {locales[currentIndex].title}

          </button>
        </li>

      </ul>

    </nav>
  )
}
