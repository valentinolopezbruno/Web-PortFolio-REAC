import React from 'react'
import './Nav.css'
import {TiHome} from 'react-icons/ti'
import {FaUserAlt} from 'react-icons/fa'
import {MdMiscellaneousServices} from 'react-icons/md'
import {MdOutlineInsertEmoticon} from 'react-icons/md'
import {IoMdContact} from 'react-icons/io'
import {useState} from 'react' 
/* useState es para hacer que la barra de navegacion marque cada item en el que esta */



const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')  
  return (
    <nav>
      <a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}> < TiHome/ > </a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> < FaUserAlt/ > </a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> < MdOutlineInsertEmoticon/ > </a>
      <a href="#portafolio" onClick={()=> setActiveNav('#portafolio')} className={activeNav === '#portafolio' ? 'active' : ''}> < MdMiscellaneousServices/ > </a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> < IoMdContact/ > </a>
    </nav>
  )
}

export default Nav