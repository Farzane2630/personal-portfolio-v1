import React from 'react'
import Navbar from '../Components/Navbar'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t, i18n } = useTranslation()
  return (
    <article class="contact active" data-page="contact">

      <Navbar />
      <header>
        <h2 class="h2 article-title">
          {t('pages.header.contact')}
        </h2>
      </header>

      <section class="contact-form">

        <h3 class="h3 form-title">
          {t('pages.contact.title')}
        </h3>

        <form action="#" class="form" data-form>

          <div class="input-wrapper">
            <input type="text" name="fullname" class="form-input" placeholder={t('pages.contact.input_1')} required data-form-input />

            <input type="email" name="email" class="form-input" placeholder={t('pages.contact.input_2')} required data-form-input />
          </div>

          <textarea name="message" class="form-input" placeholder={t('pages.contact.txt_area')} required data-form-input></textarea>

          <button class="form-btn" type="submit" disabled data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span>
              {t('pages.contact.btn')}
            </span>
          </button>

        </form>

      </section>

    </article>
  )
}

