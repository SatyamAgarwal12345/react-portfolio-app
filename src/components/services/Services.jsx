import React from "react";
import "./services.css";
import { AiFillCheckCircle } from "react-icons/ai";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiFillCheckCircle className="service__list-icon" />
              <p>User Research and Analysis</p>
            </li>
            <li>
              <AiFillCheckCircle className="service__list-icon" />
              <p>Information Architecture</p>
            </li>

            <li>
              <AiFillCheckCircle className="service__list-icon" />
              <p>Visual Design</p>
            </li>
            <li>
              <AiFillCheckCircle className="service__list-icon" />
              <p>Responsive Design</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Front-End</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiFillCheckCircle className="service__list-icon" />
              <p>React Component Development</p>
            </li>
            <li>
              <AiFillCheckCircle className="service__list-icon" />
              <p>Single Page Application Development</p>
            </li>
            <li>
              <AiFillCheckCircle className="service__list-icon" />
              <p>State Management with Redux</p>
            </li>
            <li>
              <AiFillCheckCircle className="service__list-icon" />
              <p>Component Styling</p>
            </li>
            <li>
              <AiFillCheckCircle className="service__list-icon" />
              <p>Form Handling and Validation</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Software Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiFillCheckCircle className="service__list-icon" />
              <p>CI/CD</p>
            </li>
            <li>
              <AiFillCheckCircle className="service__list-icon" />
              <p>Monitoring and Logging</p>
            </li>
            <li>
              <AiFillCheckCircle className="service__list-icon" />
              <p>Automated Testing and QA</p>
            </li>
            <li>
              <AiFillCheckCircle className="service__list-icon" />
              <p>SharePoint Development</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
