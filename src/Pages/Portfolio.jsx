import Navbar from "../Components/Navbar";
import { useTranslation } from "react-i18next";

export default function Portfolio() {
  const { t } = useTranslation();

  const projects = t("pages.portfolio.projects", {
    returnObjects: true,
  });

  return (
    <article className="portfolio active" data-page="portfolio">
      <Navbar />

      <header>
        <h2 className="h2 article-title">
          {t("pages.header.portfolio")}
        </h2>
        <div className="article-title-after"></div>
      </header>

      <section className="portfolio">
        <section className="case-study">
          <p className="eyebrow">{t('pages.portfolio.caseStudy.eyebrow')}</p>
          <h3 className="h3">{t('pages.portfolio.caseStudy.title')}</h3>
          <p>{t('pages.portfolio.caseStudy.description')}</p>
          <div className="case-study-grid">
            <div><strong>{t('pages.portfolio.caseStudy.grid.ownership.label')}</strong><span>{t('pages.portfolio.caseStudy.grid.ownership.value')}</span></div>
            <div><strong>{t('pages.portfolio.caseStudy.grid.reliability.label')}</strong><span>{t('pages.portfolio.caseStudy.grid.reliability.value')}</span></div>
            <div><strong>{t('pages.portfolio.caseStudy.grid.reach.label')}</strong><span>{t('pages.portfolio.caseStudy.grid.reach.value')}</span></div>
          </div>
          <a className="button button-primary" href="https://mypanelapp.ir" target="_blank" rel="noopener noreferrer">{t('pages.portfolio.caseStudy.cta')}</a>
        </section>

        <h3 className="h3 projects-heading">{t("pages.portfolio.selectedProjects")}</h3>
        {Object.values(projects).map((project) => (
          <ul key={project.title} className="skills-list content-card">
            <li className="skills-item project_wrapper">
              <div>
                <div className="title-wrapper">
                  <h5 className="h5">{project.title}</h5>
                </div>

                <img
                  src={project.image}
                  alt={project.alt}
                  className="project-img"
                />

                <div className="project-details">
                  <p className="project-description-title">
                    {t("pages.portfolio.labels.details_title")}
                  </p>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <br />

                  <p className="project-description-title">
                    {t("pages.portfolio.labels.features_title")}
                  </p>

                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>- {feature}</li>
                    ))}
                  </ul>

                  <br />

                  <p className="project-tech-stack">
                    {t("pages.portfolio.labels.tech_title")}
                  </p>

                  <ul>
                    {project.tech.map((item, index) => (
                      <li key={index}>- {item}</li>
                    ))}
                  </ul>
                </div>
                <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
                  Visit live project <span aria-hidden="true">↗</span>
                </a>
              </div>
            </li>
          </ul>

        ))}
      </section>
    </article>
  );
}
