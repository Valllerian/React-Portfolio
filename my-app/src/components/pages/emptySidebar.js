import "./styles.css";
import Avatar from "../../assets/profile.jpg";

const EmptySidebar = () => {
 
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
  );
};

export default EmptySidebar;
