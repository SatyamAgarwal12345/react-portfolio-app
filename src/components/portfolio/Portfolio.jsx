import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/port1.png";
import IMG2 from "../../assets/port2.png";
import IMG3 from "../../assets/port3.png";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfoloi</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item ">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Portfolio Website</h3>
          <div className="portfolio__item-cta">
            <a href="" className="btn">
              GitHub
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item ">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>To-Do-List</h3>
          <div className="portfolio__item-cta">
            <a href="" className="btn">
              GitHub
            </a>
            <a href="https://github.com/SatyamAgarwal12345/React-to-do-list-App" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item ">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Notes-App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/SatyamAgarwal12345/react-notes-app"  target="_blank" className="btn">
              GitHub
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        {/* <article className="portfolio__item ">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="" className="btn">
              GitHub
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item ">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="" className="btn">
              GitHub
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item ">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="" className="btn">
              GitHub
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article> */}
      </div>
    </section>
  );
};

export default Portfolio;
