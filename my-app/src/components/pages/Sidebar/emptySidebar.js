import "../styles.css";
import Avatar from "../../../assets/profile.jpg";
import Resume from "../../../assets/ValeriiBihunResume.pdf";

const EmptySidebar = () => {
  const sidebarOptions = [
    {
      id: 1,
      title: "Education",
      href: "#education",
    },
    {
      id: 2,
      title: "Skills",
      href: "#skills",
    },
    {
      id: 3,
      title: "Get my Resume!",
      href: Resume,
    }
  
  ];
 
  return (
    <nav
      className=" navbar navbar-expand-lg navbar-dark  bg-primary fixed-top"
      id="sideNav"
    >
      <a className="navbar-brand js-scroll-trigger" href="#about">
        <span className="d-block d-lg-none">Valerii Bihun</span>
        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src={Avatar}
            alt="..."
          />
        </span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav">
      {sidebarOptions.map((sidebarLine) => (
            <li className="nav-item" key={sidebarLine.id}>
              <a className="nav-link js-scroll-trigger" href={sidebarLine.href}>
                {sidebarLine.title}
              </a>
            </li>
          ))};
            
          </ul>
      </div>
    </nav>
  );
};

export default EmptySidebar;
