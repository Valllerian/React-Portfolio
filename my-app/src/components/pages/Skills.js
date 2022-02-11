import "./styles.css";

const Skills = ({}) => {
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
      ref: "devicon-visualstudio-plain",
    },
  ];
  return (
    <div className="resume-section-content">
      <h2 className="mb-5">Skills</h2>
      <div className="subheading mb-3">Languages:</div>
      <ul className="list-inline dev-icons">
        {languageIcons.map((language) => (
          <li className="list-inline-item" key={language.id}>
            <i className={language.ref}></i>
          </li>
        ))}
        ;
      </ul>
      <p>HTML5, CSS3, JavaScript;</p>
      <div className="subheading mb-3">Frameworks:</div>
      <ul className="list-inline dev-icons">
        {frameworkIcons.map((framework) => (
          <li className="list-inline-item" key={framework.id}>
            <i className={framework.ref}></i>
          </li>
        ))}
        ;
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
        ))}
        ;
      </ul>
      <p>Visual Studio;</p>
    </div>
  );
};

export default Skills;
