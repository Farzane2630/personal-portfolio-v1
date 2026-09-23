import { TbLanguage, TbRocket, TbMailForward } from "react-icons/tb"
import { Suspense } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

function Index() {
  const { t } = useTranslation()

  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">
          {t("pages.header.about")}
        </h2>
        <div className="article-title-after"></div>
      </header>

      <section className="about-text">
        <p>
          {t("pages.about_me.desc.p1")}
        </p>
        <p>
          {t("pages.about_me.desc.p2")}
        </p>
        <p>
          {t("pages.about_me.desc.p3")}
        </p>
      </section>

      <section className="hero-actions" aria-label="Portfolio actions">
        <a
          className="button button-primary"
          href="https://mypanelapp.ir"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TbRocket className="button-icon" />
          <span>{t("pages.about_me.actions.view_saas")}</span>
        </a>
        <Link className="button button-secondary" to="/contact">
          <TbMailForward className="button-icon" />
          <span>{t("pages.about_me.actions.contact_me")}</span>
        </Link>
      </section>

      <section className="proof-points" aria-label="Professional highlights">
        <div className="proof-point-card">
          <strong className="proof-title">{t("pages.about_me.highlights.saas.label")}</strong>
          <span className="proof-subtitle">{t("pages.about_me.highlights.saas.value")}</span>
        </div>
        <div className="proof-point-card">
          <strong className="proof-title">{t("pages.about_me.highlights.tech.label")}</strong>
          <span className="proof-subtitle">{t("pages.about_me.highlights.tech.value")}</span>
        </div>
        <div className="proof-point-card">
          <strong className="proof-title">{t("pages.about_me.highlights.multilingual.label")}</strong>
          <span className="proof-subtitle">{t("pages.about_me.highlights.multilingual.value")}</span>
        </div>
      </section>

      <section className="skill">
        <div className="title-wrapper">
          <div className="icon-box">
            <TbLanguage />
          </div>
          <h3 className="h3">
            {t("pages.about_me.langs.title")}
          </h3>
        </div>

        <ul className="skills-list content-card">
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">
                {t("pages.about_me.langs.lang1")}
              </h5>
              <data value="80" className="lang-level">{t("pages.about_me.langs.c1")}</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "80%" }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">
                {t("pages.about_me.langs.lang2")}
              </h5>
              <data value="55" className="lang-level">{t("pages.about_me.langs.b2")}</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "55%" }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">
                {t("pages.about_me.langs.lang3")}
              </h5>
              <data value="100" className="lang-level">{t("pages.about_me.langs.profi")}</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "100%" }}></div>
            </div>
          </li>
        </ul>
      </section>
    </article>
  )
}

export default function WrappedApp() {
  return (
    <Suspense fallback={<div className="loading-state">...loading</div>}>
      <Index />
    </Suspense>
  )
}
