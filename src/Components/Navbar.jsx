import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineLanguage } from "react-icons/md"
import { useTranslation } from 'react-i18next'
import EnglishContext from '../context'

export default function Navbar() {
  const locales = [
    { title: 'English', short: 'en' },
    { title: 'Deutsch', short: 'de' },
  ]

  const context = useContext(EnglishContext)

  const { t, i18n } = useTranslation()

  useEffect(() => {
    i18n.changeLanguage(
      context.isEn ? locales[0].short : locales[1].short
    )
  }, [context.isEn])

  return (
    <nav class="navbar">

      <ul class="navbar-list">

        <li class="navbar-item">
          <button class="navbar-link" data-nav-link>
            <Link className="link" to='/'>
              {t('pages.navbar.about')}
            </Link>
          </button>
        </li>

        <li class="navbar-item">
          <button class="navbar-link" data-nav-link>
            <Link className="link" to="/resume">
              {t('pages.navbar.resume')}

            </Link>
          </button>
        </li>

        <li class="navbar-item">
          <button class="navbar-link" data-nav-link>
            <Link className="link" to="/portfolio">
              {t('pages.navbar.portfolio')}
            </Link>
          </button>
        </li>

        {/* <li class="navbar-item">
          <button class="navbar-link" data-nav-link>
            <Link className="link" to="/contact">
              {t('pages.navbar.contact')}
            </Link>
          </button>
        </li> */}


        <li class="navbar-item">
          <button class="navbar-link"
            data-nav-link style={{ display: "flex", alignItems: "center", columnGap: 4 }}
            onClick={(e) => {
              context.setIsEn(!context.isEn)
            }}
          >
            <MdOutlineLanguage fontSize="17px" />
            {
              context.isEn ? locales[1].title : locales[0].title
            }
          </button>
        </li>

      </ul>

    </nav>
  )
}
