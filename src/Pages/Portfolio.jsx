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
              <img src="/images/cafe-next-js.jpg" alt="e-commerce website" className='project-img' />
              <div className="project-details">
                <p className="project-description-title">
                  Project Details:
                </p>
                <p className="project-description">
                  This is a cafe website built with Next.js.
                  It features a responsive design and smooth animations.
                  Users can reserve a table, search for drinks in searchbox, and register for the newsletter directly through the website.
                  The website showcases the cafe's menu, about page, testimonials, reservation form and contact information.
                  It is designed to provide a seamless user experience across all devices.
                  The website is hosted on Vercel, ensuring fast load times and reliability.
                  The project demonstrates my skills in modern web development and design.
                </p>
                <p className="project-tech-stack">
                  #Main Tech Stack: 
                  <br />
                  - Next.js
                </p>
              </div>
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

            <div className="project-details">
              <p className="project-description-title">
                Project Details:
              </p>
              <p className="project-description">
                This is an e-commerce website to purchase groceries online build with Reactjs.
                <br />
                #Features
                <br />
                - add/remove products into cart
                <br />
                - add/remove products into wishlist
                <br />
                - register in newsletter
                <br />
                - filter products based on categories
                <br />
                - countdown timer for best price
                <br />
                - checkout and finalize shopping
              </p>
              <p className="project-tech-stack">
                #Main Tech Stack:
                <br />
                - Reactjs, Redux, Redux Toolkit, Webpack, MUI, SASS, Swiperjs
              </p>
            </div>
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
