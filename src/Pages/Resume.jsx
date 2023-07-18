import React from 'react'
import Navbar from '../Components/Navbar'
import { MdWorkOutline } from "react-icons/md"
import { HiOutlineAcademicCap } from "react-icons/hi"

export default function Resume() {
  return (
    <article class="resume active" data-page="resume">

      <Navbar />

      <header>
        <h2 class="h2 article-title">Resume</h2>
      </header>


      <section class="timeline">

        <div class="title-wrapper">
          <div class="icon-box">
            <MdWorkOutline />
          </div>

          <h3 class="h3">Experience</h3>
        </div>

        <ol class="timeline-list">

          <li class="timeline-item">

            <h4 class="h4 timeline-item-title">Frontend Developer</h4>

            <span>July 2020 — Present</span>
            <span>Raintech International Holding / Full-time / In-site</span>

            <p class="timeline-text">
              This Company is related to Insurance Technologies (Insurtech) which offer CMS to Insurance firms and agancies.
              In this position, I cooperate with my team to create efficient and user-friendly admin panels to give an incredible
              experience to our customer and help them manage their tasks and clients as perfect as possible.
              Beside that, we develope services for clients to buy insurance for their belongings, like cars, cellphones, laptops,
              and other electronic devices, independently and directly using our applications.
            </p>

            <h4 class="h4 timeline-item-title">Main responsibilities: </h4>

            <p class="timeline-text">
              - Develop, maintain, and improve current frontend.
            </p>
            <p class="timeline-text">
              - Cooperate with other team members such as backend developer, designer and product manager to smooth the fllow of production.
            </p>
            <p class="timeline-text">
              - Develop new Content Management Systems (CMS).
            </p>
          </li>

          <li class="timeline-item">

            <h4 class="h4 timeline-item-title">Frontend Developer</h4>

            <span>September 2019 - present  </span>
            <span>Freelancing / Remote </span>

            <p class="timeline-text">
              As a freelance developer, I have a great chance to make some hands-on experience in different projects such as educational website, onlineshops and e-commerce projects.
              In this role, I have learnt a lot and expand my knowledge not only in technical fields but in communicational skills, and gained a deep underestanding about marketing and financialization.
              More than that, I have become a professional time-management.
            </p>
            <h4 class="h4 timeline-item-title">Main responsibilities: </h4>

            <p class="timeline-text">
              - Get different tasks done for different clients and make them to have a better experience of their frontend.
            </p>
            <p class="timeline-text">
              - Cooperate some development teams and be reponsibble for parts of the projects as well as refactore source codes and debug.
            </p>
          </li>

        </ol>

      </section>

      <section class="timeline">

        <div class="title-wrapper">
          <div class="icon-box">
            <HiOutlineAcademicCap />
          </div>

          <h3 class="h3">Education</h3>
        </div>

        <ol class="timeline-list">

          <li class="timeline-item">

            <h4 class="h4 timeline-item-title"> Islamic Azad University </h4>

            <span>2014 — 2015</span>

            <p class="timeline-text">
              I studied B.S. Psychology for 2 semesters but then I have found out that have no interest in this major. So, I decided to leave the university and explore the life to find my passion.
              That was the best desicion in my life, because the sense of happiness that I feel in my professional life comes from this.
            </p>

          </li>

          <li class="timeline-item">

            <h4 class="h4 timeline-item-title">Mohadese high school</h4>

            <span>2010 — 2014</span>

            <p class="timeline-text">
              I have spent 4 successful years in high school and graduated with great grades.
              In fact, the school that I have attebded is not a regular school. This means that students
              must pass an enterance exam in order to get permission to study at this high school.
            </p>

          </li>

        </ol>

      </section>

      <section class="skill">


        <h3 class="h3 skills-title">
          My skills
        </h3>

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
