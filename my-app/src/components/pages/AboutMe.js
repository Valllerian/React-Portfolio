import React from 'react';
import './styles.css';

export default function Home() {
  return (
    <div>
      <section class="resume-section" id="about">
                <div class="resume-section-content">
                    <h1 class="mb-0">
                        Valerii
                        <span class="text-primary">Bihun</span>
                    </h1>
                    <div class="subheading mb-5">
                        Denver, CO 80203 · (970) 616-2052 ·
                        <a href="mailto:valeriibihun.co@gmail.com">valeriibihun.co@gmail.com</a>
                    </div>
                    <p class="lead mb-5">Hello! My name is Valerii and I enjoy creating things that live on the internet!</p>
                    <div class="social-icons">
                        <a class="social-icon" href="https://www.linkedin.com/in/valerii-bihun-8b0450217/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                        <a class="social-icon" href="https://github.com/Valllerian" target="_blank"><i class="fab fa-github"></i></a>
                        <a class="social-icon" href="https://twitter.com/VallerianCRPT" target="_blank"><i class="fab fa-twitter"></i></a>
                        <a class="social-icon" href="https://www.facebook.com/profile.php?id=100013709264704" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    </div>
                </div>
            </section>
           
            <section class="resume-section" id="interests">
                <div class="resume-section-content">
                    <h2 class="mb-5">Interests</h2>
                    <p>Apart from being a web developer, I enjoy most of my time being outdoors! I love playing tennis and hiking! Roller blading is among my new hobbies as well as piano.</p>
                    <p class="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, spend some time gaming and browsing the web. I tend to spend a large amount of my free time coding as I am still learning and developing my skills!</p>
                </div>
            </section>

            <section class="resume-section" id="education">
                <div class="resume-section-content">
                    <h2 class="mb-5">Education</h2>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">University of Denver </h3>
                            <div class="subheading mb-3">Certificate</div>
                            <div>Full Stack - Web Development </div>
                            <p>GPA: n\a</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">August 2021 - March 2021</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Kyiv National Economic University</h3>
                            <div class="subheading mb-3">Bachelors degree</div>
                            <div>International Economics </div>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">September 2014 - May 2017</span></div>
                    </div>
                    <br></br>
                    <div class="d-flex flex-column flex-md-row justify-content-between">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">College of Kyiv National Economic University</h3>
                            <div class="subheading mb-3">Associates degree</div>
                            <div>Finance and Credit </div>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">September 2011 - May 2014</span></div>
                    </div>
                </div>
            </section>

            <section class="resume-section" id="skills">
                <div class="resume-section-content">
                    <h2 class="mb-5">Skills</h2>
                    <div class="subheading mb-3">Languages:</div>
                    <ul class="list-inline dev-icons">
                        <li class="list-inline-item"><i class="fab fa-html5"></i></li>
                        <li class="list-inline-item"><i class="fab fa-css3-alt"></i></li>
                        <li class="list-inline-item"><i class="devicon-javascript-plain"></i></li>
                    </ul>
                    <p>HTML5, CSS3, JavaScript;</p>
                    <div class="subheading mb-3">Frameworks:</div>
                    <ul class="list-inline dev-icons">
                        <li class="list-inline-item"><i class="devicon-jquery-plain"></i></li>
                        <li class="list-inline-item"><i class="devicon-express-original"></i></li>
                        <li class="list-inline-item"><i class="fab fa-react"></i></li>
                        <li class="list-inline-item"><i class="fab fa-node-js"></i></li>
                        <li class="list-inline-item"><i class="fab fa-wordpress"></i></li>
                        <li class="list-inline-item"><i class="fab fa-npm"></i></li>
                        <li class="list-inline-item"><i class="devicon-git-plain"></i></li>
                        <li class="list-inline-item"><i class="devicon-bootstrap-plain"></i></li>
                        <li class="list-inline-item"><i class="devicon-mysql-plain"></i></li>
                        <li class="list-inline-item"><i class="devicon-sequelize-plain"></i></li>
                        <li class="list-inline-item"><i class="devicon-handlebars-plain"></i></li>
                    </ul>
                    <p>jQuery, Express, React, Node, Wordpress, NPM, Bootstrap, MySQL, Sequelize, Handlebars;</p>
                    <div class="subheading mb-3">Applications:</div>
                    <ul class="list-inline dev-icons">
                        <li class="list-inline-item"><i class="devicon-visualstudio-plain"></i>
                        </li>
                    </ul>
                    <p>Visual Studio;</p>
                    </div>
            </section>
    </div>
  );
}
