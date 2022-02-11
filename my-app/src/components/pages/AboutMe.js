import React from "react";
import "./styles.css";
import Sidebar from "./Sidebar.js";

export default function Home() {
  const languageIcons = [
    {
      id: 1,
      ref: "fab fa-html5",
    },
    {
      id: 2,
      ref: "fab fa-css3-alt5",
    },
    {
      id: 3,
      ref: "devicon-javascript-plain",
    },
  ];

  const frameworkIcons = [
    {
      id: 1,
      ref: "devicon-jquery-plain",
    },
    {
      id: 2,
      ref: "devicon-express-original",
    },
    {
      id: 3,
      ref: "fab fa-react",
    },
    {
      id: 4,
      ref: "fab fa-node-js",
    },
    {
      id: 5,
      ref: "fab fa-wordpress",
    },
    {
      id: 6,
      ref: "fab fa-npm",
    },
    {
      id: 7,
      ref: "devicon-git-plain",
    },
    {
      id: 8,
      ref: "devicon-bootstrap-plain",
    },
    {
      id: 9,
      ref: "devicon-mysql-plain",
    },
    {
      id: 10,
      ref: "devicon-sequelize-plain",
    },
    {
      id: 11,
      ref: "devicon-handlebars-plain",
    },
  ];

  const applicationIcons = [
    {
      id: 1,
      ref: "devicon-visualstudio-plain"
    }
  ];

  return (
    <div>
      <Sidebar />
      <section className="resume-section" id="about">
        <div className="resume-section-content">
          <h1 className="mb-0">
            Valerii
            <span className="text-primary">Bihun</span>
          </h1>
          <div className="subheading mb-5">
            Denver, CO 80203 · (970) 616-2052 ·
            <a href="mailto:valeriibihun.co@gmail.com">
              valeriibihun.co@gmail.com
            </a>
          </div>
          <p className="lead mb-5">
            Hello! My name is Valerii and I enjoy creating things that live on
            the internet!
          </p>
          <div className="social-icons">
            <a
              className="social-icon"
              href="https://www.linkedin.com/in/valerii-bihun-8b0450217/"
              target="_blank"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a
              className="social-icon"
              href="https://github.com/Valllerian"
              target="_blank"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              className="social-icon"
              href="https://twitter.com/VallerianCRPT"
              target="_blank"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              className="social-icon"
              href="https://www.facebook.com/profile.php?id=100013709264704"
              target="_blank"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section className="resume-section" id="interests">
        <div className="resume-section-content">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a web developer, I enjoy most of my time being
            outdoors! I love playing tennis and hiking! Roller blading is among
            my new hobbies as well as piano.
          </p>
          <p className="mb-0">
            When forced indoors, I follow a number of sci-fi and fantasy genre
            movies and television shows, spend some time gaming and browsing the
            web. I tend to spend a large amount of my free time coding as I am
            still learning and developing my skills!
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section className="resume-section" id="education">
        <div className="resume-section-content">
          <h2 className="mb-5">Education</h2>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">University of Denver </h3>
              <div className="subheading mb-3">Certificate</div>
              <div>Full Stack - Web Development </div>
              <p>GPA: n\a</p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">August 2021 - March 2021</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">
              <h3 className="mb-0">Kyiv National Economic University</h3>
              <div className="subheading mb-3">Bachelors degree</div>
              <div>International Economics </div>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">September 2014 - May 2017</span>
            </div>
          </div>
          <br></br>
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">
              <h3 className="mb-0">
                College of Kyiv National Economic University
              </h3>
              <div className="subheading mb-3">Associates degree</div>
              <div>Finance and Credit </div>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">September 2011 - May 2014</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section className="resume-section" id="skills">
        <div className="resume-section-content">
          <h2 className="mb-5">Skills</h2>
          <div className="subheading mb-3">Languages:</div>
          <ul className="list-inline dev-icons">
          {languageIcons.map((language) => (
            <li className="list-inline-item" key={language.id}>
            <i className={language.ref}></i>
          </li>
          ))};
          </ul>
          <p>HTML5, CSS3, JavaScript;</p>
          <div class="subheading mb-3">Frameworks:</div>
          <ul class="list-inline dev-icons">
          {frameworkIcons.map((framework) => (
            <li className="list-inline-item" key={framework.id}>
            <i className={framework.ref}></i>
          </li>
          ))};
          </ul>
          <p>
            jQuery, Express, React, Node, Wordpress, NPM, Bootstrap, MySQL,
            Sequelize, Handlebars;
          </p>
          <div className="subheading mb-3">Applications:</div>
          <ul className="list-inline dev-icons">
          {applicationIcons.map((application) => (
            <li className="list-inline-item" key={application.id}>
            <i className={application.ref}></i>
          </li>
          ))};
          </ul>
          <p>Visual Studio;</p>
        </div>
      </section>
    </div>
  );
}
