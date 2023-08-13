import React from "react";
import "./about.css";
import me from "../../assets/aboutme.jpeg";
import { FaAward } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={me} alt="me" className="img" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <FaUserSecret className="about__icon"/>
              <h5>Clients</h5>
              <small>10+</small>
            </article>
            <article className="about__card">
              <FaFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>30+ Complited</small>
            </article>
          </div>
          <p>
            Experienced Front-End Developer proficient in React.js, DevOps, and AWS. Streamlined software releases through CI/CD pipelines. Ensured code quality with cybersecurity measures. Developed cloud-based
            applications, including a Leave Management System and Sales Tracker. Strong in collaboration and version control using Git.
          </p>
          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
