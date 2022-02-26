import React from "react";
import "../styles.css";
import Sidebar from "../Sidebar/Sidebar";

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
          <div className="social-icons"></div>
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
    </div>
  );
}
