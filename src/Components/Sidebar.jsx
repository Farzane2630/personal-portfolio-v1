import React, { useState } from 'react'
import { TbMail } from "react-icons/tb"
import { BsPhoneFlip, BsCalendarWeek } from "react-icons/bs"
import { RiUserLocationFill } from "react-icons/ri"
import { SiLinkedin, SiGithub, SiXing, SiStackoverflow, SiMedium, SiWhatsapp } from "react-icons/si"
import { useTranslation } from 'react-i18next'

export default function Sidebar() {

   const [isShowContact, setIsShowContact] = useState(false)
   const { t, i18n } = useTranslation()

   return (
      <aside class={`sidebar ${isShowContact ? "active" : null}`} data-sidebar>

         <div class="sidebar-info">

<figure class="avatar-box">
   <img src="src/Components/images/photo_2025-03-31_11-55-06.jpg" alt="Farzaneh Kazemi" class="avatart-image" />
</figure>

            <div class="info-content">
               <h1 class="name" title="Farzane Kazemi">Farzaneh Kazemi</h1>

               <p class="title">
                  {t('sidebar.job_title')}
               </p>
            </div>

            <button class="info_more-btn data-sidebar-btn" onClick={() => setIsShowContact(!isShowContact)}>
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

         <div class="sidebar-info_more">

            <div class="separator"></div>

            <ul class="contacts-list">

               <li class="contact-item">

                  <div class="icon-box">
                     <TbMail />
                  </div>

                  <div class="contact-info">
                     <p class="contact-title">
                        {t('sidebar.email')}
                     </p>

                     <a href="mailto:farzanekazemi8517@gmail.com" class="contact-link">farzanekazemi8517@gmail.com</a>
                  </div>

               </li>

               <li class="contact-item">

                  <div class="icon-box">
                     <BsPhoneFlip />
                  </div>

                  <div class="contact-info">
                     <p class="contact-title">
                        {t('sidebar.phone')}
                     </p>

                     <a href="004915755991926" class="contact-link">+49 157 5599 1926</a>
                  </div>

               </li>

               <li class="contact-item">

                  <div class="icon-box">
                     <BsCalendarWeek />
                  </div>

                  <div class="contact-info">
                     <p class="contact-title">
                        {t('sidebar.birth')}
                     </p>

                     <time datetime="1982-06-23">April 07, 1996</time>
                  </div>

               </li>

               <li class="contact-item">

                  <div class="icon-box">
                     <RiUserLocationFill />
                  </div>

                  <div class="contact-info">
                     <p class="contact-title">
                        {t('sidebar.location')}
                     </p>

                     <address>Germany</address>
                  </div>

               </li>

            </ul>

            <div class="separator"></div>

            <ul class="social-list">

               <li class="social-item">
                  <a href="https://linkedin.com/in/farzane-kazemi" class="social-link">
                     <SiLinkedin />
                  </a>
               </li>

               <li class="social-item">
                  <a href="https://github.com/Farzane2630" class="social-link">
                     <SiGithub />
                  </a>
               </li>

               <li class="social-item">
                  <a href="https://medium.com/@farzanekazemi8517" class="social-link">
                     <SiMedium />
                  </a>
               </li>

               <li class="social-item">
                  <a href="https://www.xing.com/profile/Farzaneh_Kazemi3/web_profiles?expandNeffi=true" class="social-link">
                     <SiXing />
                  </a>
               </li>

               <li class="social-item">
                  <a href="https://stackoverflow.com/users/19888516/farzane-kazemi" class="social-link">
                     <SiStackoverflow />
                  </a>
               </li>
               
               {/* <li class="social-item">
                  <a href="" class="social-link">
                     <SiWhatsapp />
                  </a>
               </li> */}

            </ul>

         </div>

      </aside>
   )
}
