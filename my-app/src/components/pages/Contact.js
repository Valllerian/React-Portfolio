import React from "react";
import "./styles.css";
import Avatar from "../../assets/profile.jpg";
import EmptySidebar from "./emptySidebar";

export default function Contact() {
  return (
    <div>
   <EmptySidebar />
      <section className="resume-section" id="awards">
        <div className="resume-section-content">
          <h2 className="mb-5">Contact Me:</h2>
          <p>
            Although I’m just starting my coding journey, my inbox is always
            open for new opportunities. Whether you have a question or just want
            to say hi, I’ll try my best to get back to you!
          </p>
          <p>
            Reach me at:{" "}
            <a href="mailto:valeriibihun.co@gmail.com">
              valeriibihun.co@gmail.com
            </a>{" "}
          </p>
          <div className="social-icons">
            <a
              className="social-icon"
              href="https://www.linkedin.com/in/valerii-bihun-8b0450217/"
              target="_blank"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="social-icon"
              href="https://github.com/Valllerian"
              target="_blank"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              className="social-icon"
              href="https://twitter.com/VallerianCRPT"
              target="_blank"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="social-icon"
              href="https://www.facebook.com/profile.php?id=100013709264704"
              target="_blank"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
