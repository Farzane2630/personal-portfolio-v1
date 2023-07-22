import React, { useState } from 'react'
import { TbMail } from "react-icons/tb"
import { BsPhoneFlip, BsCalendarWeek } from "react-icons/bs"
import { RiUserLocationFill } from "react-icons/ri"
import { SiLinkedin, SiGithub, SiSkype } from "react-icons/si"
import { useTranslation } from 'react-i18next'

export default function Sidebar() {

   const [isShowContact, setIsShowContact] = useState(false)
   const { t, i18n } = useTranslation()

   return (
      <aside class={`sidebar ${isShowContact ? "active" : null}`} data-sidebar>

         <div class="sidebar-info">

            <figure class="avatar-box">
               <img src="src/assets/avatar-2.png" alt="Farzane Kazemi" width="80" />
            </figure>

            <div class="info-content">
               <h1 class="name" title="Farzane Kazemi">Farzane Kazemi</h1>

               <p class="title">
                  {t('sidebar.job_title')}
               </p>
            </div>

            <button class="info_more-btn data-sidebar-btn" onClick={() => setIsShowContact(!isShowContact)}>
               <span>
               {t('sidebar.show_contact')}
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

                     <a href="mailto:richard@example.com" class="contact-link">farzanekazemi8517@gmail.com</a>
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

                     <a href="tel:+989120738517" class="contact-link">+98 912 073 8517</a>
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

                     <address>Tehran, Iran</address>
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
                  <a href="https://join.skype.com/invite/OFbuK3yq9qva" class="social-link">
                     <SiSkype />
                  </a>
               </li>

            </ul>

         </div>

      </aside>
   )
}
