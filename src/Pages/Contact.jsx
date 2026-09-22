import Navbar from '../Components/Navbar'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Portfolio enquiry from ${formData.get('fullname')}`)
    const body = encodeURIComponent(`Name: ${formData.get('fullname')}\nEmail: ${formData.get('email')}\n\n${formData.get('message')}`)
    window.location.href = `mailto:farzanekazemi8517@gmail.com?subject=${subject}&body=${body}`
  }

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

        <p className="contact-intro">Tell me about the product or role you’re building. Your message opens in your email app.</p>
        <form className="form" onSubmit={handleSubmit}>

          <div className="input-wrapper">
            <input type="text" name="fullname" className="form-input" placeholder={t('pages.contact.input_1')} required data-form-input />

            <input type="email" name="email" className="form-input" placeholder={t('pages.contact.input_2')} required data-form-input />
          </div>

          <textarea name="message" className="form-input" placeholder={t('pages.contact.txt_area')} required data-form-input></textarea>

          <button className="form-btn" type="submit">
            <span aria-hidden="true">✉</span>
            <span>
              {t('pages.contact.btn')}
            </span>
          </button>

        </form>

      </section>

    </article>
  )
}
