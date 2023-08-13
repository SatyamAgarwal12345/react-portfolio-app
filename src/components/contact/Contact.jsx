import React from "react";
import "./contact.css";
import { MdMarkEmailRead } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdMarkEmailRead />
            <h4>Email</h4>
            <h5>satyamagarwal2023@gmail.com</h5>
            <a href="mailto:satyamagarwal2023@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsMessenger />
            <h4>Messenger</h4>
            <h5>Satyam Agarwal</h5>
            <a href="mailto:satyamagarwal2023@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp />
            <h4>9591761973</h4>
            <h5>Satyam Agarwal</h5>
            <a
              href="https://api.whatsapp.com/send?phone=919591761973&text=Hello this is the starting message"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form action="">
          <input type="text" placeholder="Your Full Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="7"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
