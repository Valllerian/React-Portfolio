import React from "react";
import "./styles.css";
import Project from "./Project.js";
import EmptySidebar from "./emptySidebar.js";
import { projects } from "./projects.js";



export default function Portfolio() {
  return (
    <div>
       <EmptySidebar />
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
