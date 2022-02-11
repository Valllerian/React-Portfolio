import React from "react";
import "./styles.css";
import Avatar from "../../assets/profile.jpg";
import Project from "./Project.js";
import { projects } from "./projects.js";

export default function Portfolio() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">Valerii Bihun</span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={Avatar}
              alt="..."
            />
          </span>
        </a>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link js-scroll-trigger"
                href="./src/assets/ValeriiBihunResume.pdf"
              >
                Get my Resume!
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section className="resume-section" id="experience">
        <div className="resume-section-content">
          <h2 className="mb-5">Projects</h2>
          {projects.map((project) => (
            <Project
              key={project.id}
              title={project.title}
              tech={project.tech}
              description={project.description}
              deployedApp={project.deployedApp}
              gitHub={project.gitHub}
              img={project.img}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
