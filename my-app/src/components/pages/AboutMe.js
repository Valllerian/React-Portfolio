import React from "react";
import "./styles.css";
import Sidebar from "./Sidebar.js";
import Skills from "./Skills.js";
import SocialLink from "./SocialLinks";

export default function Home() {
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
          <SocialLink/>
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
        <Skills />
      </section>
    </div>
  );
}
