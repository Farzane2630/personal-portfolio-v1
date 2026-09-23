import { useTranslation } from "react-i18next";
import { TbExternalLink, TbSparkles } from "react-icons/tb";

export default function Portfolio() {
  const { t } = useTranslation();

  const projects = t("pages.portfolio.projects", {
    returnObjects: true,
  });

  const projectList = (projects && typeof projects === "object" && !Array.isArray(projects))
    ? Object.values(projects)
    : [];

  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">
          {t("pages.header.portfolio")}
        </h2>
        <div className="article-title-after"></div>
      </header>

      <div className="portfolio-content">
        {/* Case Study Section */}
        <section className="case-study content-card">
          <div className="case-study-badge">
            <TbSparkles className="badge-icon" />
            <span>{t("pages.portfolio.caseStudy.eyebrow")}</span>
          </div>

          <h3 className="h3 case-study-title">{t("pages.portfolio.caseStudy.title")}</h3>
          <p className="case-study-desc">{t("pages.portfolio.caseStudy.description")}</p>

          <div className="case-study-grid">
            <div className="case-grid-item">
              <strong>{t("pages.portfolio.caseStudy.grid.ownership.label")}</strong>
              <span>{t("pages.portfolio.caseStudy.grid.ownership.value")}</span>
            </div>
            <div className="case-grid-item">
              <strong>{t("pages.portfolio.caseStudy.grid.reliability.label")}</strong>
              <span>{t("pages.portfolio.caseStudy.grid.reliability.value")}</span>
            </div>
            <div className="case-grid-item">
              <strong>{t("pages.portfolio.caseStudy.grid.reach.label")}</strong>
              <span>{t("pages.portfolio.caseStudy.grid.reach.value")}</span>
            </div>
          </div>

          <a
            className="button button-primary"
            href="https://mypanelapp.ir"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{t("pages.portfolio.caseStudy.cta")}</span>
            <TbExternalLink className="btn-icon" />
          </a>
        </section>

        {/* Selected Projects */}
        <section className="projects-section">
          <h3 className="h3 projects-heading">{t("pages.portfolio.selectedProjects")}</h3>

          <div className="project-grid">
            {projectList.map((project) => (
              <div key={project.title} className="project-card content-card">
                <div className="project-header">
                  <h4 className="h4 project-card-title">{project.title}</h4>
                </div>

                <div className="project-img-wrapper">
                  <img
                    src={project.image}
                    alt={project.alt || project.title}
                    className="project-img"
                    loading="lazy"
                  />
                </div>

                <div className="project-details">
                  <p className="project-description">
                    {project.description}
                  </p>

                  {Array.isArray(project.features) && project.features.length > 0 && (
                    <div className="project-info-block">
                      <h5 className="project-subtitle">
                        {t("pages.portfolio.labels.features_title")}
                      </h5>
                      <ul className="project-features-list">
                        {project.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {Array.isArray(project.tech) && project.tech.length > 0 && (
                    <div className="project-info-block">
                      <h5 className="project-subtitle">
                        {t("pages.portfolio.labels.tech_title")}
                      </h5>
                      <div className="project-tech-tags">
                        {project.tech.map((item, index) => (
                          <span key={index} className="tech-tag">{item}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="project-footer">
                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{t("pages.portfolio.labels.visit_project")}</span>
                    <TbExternalLink className="project-link-icon" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
