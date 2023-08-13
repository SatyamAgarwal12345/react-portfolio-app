import React from 'react'
import './footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>SATYAM</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/feed/" target='_blank'><AiFillLinkedin/></a>
        <a href="https://github.com/SatyamAgarwal12345" target='_blank'><AiFillGithub/></a>
        <a href=""><AiFillFacebook/></a>
      </div>
        
        <div className="footer__copyright">
          <small>&copy; SATYAM Services. All rights reserved.</small>
        </div>

    </footer>
  )
}

export default Footer