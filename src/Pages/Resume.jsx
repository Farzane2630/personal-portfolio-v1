import React from 'react'
import Navbar from '../Components/Navbar'
import { MdWorkOutline } from "react-icons/md"
import { HiOutlineAcademicCap } from "react-icons/hi"
import { LiaToolsSolid } from "react-icons/lia"
import { useTranslation } from 'react-i18next'

export default function Resume() {
  const { t, i18n } = useTranslation()
  return (
    <article class="resume active" data-page="resume">

      <Navbar />

      <header>
        <h2 class="h2 article-title">
          {t('pages.header.resume')}
        </h2>
      </header>


      <section class="timeline">

        <div class="title-wrapper">
          <div class="icon-box">
            <MdWorkOutline />
          </div>

          <h3 class="h3">
            {t('pages.resume.ex.title')}
          </h3>
        </div>

        <ol class="timeline-list">

          <li class="timeline-item">

            <h4 class="h4 timeline-item-title">
              {t('pages.resume.ex.job_1.position')}
            </h4>

            <span>
              {t('pages.resume.ex.job_1.date')}
            </span>
            <span>
              {t('pages.resume.ex.job_1.details')}
            </span>

            <p class="timeline-text">
              {t('pages.resume.ex.job_1.desc')}
            </p>
            <br />
            <h4 class="h4 timeline-item-title">
              {t('pages.resume.ex.sub_title')}
            </h4>

            <p class="timeline-text">
              {t('pages.resume.ex.job_1.res.1')}
            </p>
            <p class="timeline-text">
              {t('pages.resume.ex.job_1.res.2')}
            </p>
            <p class="timeline-text">
              {t('pages.resume.ex.job_1.res.3')}
            </p>
          </li>

          <li class="timeline-item">

            <h4 class="h4 timeline-item-title">
              {t('pages.resume.ex.job_2.position')}
            </h4>

            <span>
              {t('pages.resume.ex.job_2.date')}
            </span>
            <span>
              {t('pages.resume.ex.job_2.details')}
            </span>

            <p class="timeline-text">
              {t('pages.resume.ex.job_2.desc')}
            </p>
            <br />
            <h4 class="h4 timeline-item-title">
              {t('pages.resume.ex.sub_title')}
            </h4>

            <p class="timeline-text">
              {t('pages.resume.ex.job_2.res.1')}
            </p>
            <p class="timeline-text">
              {t('pages.resume.ex.job_2.res.2')}
            </p>
          </li>


        </ol>

      </section>

      <section class="timeline">

        <div class="title-wrapper">
          <div class="icon-box">
            <HiOutlineAcademicCap />
          </div>

          <h3 class="h3">
            {t('pages.resume.educ.title')}
          </h3>
        </div>

        <ol class="timeline-list">

          <li class="timeline-item">

            <h4 class="h4 timeline-item-title">
              {t('pages.resume.educ.edu_1.location')}
            </h4>

            <span>
              {t('pages.resume.educ.edu_1.date')}
            </span>

            <p class="timeline-text">
              {t('pages.resume.educ.edu_1.desc')}
            </p>

          </li>

          <li class="timeline-item">

            <h4 class="h4 timeline-item-title">
              {t('pages.resume.educ.edu_2.location')}
            </h4>

            <span>
              {t('pages.resume.educ.edu_2.date')}
            </span>

            <p class="timeline-text">
              {t('pages.resume.educ.edu_2.desc')}
            </p>

          </li>

        </ol>

      </section>

      <br></br>

      <section class="skill">


        <div class="title-wrapper">
          <div class="icon-box">
            <LiaToolsSolid />
          </div>

          <h3 class="h3">
            {t('pages.resume.tech_skills.title')}
          </h3>
        </div>

        <ul class="skills-list content-card">

          <li class="skills-item">

            <div class="title-wrapper">
              <h5 class="h5">HTML  / CSS  / Javascript  / React</h5>
              <data value="85">85%</data>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style={{ width: "85%" }}></div>
            </div>

          </li>

          <li class="skills-item">

            <div class="title-wrapper">
              <h5 class="h5">Typescript / Next.js</h5>
              <data value="45">45% {''}(learning ...) </data>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style={{ width: "45%" }}></div>
            </div>

          </li>

          <li class="skills-item">

            <div class="title-wrapper">
              <h5 class="h5">node.js / MongoDB / MySQL / RestAPIs / Ajax</h5>
              <data value="80">80%</data>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style={{ width: "80%" }}></div>
            </div>

          </li>

          <li class="skills-item">

            <div class="title-wrapper">
              <h5 class="h5">React-bootstrap / MaterialUI / Tailwind / NextUI / Antdesign / Storybook</h5>
              <data value="90">90%</data>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style={{ width: "90%" }}></div>
            </div>

          </li>

          <li class="skills-item">

            <div class="title-wrapper">
              <h5 class="h5">Vite / Webpack / Babel</h5>
              <data value="85">85%</data>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style={{ width: "85%" }}></div>
            </div>

          </li>

          <li class="skills-item">

            <div class="title-wrapper">
              <h5 class="h5">Git / Github / Gitlab</h5>
              <data value="90">90%</data>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style={{ width: "90%" }}></div>
            </div>

          </li>

          <li class="skills-item">

            <div class="title-wrapper">
              <h5 class="h5">Wordpress</h5>
              <data value="70">70%</data>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style={{ width: "70%" }}></div>
            </div>

          </li>
          <li class="skills-item">

            <div class="title-wrapper">
              <h5 class="h5">Jest (learning ...)</h5>
              <data value="20">20% {""} (learning ...)</data>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style={{ width: "20%" }}></div>
            </div>

          </li>

        </ul>

      </section>

    </article>
  )
}
