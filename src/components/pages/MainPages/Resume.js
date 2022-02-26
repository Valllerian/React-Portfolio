import React from "react";
import "../styles.css";
import EmptySidebar from "../Sidebar/emptySidebar.js";
import Skills from "./Skills.js";

export default function About() {
  return (
    <div>
      <EmptySidebar />
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
