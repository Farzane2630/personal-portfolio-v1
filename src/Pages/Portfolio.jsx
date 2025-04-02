import React from 'react'
import Navbar from '../Components/Navbar'
import { useTranslation } from 'react-i18next'

export default function Portfolio() {
  const { t } = useTranslation()
  return (
    <article class="portfolio active" data-page="portfolio">
      <Navbar />

      <header>
        <h2 class="h2 article-title">
          {t('pages.header.portfolio')}
        </h2>
      </header>

      <section class="portfolio">

        <ul class="skills-list content-card">
          <li class="skills-item project_wrapper" >
            <a href="https://cafe-website-pi.vercel.app/" target="_blank" rel="noopener noreferrer">
              <div class="title-wrapper">
                <h5 class="h5">
                  Nextjs - Cafe website
                </h5>
              </div>
              <div className="project-details">
                <p className="project-description">
                  This is a cafe website built with Next.js, Tailwind CSS, and Framer Motion. 
                  It features a responsive design and smooth animations.
                  The website showcases the cafe's menu, location, and contact information.
                  It is designed to provide a seamless user experience across all devices.
                  The website is hosted on Vercel, ensuring fast load times and reliability.
                  The project demonstrates my skills in modern web development and design.
                    Users can reserve a table, order coffee, submit reviews, and register for the newsletter directly through the website.
                </p>
                <p className="project-tech-stack">
                  Tech Stack: Next.js, Tailwind CSS, Framer Motion
                </p>
              </div>
              <img src="/images/cafe-next-js.jpg" alt="e-commerce website" className='project-img' />
            </a>
          </li>
        </ul>

        <br></br>

        <ul class="skills-list content-card">
          <li class="skills-item project_wrapper" >
            <div class="title-wrapper">
              <h5 class="h5">
                Reactjs - Vegeefood - E-commerce website
              </h5>
            </div>
            <img src="/images/vegi.png" alt="vegeefood - ecommerce website" className='project-img' />
          </li>
        </ul>

        <br></br>

        <ul class="skills-list content-card">
          <li class="skills-item project_wrapper" >
            <div class="title-wrapper">
              <h5 class="h5">
                Marketing Agency - Corporate Website
              </h5>
            </div>
            <img src="/images/corporate_website_First_Frame.png" alt="corporate_website_First_Frame" className='project-img' />
          </li>
        </ul>

        <br></br>

        <ul class="skills-list content-card">
          <li class="skills-item project_wrapper" >
            <div class="title-wrapper">
              <h5 class="h5">
                MEAN Stack - Travel Blog
              </h5>
            </div>
            <img src="/images/travelhub.jpg" alt="Travelhub" className='project-img' />
          </li>
        </ul>

        <br></br>

        <ul class="skills-list content-card">
          <li class="skills-item project_wrapper" >
            <div class="title-wrapper">
              <h5 class="h5">
                A Service to shorten URLs
              </h5>
            </div>
            <img src="/images/shortly.png" alt="Shortly" className='project-img' />
          </li>
        </ul>

        <br></br>

        <ul class="skills-list content-card">
          <li class="skills-item project_wrapper" >
            <div class="title-wrapper">
              <h5 class="h5">
                Admin Dashboard {t('pages.portfolio.project1.header')}
              </h5>
            </div>
            <img src="/images/Kronos.png" alt="Kronos CMS" className='project-img' />
          </li>
        </ul>

        {/* <br></br>

        <ul class="skills-list content-card">
          <li class="skills-item project_wrapper" >
            <div class="title-wrapper">
              <h5 class="h5">
                Admin Dashboard {t('pages.portfolio.project1.header')}
              </h5>
            </div>
            <img src="/images/signup.png" alt="Kronos CMS" className='project-img' />
          </li>
        </ul> */}

      </section>
    </article>
  )
}
