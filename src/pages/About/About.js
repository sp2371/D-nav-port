import React from "react";
import "./about.css";
const About = () => {
  return (
    <div className="about-container">
      <div className="card">
        <img
          src="data:image/jpeg;base64,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"
          alt="avatar"
        />
        <h1>Swayam Prakash</h1>
        <p>
          I’m passionate about crafting beautiful, responsive, and user-friendly
          web experiences. With a keen eye for detail and a love for clean,
          elegant design, I strive to bring ideas to life through code.
        </p>
      </div>
      <div>
        <div className="download-resume">
          <ion-icon name="download-outline"></ion-icon>
          resume
        </div>
        <div className="picons">
          <a  target='_blank' rel='noreferrer' href='https://github.com/sp2371'>
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <a  target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/swayamprakash-busam-87a618216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </div>


        <div className="scroll">
          <div>
            <span>HTML</span>
            <span>CSS</span>
            <span>JS</span>
            <span>REACT</span>
            <span>SCSS</span>
            <span>GIT</span>
          </div>
          <div>
            <span>HTML</span>
            <span>CSS</span>
            <span>JS</span>
            <span>REACT</span>
            <span>SCSS</span>
            <span>GIT</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;