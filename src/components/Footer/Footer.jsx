import React from 'react'
import './Footer.css'
import {FaFacebook} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#home" className='footer__logo'> Valentino Lopez </a>
      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Sobre Mi</a></li>
        <li><a href="#experience">Experiencia</a></li>
          <li><a href="#portafolio">Portafolio</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.facebook.com/valen.lopez.7127146" target={"_Blank"}>  <FaFacebook /></a>
        <a href="https://www.instagram.com/valentino.lopez1/" target={"_Blank"}> <AiFillInstagram /></a>
      </div>

    </footer>
  )
}

export default Footer