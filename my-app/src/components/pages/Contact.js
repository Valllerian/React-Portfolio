import React from 'react';
import './styles.css';
import Avatar from '../../assets/profile.jpg'

export default function Contact() {
  return (
    
    <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">Valerii Bihun</span>
                <span className="d-none d-lg-block"><img class="img-fluid img-profile rounded-circle mx-auto mb-2" src= { Avatar} alt="..." /></span>
            </a>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav">
                   
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="./src/assets/ValeriiBihunResume.pdf">Get my Resume!</a></li>
                </ul>
            </div>
  
        </nav>


      <section className="resume-section" id="awards">
                <div className="resume-section-content">
                    <h2 className="mb-5">Contact Me:</h2>
                    <p>Although I’m just starting my coding journey, my inbox is always open for new opportunities. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
                    <p>Reach me at: <a href="mailto:valeriibihun.co@gmail.com">valeriibihun.co@gmail.com</a> </p>
                    <div className="social-icons">
                        <a className="social-icon" href="https://www.linkedin.com/in/valerii-bihun-8b0450217/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                        <a className="social-icon" href="https://github.com/Valllerian" target="_blank"><i class="fab fa-github"></i></a>
                        <a className="social-icon" href="https://twitter.com/VallerianCRPT" target="_blank"><i class="fab fa-twitter"></i></a>
                        <a className="social-icon" href="https://www.facebook.com/profile.php?id=100013709264704" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    </div>
                </div>
            </section>
    </div>
  );
}
