import React from 'react'
import{BsLinkedin} from 'react-icons/bs'
import{AiFillGithub} from 'react-icons/ai'
import{AiFillInstagram} from 'react-icons/ai'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/valentinolopezbruno/"><BsLinkedin/></a>
        <a href="https://github.com/valentinolopezbruno?tab=repositories"><AiFillGithub/></a>
        <a href="https://www.instagram.com/valentino.lopez1/"><AiFillInstagram/></a>
    </div>
  )
}

export default HeaderSocials