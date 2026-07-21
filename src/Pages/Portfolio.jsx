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
        {Object.values(projects).map((project) => (
          <ul key={project.title} className="skills-list content-card">
            <li className="skills-item project_wrapper">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
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
              </a>
            </li>
          </ul>

        ))}
      </section>
    </article>
  );
}