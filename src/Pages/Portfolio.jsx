import React from 'react'
import Navbar from '../Components/Navbar'
import { useTranslation } from 'react-i18next'

export default function Portfolio() {
  const { t, i18n } = useTranslation()
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
            <div class="title-wrapper">
              <h5 class="h5">
                Admin Dashboard {t('pages.portfolio.project1.header')}
              </h5>
            </div>
            <img src="src/Components/images/Kronos.png" alt="Kronos CMS" className='project-img' />
          </li>
        </ul>
      </section>

      <br></br>

      <ul class="skills-list content-card">
        <li class="skills-item project_wrapper" >
          <div class="title-wrapper">
            <h5 class="h5">
              Admin Dashboard {t('pages.portfolio.project1.header')}
            </h5>
          </div>
          <img src="src/Components/images/corporate_website_First_Frame.png" alt="Kronos CMS" className='project-img' />
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
          <img src="src/Components/images/Apollo.png" alt="Kronos CMS" className='project-img' />
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
          <img src="src/Components/images/signup.png" alt="Kronos CMS" className='project-img' />
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
          <img src="src/Components/images/vegi.png" alt="Kronos CMS" className='project-img' />
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
          <img src="src/Components/images/shortly.png" alt="Kronos CMS" className='project-img' />
        </li>
      </ul>

    </article>
  )
}
