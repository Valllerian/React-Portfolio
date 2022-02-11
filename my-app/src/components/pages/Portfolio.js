import React from 'react';
import './styles.css';
import Avatar from '../../assets/profile.jpg'


export default function Blog() {
  return (
    <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">Valerii Bihun</span>
                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src= { Avatar} alt="..." /></span>
            </a>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav">
                   
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="./src/assets/ValeriiBihunResume.pdf">Get my Resume!</a></li>
                </ul>
            </div>
  
        </nav>

            <section className="resume-section" id="experience">
                <div className="resume-section-content">
                    <h2 className="mb-5">Projects</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Weather Dashboard</h3>
                            <div className="subheading mb-3">API, Javascript, HTML, CSS.</div>
                            <p>This is a a simple weather application that allows a user to find out the weather forecast in the city! This app runs in the browser and features dynamically updated HTML and CSS powered by JavaScript code.</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary"> <a href="https://valllerian.github.io/Weather-Dashboard/" target="_blank">Deployed application </a></span></div>
                        <div className="flex-shrink-0"><span className="text-primary"> | <a href="https://github.com/Valllerian/Weather-Dashboard" target="_blank"> GitHub Repo</a></span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Note Taker</h3>
                            <div className="subheading mb-3">Javascript, HTML, Express.js</div>
                            <p>A note taker app that lets the user save\edit noted in a to-do list. This application uses an Express.js back end and will save and retrieve note data from a JSON file.</p>
                        </div>
                       
                        <div className="flex-shrink-0"><span className="text-primary"> |   <a href="https://github.com/Valllerian/Note-Taker-App" target="_blank"> GitHub Repo</a></span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Planner project</h3>
                            <div className="subheading mb-3">Javascript, HTML, CSS.</div>
                            <p>This is a a simple calendar application that allows a user to save events for each hour of the day.</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary"> <a href="https://valllerian.github.io/Planner-project/" target="_blank">Deployed application</a></span></div>
                       <div className="flex-shrink-0"><span className="text-primary"> |  <a href="https://github.com/Valllerian/Planner-project" target="_blank"> GitHub Repo</a></span></div>
                    </div>

                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Team Profile Generator</h3>
                            <div className="subheading mb-3">NodeJS, Javascript, HTML</div>
                            <p>Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.</p>
                        </div>
                       <div className="flex-shrink-0"><span className="text-primary"> |  <a href="https://github.com/Valllerian/Team-Profile-Generator" target="_blank"> GitHub Repo</a></span></div>
                    </div>
                    <br></br>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">E-Commerce Back End</h3>
                            <div className="subheading mb-3">NodeJS, Javascript, Insomnia, Express.js, MySQL, Sequelize.</div>
                            <p>This is a back end for an e-commerce site built by modifying starter code. I configured a working Express.js API to use Sequelize to interact with a MySQL database.
                            </p>
                        </div>
                       <div className="flex-shrink-0"><span class="text-primary"> |  <a href="https://github.com/Valllerian/E-Commerce-Back-End" target="_blank"> GitHub Repo</a></span></div>
                    </div>
                  <br></br>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                     <div className="flex-grow-1">
                         <h3 className="mb-0">Gentle Tilly - NHL game search system.</h3>
                         <div className="subheading mb-3">NodeJS, Javascript, Heroku, Express.js, MySQL, Sequelize, API</div>
                         <p>Gentle Tilly is a place where a user can go to find schedules and chat about games. Along with showing users where they can go to stream upcoming games. There is also a section where users can learn more about hockey lingo such as the word tilly.
                         </p>
                     </div>
                     <div className="flex-shrink-0"><span className="text-primary"> <a href="https://salty-anchorage-87507.herokuapp.com/" target="_blank">Deployed application </a></span></div>
                    <div className="flex-shrink-0"><span className="text-primary"> |  <a href="https://github.com/Valllerian/Gentle-Tilly" target="_blank"> GitHub Repo</a></span></div>
                    </div>

                </div>
                
                
            </section>
    </div>
  );
}
