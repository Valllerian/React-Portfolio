import React from "react";
import "../styles.css";
import Project from "./Project.js";
import { projects } from "./projects.js";
import ProjectSidebar from "../Sidebar/ProjectSidebar.js";

export default function Portfolio() {
  return (
    <div>
      <ProjectSidebar />
      <section className="resume-section" id="experience">
        <div className="resume-section-content">
          <h2 className="mb-5">Projects</h2>
          {projects.map((project) => (
            <Project
              id={project.id}
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
