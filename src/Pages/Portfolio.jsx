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
            <a href="https://vegeeshop-app.vercel.app/#" target="_blank" rel="noopener noreferrer">
              <div class="title-wrapper">
                <h5 class="h5">
                  React - Vegeefood - E-commerce website
                </h5>
              </div>
              <img src="/images/vegi.png" alt="vegeefood - ecommerce website" className='project-img' />

              <div className="project-details">

                <p className="project-description-title">
                  Project Details:
                </p>
                <p className="project-description">
                  This is an e-commerce website to purchase groceries online build with Reactjs.
                  I have used json-server as database and deployed my backend on Glitch.
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
                  - checkout and finalizing Purchased Products
                </p>
                <p className="project-tech-stack">
                  #Main Tech Stack:
                  <br />
                  - Reactjs, Redux, Redux Toolkit, Webpack, MUI, SASS, Swiperjs, React Hook Form,
                </p>
              </div>
            </a>
          </li>
        </ul>

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
            <a href="https://travelhub-git-master-farzane2630s-projects.vercel.app/" target="_blank" rel="noopener noreferrer">

              <div class="title-wrapper">
                <h5 class="h5">
                  MEAN Stack - Travel Blog
                </h5>
              </div>
              <img src="/images/travelhub.jpg" alt="Travelhub" className='project-img' />

              <div className="project-details">

                <p className="project-description-title">
                  Project Details:
                </p>
                <p className="project-description">
                  This is meanstack travel Blog that I have developed the frontend using Angular and Typescript. The backend is developed by me too, using Node.js and Express.js.
                  For database I have used MongoDB and MongoDB Atlas.
                  I have also dockerized this mean-stack app.
                  For design I have made the use of popular "Tailwindcss".
                  <br />
                  #Features
                  <br />
                  - signUp, signOut, email verification, logIn and reset password
                  <br />
                  - like and dislike articles, save articles in saves section in profile
                  <br />
                  - Edit profile and set avatar
                  <br />
                  - Writing and Publishing articles
                  <br />
                  - Leave comments, answer, like and dislike comments
                  <br />
                  - Responsive design
                </p>
                <p className="project-tech-stack">
                  #Main Tech Stack:
                  <br />
                  - Angular, nodejs, MongoDB, Expressjs, Docker, Tailwindcss
                </p>
              </div>
            </a>
          </li>
        </ul>

        <br></br>


        <br></br>

        <ul class="skills-list content-card">
          <a href='https://github.com/Farzane2630/marketing-agency' target="_blank" rel="noopener noreferrer">
            <li class="skills-item project_wrapper" >
              <div class="title-wrapper">
                <h5 class="h5">
                  Marketing Agency - Corporate Website
                </h5>
              </div>
              <img src="/images/corporate_website_First_Frame.png" alt="corporate_website_First_Frame" className='project-img' />
              <div className="project-details">
                <p className="project-description-title">
                  Project Details:
                </p>
                <p className="project-description">
                  This is a corporate website for a marketing agency.This project is a showcase of my skills in web development and design.
                  This is one of my first projects when I started lerning React, and I am so proud of the outcome.
                  * The comment section might not work properly since I have used the firebase free plan and it has some limitations.
                  <br />
                  #Features
                  <br />
                  - responsive design
                  <br />
                  - smooth animations
                  <br />
                  - comment section
                </p>
                <p className="project-tech-stack">
                  #Main Tech Stack:
                  <br />
                  - Reactjs (Class component), React Router, Boostrap, Firebase
                </p>
              </div>
            </li>
          </a>
        </ul>

        <br></br>


        <ul class="skills-list content-card">
          <li class="skills-item project_wrapper" >
            <a href='https://github.com/Farzane2630/URL-shortening' target="_blank" rel="noopener noreferrer">
              <div class="title-wrapper">
                <h5 class="h5">
                  A Service to shorten URLs
                </h5>
              </div>
              <img src="/images/shortly.png" alt="Shortly" className='project-img' />
              <div className="project-details">
                <p className="project-description-title">
                  Project Details:
                </p>
                <p className="project-description">
                  This is a service to shorten long URLs.

                  <br />
                  #Features
                  <br />
                  - Shortening long URLs
                  <br />
                  - Copying shortened URL
                  <br />
                  - Saving previous URLs
                  <br />
                  - Responsive design
                </p>
                <p className="project-tech-stack">
                  #Main Tech Stack:
                  <br />
                  - Reactjs, Redux, SASS, json-server, Formik
                </p>
              </div>
            </a>
          </li>
        </ul>

        <br></br>

      </section>
    </article>
  )
}
