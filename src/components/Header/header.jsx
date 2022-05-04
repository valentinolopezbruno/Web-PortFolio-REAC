import React from 'react'
import './Header.css'
import CTA from './CTA'
import me from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id="home">
      <div className="header__container">
        <h5> Hola Soy </h5>
        <h1> Valentino Lopez </h1>
        <h5 className="text-ligh"> FullStack Developer </h5>
        < CTA />
        <HeaderSocials />

        <div className='me'>
    <img src={me} alt="me" />
        </div>

        <a href="#footer" className='scroll__down'> Scroll Down </a>
      </div>
    </header>
  )
}

export default Header