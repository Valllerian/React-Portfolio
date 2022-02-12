import React from "react";
import "./styles.css";
import ContactSidebar from "./ContactSidebar";

// Importing State:
import { useRef, useState } from "react";

// Importing emailJS to be able to send msgs from contact form;
import emailjs from "@emailjs/browser";
import isEmail from "validator/lib/isEmail";

export default function Contact() {
 
  const formSubmit = useRef();
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  // Check states to make sure that user enter their info\msg;
  const [checkName, setNameCheck] = useState("Name");
  const [checkSubject, setSubjectCheck] = useState("Subject");
  const [checkMessage, setMessageCheck] = useState("Message");
  const [checkEmail, setEmailCheck] = useState("Email");


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    // register and emailJS is required to get this service to work => directs msgs to your email;
      .sendForm(
        "service_so66syo",
        "template_swdz7qv",
        formSubmit.current,
        "user_PdWnR2RzbfY2nW6nXqmJ3"
      )
      .then(
        (result) => {
          setDone(true);
          formSubmit.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

// Making sure user have all fields filled:
// Name:
  const nameSubmit = (e) => {
    e.preventDefault();
    !e.target.value.length
      ? setNameCheck("Enter name please!")
      : setNameCheck("Name");
  };

// Subject:
  const subjectSubmit = (e) => {
    e.preventDefault();
    !e.target.value.length
      ? setSubjectCheck("Enter subject please!")
      : setSubjectCheck("Subject");
  };

// Message:
  const submitMessage = (e) => {
    e.preventDefault();
    !e.target.value.length
      ? setMessageCheck("Enter message please!")
      : setMessageCheck("Insert Message Here");
  };

// Email:
  const submitEmail = (e) => {
    e.preventDefault();
    !e.target.value.length
      ? setEmailCheck("Enter email please!")
      : setEmailCheck("Email");
  };

// Email Validation:
  const emailValidator = (e) => {
    e.preventDefault();
    isEmail(e.target.value)
      ? setError("")
      : setError("Valid email is required!");
  };

  return (
    <div>
          <ContactSidebar />
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
          <div className="social-icons"></div>
          <div>
            <p>Or get in touch with me though that form down below! </p>
            <form ref={formSubmit} onSubmit={sendEmail}>
              <input
                type="text"
                placeholder={checkName}
                name="username"
                onBlur={nameSubmit}
                className={
                  checkName === "Enter name please!" ? "inactive" : "active"
                }
                required
              />
              <br></br>
              <br></br>
              <input
                type="text"
                placeholder={checkSubject}
                name="subject"
                onBlur={subjectSubmit}
                className={
                  checkSubject === "Enter subject please!"
                    ? "inactive"
                    : "active"
                }
                required
              />
              <br></br>
              <br></br>

              <textarea
                name="message"
                rows="5"
                placeholder={checkMessage}
                onBlur={submitMessage}
                className={
                  checkMessage === "Enter message please!"
                    ? "inactive"
                    : "active"
                }
                required
              ></textarea>

              <br></br>
              <input
                type="email"
                placeholder={checkEmail}
                name="email"
                onBlur={submitEmail}
                onChange={emailValidator}
                className={
                  checkEmail !== "Enter email please!" ? "active" : "inactive"
                }
                required
              />
              <p className="errorMsg">{error}</p>

              <button className="button-6">Submit</button>
              <p>{done && "Email sent!"}</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
