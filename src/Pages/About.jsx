import React from 'react'
import Navbar from '../Components/Navbar'
import { TbLanguage } from "react-icons/tb"

export default function Index() {
  return (
    <article class="about  active" data-page="about">
      <Navbar />
      <header>
        <h2 class="h2 article-title">About me</h2>
      </header>

      <section class="about-text">
        <p>
          I'm Passionate teach geek, working in web development and being responsible for frontend.
          I enjoy
          turning complex problems into simple, beautiful and intuitive features to make the world simpler and more enjoyable.
        </p>

        <p>
          My job is to build your website so that it is functional, responsive and user-friendly,
          in other words, become your imaginations into real-world and show to your clients in form of websites and web applications.
        </p>
        <p>
          Moreover, I have a good eye for details and guarantee that the result of my work is just like the UI design provided me.
        </p>
      </section>

      <section class="skill">

        <div class="title-wrapper">
          <div class="icon-box">
            <TbLanguage />
          </div>

          <h3 class="h3">
            Languages I speak
          </h3>
        </div>

        <ul class="skills-list content-card">

          <li class="skills-item">

            <div class="title-wrapper">
              <h5 class="h5">English</h5>
              <data value="80">80% (C1)</data>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style={{ width: "80%" }}></div>
            </div>

          </li>

          <li class="skills-item">

            <div class="title-wrapper">
              <h5 class="h5">German</h5>
              <data value="50">50% (B2)</data>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style={{ width: "50%" }}></div>
            </div>

          </li>

          <li class="skills-item">

            <div class="title-wrapper">
              <h5 class="h5">Persian</h5>
              <data value="99">99% {""}(Mother tongue)</data>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style={{ width: "99%" }}></div>
            </div>

          </li>

        </ul>

      </section>
      {/* <!--
      - service
        --> */}

      {/* <section class="service">

        <h3 class="h3 service-title">What i'm doing</h3>

        <ul class="service-list">

          <li class="service-item">

            <div class="service-icon-box">
              <img src="./assets/images/icon-design.svg
                " alt="design icon" width="40" />
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">Web design</h4>

              <p class="service-item-text">
                The most modern and high-quality design made at a professional level.
              </p>
            </div>

          </li>

          <li class="service-item">

            <div class="service-icon-box">
              <img src="./assets/images/icon-dev.svg" alt="Web development icon" width="40" />
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">Web development</h4>

              <p class="service-item-text">
                High-quality development of sites at the professional level.
              </p>
            </div>

          </li>

          <li class="service-item">

            <div class="service-icon-box">
              <img src="./assets/images/icon-app.svg" alt="mobile app icon" width="40" />
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">Mobile apps</h4>

              <p class="service-item-text">
                Professional development of applications for iOS and Android.
              </p>
            </div>

          </li>

          <li class="service-item">

            <div class="service-icon-box">
              <img src="./assets/images/icon-photo.svg" alt="camera icon" width="40" />
            </div>

            <div class="service-content-box">
              <h4 class="h4 service-item-title">Photography</h4>

              <p class="service-item-text">
                I make high-quality photos of any category at a professional level.
              </p>
            </div>

          </li>

        </ul>

      </section> */}


      {/* <!--
      - testimonials
        --> */}

      {/* <section class="testimonials">

        <h3 class="h3 testimonials-title">Testimonials</h3>

        <ul class="testimonials-list has-scrollbar">

          <li class="testimonials-item">
            <div class="content-card" data-testimonials-item>

              <figure class="testimonials-avatar-box">
                <img src="./assets/images/avatar-1.png" alt="Daniel lewis" width="60" data-testimonials-avatar />
              </figure>

              <h4 class="h4 testimonials-item-title" data-testimonials-title>Daniel lewis</h4>

              <div class="testimonials-text" data-testimonials-text>
                <p>
                  Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                  lot of experience
                  and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                  consectetur adipiscing
                  elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                </p>
              </div>

            </div>
          </li>

          <li class="testimonials-item">
            <div class="content-card" data-testimonials-item>

              <figure class="testimonials-avatar-box">
                <img src="./assets/images/avatar-2.png" alt="Jessica miller" width="60" data-testimonials-avatar />
              </figure>

              <h4 class="h4 testimonials-item-title" data-testimonials-title>Jessica miller</h4>

              <div class="testimonials-text" data-testimonials-text>
                <p>
                  Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                  lot of experience
                  and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                  consectetur adipiscing
                  elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                </p>
              </div>

            </div>
          </li>

          <li class="testimonials-item">
            <div class="content-card" data-testimonials-item>

              <figure class="testimonials-avatar-box">
                <img src="./assets/images/avatar-3.png" alt="Emily evans" width="60" data-testimonials-avatar />
              </figure>

              <h4 class="h4 testimonials-item-title" data-testimonials-title>Emily evans</h4>

              <div class="testimonials-text" data-testimonials-text>
                <p>
                  Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                  lot of experience
                  and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                  consectetur adipiscing
                  elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                </p>
              </div>

            </div>
          </li>

          <li class="testimonials-item">
            <div class="content-card" data-testimonials-item>

              <figure class="testimonials-avatar-box">
                <img src="./assets/images/avatar-4.png" alt="Henry william" width="60" data-testimonials-avatar />
              </figure>

              <h4 class="h4 testimonials-item-title" data-testimonials-title>Henry william</h4>

              <div class="testimonials-text" data-testimonials-text>
                <p>
                  Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                  lot of experience
                  and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                  consectetur adipiscing
                  elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                </p>
              </div>

            </div>
          </li>

        </ul>

      </section> */}


      {/* <!--
      - testimonials modal
        --> */}

      {/* <div class="modal-container" data-modal-container>

        <div class="overlay" data-overlay></div>

        <section class="testimonials-modal">

          <button class="modal-close-btn" data-modal-close-btn>
            <ion-icon name="close-outline"></ion-icon>
          </button>

          <div class="modal-img-wrapper">
            <figure class="modal-avatar-box">
              <img src="./assets/images/avatar-1.png" alt="Daniel lewis" width="80" data-modal-img />
            </figure>

            <img src="./assets/images/icon-quote.svg" alt="quote icon" />
          </div>

          <div class="modal-content">

            <h4 class="h3 modal-title" data-modal-title>Daniel lewis</h4>

            <time datetime="2021-06-14">14 June, 2021</time>

            <div data-modal-text>
              <p>
                Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                lot of experience
                and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                consectetur adipiscing
                elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
              </p>
            </div>

          </div>

        </section>

      </div> */}


      {/* <!--
      - clients
        --> */}

      {/* <section class="clients">

        <h3 class="h3 clients-title">Clients</h3>

        <ul class="clients-list has-scrollbar">

          <li class="clients-item">
            <a href="#">
              <img src="./assets/images/logo-1-color.png" alt="client logo" />
            </a>
          </li>

          <li class="clients-item">
            <a href="#">
              <img src="./assets/images/logo-2-color.png" alt="client logo" />
            </a>
          </li>

          <li class="clients-item">
            <a href="#">
              <img src="./assets/images/logo-3-color.png" alt="client logo" />
            </a>
          </li>

          <li class="clients-item">
            <a href="#">
              <img src="./assets/images/logo-4-color.png" alt="client logo" />
            </a>
          </li>

          <li class="clients-item">
            <a href="#">
              <img src="./assets/images/logo-5-color.png" alt="client logo" />
            </a>
          </li>

          <li class="clients-item">
            <a href="#">
              <img src="./assets/images/logo-6-color.png" alt="client logo" />
            </a>
          </li>

        </ul>

      </section> */}

    </article>
  )
}
