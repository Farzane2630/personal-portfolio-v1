import Navbar from '../Components/Navbar'
import { MdWorkOutline } from "react-icons/md"
import { HiOutlineAcademicCap } from "react-icons/hi"
import { LiaToolsSolid } from "react-icons/lia"
import { useTranslation } from 'react-i18next'

export default function Resume() {
  const { t } = useTranslation()
  return (
    <article className="resume active" data-page="resume">

      <Navbar />

      <header>
        <h2 className="h2 article-title">
          {t('pages.header.resume')}
        </h2>
        <div className="article-title-after"></div>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <MdWorkOutline />
          </div>
          <h3 className="h3">
            {t('pages.resume.ex.title')}
          </h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              {t('pages.resume.ex.job_2.position')}
            </h4>
            <span>
              {t('pages.resume.ex.job_2.date')}
            </span>
            <span>
              {t('pages.resume.ex.job_2.details')}
            </span>
            <p className="timeline-text">
              {t('pages.resume.ex.job_2.desc')}
            </p>
            <br />
            <h4 className="h4 timeline-item-title">
              {t('pages.resume.ex.sub_title')}
            </h4>
            <p className="timeline-text">
              {t('pages.resume.ex.job_2.res.1')}
            </p>
            <p className="timeline-text">
              {t('pages.resume.ex.job_2.res.2')}
            </p>
            <p className="timeline-text">
              {t('pages.resume.ex.job_2.res.3')}
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              {t('pages.resume.ex.job_1.position')}
            </h4>
            <span>
              {t('pages.resume.ex.job_1.date')}
            </span>
            <span>
              {t('pages.resume.ex.job_1.details')}
            </span>
            <p className="timeline-text">
              {t('pages.resume.ex.job_1.desc')}
            </p>
            <br />
            <h4 className="h4 timeline-item-title">
              {t('pages.resume.ex.sub_title')}
            </h4>
            <p className="timeline-text">
              {t('pages.resume.ex.job_1.res.1')}
            </p>
            <p className="timeline-text">
              {t('pages.resume.ex.job_1.res.2')}
            </p>
            <p className="timeline-text">
              {t('pages.resume.ex.job_1.res.3')}
            </p>
          </li>

        </ol>

      </section>

      <section className="timeline">

        <div className="title-wrapper">
          <div className="icon-box">
            <HiOutlineAcademicCap />
          </div>

          <h3 className="h3">
            {t('pages.resume.educ.title')}
          </h3>
        </div>

        <ol className="timeline-list">

          <li className="timeline-item">

            <h4 className="h4 timeline-item-title">
              {t('pages.resume.educ.edu_0.location')}
            </h4>

            <span>
              {t('pages.resume.educ.edu_0.date')}
            </span>

            <p className="timeline-text">
              {t('pages.resume.educ.edu_0.desc')}
            </p>

          </li>

          <li className="timeline-item">

            <h4 className="h4 timeline-item-title">
              {t('pages.resume.educ.edu_1.location')}
            </h4>

            <span>
              {t('pages.resume.educ.edu_1.date')}
            </span>

            <p className="timeline-text">
              {t('pages.resume.educ.edu_1.desc')}
            </p>

          </li>

          <li className="timeline-item">

            <h4 className="h4 timeline-item-title">
              {t('pages.resume.educ.edu_2.location')}
            </h4>

            <span>
              {t('pages.resume.educ.edu_2.date')}
            </span>

            <p className="timeline-text">
              {t('pages.resume.educ.edu_2.desc')}
            </p>

          </li>

        </ol>

      </section>

      <br></br>

      <section className="skill">


        <div className="title-wrapper">
          <div className="icon-box">
            <LiaToolsSolid />
          </div>

          <h3 className="h3">
            {t('pages.resume.tech_skills.title')}
          </h3>
        </div>

        <ul className="skills-list content-card">

          <li className="skills-item">

            <div className="title-wrapper">
              <h5 className="h5">HTML  / CSS  / Javascript  / React / Typescript</h5>
              {/* <data value="85">85%</data> */}
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "85%" }}></div>
            </div>

          </li>

          <li className="skills-item">

            <div className="title-wrapper">
              <h5 className="h5"> Next.js</h5>
              {/* <data value="45">45% {''}(learning ...) </data> */}
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "55%" }}></div>
            </div>

          </li>

          <li className="skills-item">

            <div className="title-wrapper">
              <h5 className="h5">node.js / MongoDB / MySQL / Restfull APIs / Ajax</h5>
              {/* <data value="80">80%</data> */}
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "70%" }}></div>
            </div>

          </li>

          <li className="skills-item">

            <div className="title-wrapper">
              <h5 className="h5">Bootstrap / MaterialUI / Tailwindcss</h5>
              {/* <data value="90">90%</data> */}
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "85%" }}></div>
            </div>

          </li>

          <li className="skills-item">

            <div className="title-wrapper">
              <h5 className="h5">Vite / Webpack / Babel</h5>
              {/* <data value="85">85%</data> */}
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "80%" }}></div>
            </div>

          </li>

          <li className="skills-item">

            <div className="title-wrapper">
              <h5 className="h5">Git / Github / Gitlab / Gitlab CI/CD </h5>
              {/* <data value="90">90%</data> */}
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "85%" }}></div>
            </div>

          </li>

          {/* <li className="skills-item">

            <div className="title-wrapper">
              <h5 className="h5">Wordpress</h5>
               <data value="70">70%</data> 
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "70%" }}></div>
            </div>

          </li> */}

          <li className="skills-item">

            <div className="title-wrapper">
              <h5 className="h5">Jest / RTL / TDD</h5>
              {/* <data value="20">20% {""} (learning ...)</data> */}
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "20%" }}></div>
            </div>

          </li>

        </ul>

      </section>

    </article>
  )
}
