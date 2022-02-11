import React from 'react';
import './styles.css';
import Avatar from '../../assets/profile.jpg'

export default function Home() {
  return (
    <div>
 
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#about">
                <span className="d-block d-lg-none">Valerii Bihun</span>
                <span className="d-none d-lg-block"><img class="img-fluid img-profile rounded-circle mx-auto mb-2" src= { Avatar} alt="..." /></span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav">
                    
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                    
                </ul>
            </div>
        </nav>


      <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        Valerii
                        <span className="text-primary">Bihun</span>
                    </h1>
                    <div className="subheading mb-5">
                        Denver, CO 80203 · (970) 616-2052 ·
                        <a href="mailto:valeriibihun.co@gmail.com">valeriibihun.co@gmail.com</a>
                    </div>
                    <p className="lead mb-5">Hello! My name is Valerii and I enjoy creating things that live on the internet!</p>
                    <div className="social-icons">
                        <a className="social-icon" href="https://www.linkedin.com/in/valerii-bihun-8b0450217/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                        <a className="social-icon" href="https://github.com/Valllerian" target="_blank"><i class="fab fa-github"></i></a>
                        <a className="social-icon" href="https://twitter.com/VallerianCRPT" target="_blank"><i class="fab fa-twitter"></i></a>
                        <a className="social-icon" href="https://www.facebook.com/profile.php?id=100013709264704" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    </div>
                </div>
            </section>

            <hr className="m-0" />

            <section className="resume-section" id="interests">
                <div className="resume-section-content">
                    <h2 className="mb-5">Interests</h2>
                    <p>Apart from being a web developer, I enjoy most of my time being outdoors! I love playing tennis and hiking! Roller blading is among my new hobbies as well as piano.</p>
                    <p className="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, spend some time gaming and browsing the web. I tend to spend a large amount of my free time coding as I am still learning and developing my skills!</p>
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
                        <div className="flex-shrink-0"><span className="text-primary">August 2021 - March 2021</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Kyiv National Economic University</h3>
                            <div className="subheading mb-3">Bachelors degree</div>
                            <div>International Economics </div>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">September 2014 - May 2017</span></div>
                    </div>
                    <br></br>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">College of Kyiv National Economic University</h3>
                            <div className="subheading mb-3">Associates degree</div>
                            <div>Finance and Credit </div>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">September 2011 - May 2014</span></div>
                    </div>
                </div>
            </section>

            <hr className="m-0" />

            <section className="resume-section" id="skills">
                <div className="resume-section-content">
                    <h2 className="mb-5">Skills</h2>
                    <div className="subheading mb-3">Languages:</div>
                    <ul className="list-inline dev-icons">
                        <li className="list-inline-item"><i className="fab fa-html5"></i></li>
                        <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
                        <li className="list-inline-item"><i className="devicon-javascript-plain"></i></li>
                    </ul>
                    <p>HTML5, CSS3, JavaScript;</p>
                    <div class="subheading mb-3">Frameworks:</div>
                    <ul class="list-inline dev-icons">
                        <li className="list-inline-item"><i className="devicon-jquery-plain"></i></li>
                        <li className="list-inline-item"><i className="devicon-express-original"></i></li>
                        <li className="list-inline-item"><i className="fab fa-react"></i></li>
                        <li className="list-inline-item"><i className="fab fa-node-js"></i></li>
                        <li className="list-inline-item"><i className="fab fa-wordpress"></i></li>
                        <li className="list-inline-item"><i className="fab fa-npm"></i></li>
                        <li className="list-inline-item"><i className="devicon-git-plain"></i></li>
                        <li className="list-inline-item"><i className="devicon-bootstrap-plain"></i></li>
                        <li className="list-inline-item"><i className="devicon-mysql-plain"></i></li>
                        <li className="list-inline-item"><i className="devicon-sequelize-plain"></i></li>
                        <li className="list-inline-item"><i className="devicon-handlebars-plain"></i></li>
                    </ul>
                    <p>jQuery, Express, React, Node, Wordpress, NPM, Bootstrap, MySQL, Sequelize, Handlebars;</p>
                    <div className="subheading mb-3">Applications:</div>
                    <ul className="list-inline dev-icons">
                        <li className="list-inline-item"><i className="devicon-visualstudio-plain"></i>
                        </li>
                    </ul>
                    <p>Visual Studio;</p>
                    </div>
            </section>
    </div>
  );
}
