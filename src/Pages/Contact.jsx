import Navbar from '../Components/Navbar'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()
  return (
    <article className="contact active" data-page="contact">

      <Navbar />
      <header>
        <h2 className="h2 article-title">
          {t('pages.header.contact')}
        </h2>
      </header>

      <section className="contact-form">

        <h3 className="h3 form-title">
          {t('pages.contact.title')}
        </h3>

        <form action="#" className="form" data-form>

          <div className="input-wrapper">
            <input type="text" name="fullname" className="form-input" placeholder={t('pages.contact.input_1')} required data-form-input />

            <input type="email" name="email" className="form-input" placeholder={t('pages.contact.input_2')} required data-form-input />
          </div>

          <textarea name="message" className="form-input" placeholder={t('pages.contact.txt_area')} required data-form-input></textarea>

          <button className="form-btn" type="submit" disabled data-form-btn>
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

