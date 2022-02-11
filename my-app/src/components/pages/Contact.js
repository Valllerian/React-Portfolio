import React from "react";
import "./styles.css";
import SocialLink from "./SocialLinks";
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
         <SocialLink/>
          </div>
        </div>
      </section>
    </div>
  );
}
