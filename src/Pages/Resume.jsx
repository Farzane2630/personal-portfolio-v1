import { MdWorkOutline } from "react-icons/md"
import { HiOutlineAcademicCap } from "react-icons/hi"
import { LiaToolsSolid } from "react-icons/lia"
import { useTranslation } from 'react-i18next'

export default function Resume() {
  const { t } = useTranslation()

  const job2Res = t('pages.resume.ex.job_2.res', { returnObjects: true })
  const job2ResList = (job2Res && typeof job2Res === 'object') ? Object.values(job2Res) : []

  const job1Res = t('pages.resume.ex.job_1.res', { returnObjects: true })
  const job1ResList = (job1Res && typeof job1Res === 'object') ? Object.values(job1Res) : []

  const skillsCategories = [
    {
      title: "Frontend Engineering",
      skills: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3 / SCSS", "PWA (Offline & Installable)", "Responsive Design"]
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "RESTful APIs", "Authentication (HttpOnly)", "Data Modeling"]
    },
    {
      title: "Cloud & Infrastructure",
      skills: ["Cloudflare", "Vercel", "Render", "Supabase Storage", "MongoDB Atlas", "Docker", "Git", "GitHub / GitLab CI/CD"]
    },
    {
      title: "Testing & Architecture",
      skills: ["Multi-Tenant SaaS Architecture", "Jest", "React Testing Library", "TDD Principles", "I18n / Localization (RTL & LTR)"]
    }
  ]

  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">
          {t('pages.header.resume')}
        </h2>
        <div className="article-title-after"></div>
      </header>

      {/* Experience Section */}
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
          {/* Job 2: Founder & Full-Stack Engineer */}
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              {t('pages.resume.ex.job_2.position')}
            </h4>

            <div className="timeline-meta">
              <span className="timeline-date">{t('pages.resume.ex.job_2.date')}</span>
              <span className="timeline-separator">·</span>
              <span className="timeline-details">{t('pages.resume.ex.job_2.details')}</span>
            </div>

            <p className="timeline-text">
              {t('pages.resume.ex.job_2.desc')}
            </p>

            {job2ResList.length > 0 && (
              <div className="timeline-responsibilities">
                <h5 className="timeline-sub-title">
                  {t('pages.resume.ex.sub_title')}
                </h5>
                <ul className="timeline-bullet-list">
                  {job2ResList.map((res, index) => (
                    <li key={index}>{res.replace(/^-\s*/, '')}</li>
                  ))}
                </ul>
              </div>
            )}
          </li>

          {/* Job 1: Frontend Developer */}
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              {t('pages.resume.ex.job_1.position')}
            </h4>

            <div className="timeline-meta">
              <span className="timeline-date">{t('pages.resume.ex.job_1.date')}</span>
              <span className="timeline-separator">·</span>
              <span className="timeline-details">{t('pages.resume.ex.job_1.details')}</span>
            </div>

            <p className="timeline-text">
              {t('pages.resume.ex.job_1.desc')}
            </p>

            {job1ResList.length > 0 && (
              <div className="timeline-responsibilities">
                <h5 className="timeline-sub-title">
                  {t('pages.resume.ex.sub_title')}
                </h5>
                <ul className="timeline-bullet-list">
                  {job1ResList.map((res, index) => (
                    <li key={index}>{res.replace(/^-\s*/, '')}</li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        </ol>
      </section>

      {/* Education Section */}
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
            <div className="timeline-meta">
              <span className="timeline-date">{t('pages.resume.educ.edu_0.date')}</span>
            </div>
            <p className="timeline-text">
              {t('pages.resume.educ.edu_0.desc')}
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              {t('pages.resume.educ.edu_1.location')}
            </h4>
            <div className="timeline-meta">
              <span className="timeline-date">{t('pages.resume.educ.edu_1.date')}</span>
            </div>
            <p className="timeline-text">
              {t('pages.resume.educ.edu_1.desc')}
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              {t('pages.resume.educ.edu_2.location')}
            </h4>
            <div className="timeline-meta">
              <span className="timeline-date">{t('pages.resume.educ.edu_2.date')}</span>
            </div>
            <p className="timeline-text">
              {t('pages.resume.educ.edu_2.desc')}
            </p>
          </li>
        </ol>
      </section>

      {/* Core Technologies & Skills */}
      <section className="skill">
        <div className="title-wrapper">
          <div className="icon-box">
            <LiaToolsSolid />
          </div>
          <h3 className="h3">
            {t('pages.resume.tech_skills.title')}
          </h3>
        </div>

        <div className="skills-categories-grid">
          {skillsCategories.map((category, idx) => (
            <div key={idx} className="skill-cat-card content-card">
              <h5 className="skill-cat-heading">{category.title}</h5>
              <div className="skill-cat-tags">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-tag-badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  )
}
