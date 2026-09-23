import { useContext, useEffect, useState } from 'react'
import { TbMail } from "react-icons/tb"
import { BsPhoneFlip } from "react-icons/bs"
import { SiGithub, SiStackoverflow, SiMedium, SiLinkedin } from "react-icons/si"
import { useTranslation } from 'react-i18next'
import LanguageContext from '../context'

export default function Sidebar() {

   const [isShowContact, setIsShowContact] = useState(false)

   const context = useContext(LanguageContext)

   const { t, i18n } = useTranslation()


   useEffect(() => {
      i18n.changeLanguage(context.language)
   }, [context.language, i18n])


   return (
      <aside className={`sidebar ${isShowContact ? "active" : null}`} data-sidebar>

         <div className="sidebar-info">

            <figure className="avatar-box">
               <img src="/images/avatar.jpg" alt="Farzaneh Kazemi" className="avatart-image" />
            </figure>

            <div className="info-content">
               <h1 className="name" title="Farzane Kazemi">Farzaneh Kazemi</h1>

               <p className="title">
                  {t('sidebar.job_title')}
               </p>
            </div>

            <button type="button" className="info_more-btn data-sidebar-btn" onClick={() => setIsShowContact(!isShowContact)}>
               <span>
                  {
                     isShowContact
                        ? t('sidebar.hide_contact')
                        : t('sidebar.show_contact')
                  }
               </span>

               <ion-icon name="chevron-down"></ion-icon>
            </button>

         </div>

         <div className="sidebar-info_more">

            <div className="separator"></div>

            <ul className="contacts-list">

               <li className="contact-item">

                  <div className="icon-box">
                     <TbMail />
                  </div>

                  <div className="contact-info">
                     <p className="contact-title">
                        {t('sidebar.email')}
                     </p>

                     <a target="_blank" rel="noopener noreferrer" href="mailto:farzanekazemi8517@gmail.com" className="contact-link">farzanekazemi8517@gmail.com</a>
                  </div>

               </li>

               <li className="contact-item">

                  <div className="icon-box">
                     <BsPhoneFlip />
                  </div>

                  <div className="contact-info">
                     <p className="contact-title">
                        {t('sidebar.phone')}
                     </p>

                     <a href="tel:+4915755991926" className={`${context.language == "fa" ? "contact-link whatsapp" : "contact-link"}`} dir='ltr'>+49 157 5599 1926</a>
                  </div>

               </li>

            </ul>


            {/* social Links */}

            <div className="separator"></div>

            <ul className="social-list">

               <li className="social-item">
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/Farzane2630" className="social-link">
                     <SiGithub />
                  </a>
               </li>

               <li className="social-item">
                  <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@farzanekazemi8517" className="social-link">
                     <SiMedium />
                  </a>
               </li>

               <li className="social-item">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/farzaneh-kazemi-eng" className="social-link">
                     <SiLinkedin />
                  </a>
               </li>

               <li className="social-item">
                  <a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/19888516/farzane-kazemi" className="social-link">
                     <SiStackoverflow />
                  </a>
               </li>

            </ul>

         </div>

      </aside>
   )
}
