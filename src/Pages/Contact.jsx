import { useTranslation } from 'react-i18next'
import { TbSend, TbCheck } from 'react-icons/tb'
import { useState } from 'react'

export default function Contact() {
  const { t } = useTranslation()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const fullname = formData.get('fullname') || ''
    const email = formData.get('email') || ''
    const message = formData.get('message') || ''

    const subject = encodeURIComponent(`Portfolio enquiry from ${fullname}`)
    const body = encodeURIComponent(`Name: ${fullname}\nEmail: ${email}\n\n${message}`)
    
    setSubmitted(true)
    setTimeout(() => {
      window.location.href = `mailto:farzanekazemi8517@gmail.com?subject=${subject}&body=${body}`
    }, 300)
  }

  return (
    <article className="contact active" data-page="contact">
      <header>
        <h2 className="h2 article-title">
          {t('pages.header.contact')}
        </h2>
        <div className="article-title-after"></div>
      </header>

      <section className="contact-form">
        <h3 className="h3 form-title">
          {t('pages.contact.title')}
        </h3>

        <p className="contact-intro">
          {t('pages.contact.intro')}
        </p>

        <form className="form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder={t('pages.contact.input_1')}
              required
              data-form-input
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder={t('pages.contact.input_2')}
              required
              data-form-input
            />
          </div>

          <textarea
            name="message"
            className="form-input form-textarea"
            placeholder={t('pages.contact.txt_area')}
            required
            rows={5}
            data-form-input
          ></textarea>

          <button className="form-btn" type="submit">
            {submitted ? <TbCheck className="form-btn-icon" /> : <TbSend className="form-btn-icon" />}
            <span>
              {t('pages.contact.btn')}
            </span>
          </button>
        </form>
      </section>
    </article>
  )
}
