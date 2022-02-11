import "./styles.css";

const Project = ({ title, tech, description, deployedApp, gitHub, img }) => {
  return (
    <div className="project">
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">{title}</h3>
          <div className="subheading mb-3">{tech}</div>
          <p>{description}</p>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">
            {" "}
            <a href={deployedApp} target="_blank">
              Deployed application{" "}
            </a>
          </span>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">
            {" "}
            |{" "}
            <a href={gitHub} target="_blank">
              {" "}
              GitHub Repo
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Project;
