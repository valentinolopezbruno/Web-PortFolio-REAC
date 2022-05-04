import React from 'react'
import './About.css'
import ME from '../../assets/me.jpg'
import {BsFillAwardFill} from 'react-icons/bs'
import {MdFolderShared} from 'react-icons/md'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'


const About = () => {
  return (
    <section id="about">
      <h1> Sobre Mi </h1>
      <h5> Información Sobre Mis Estudios </h5>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="About_Image"/>
          </div>
        </div>

        <div className='about__content'>

        <div className="about__cards">
          <article className='about__card'>
            < BsFillAwardFill className='about__icon'/>
            <h5> Experiencia </h5>
            <small> 6+ Meses Trabajando  <br/></small>
            <small> 2+ Años Programando </small>
          </article>

          <article className='about__card'>
            < MdFolderShared className='about__icon'/>
            <h5> Estudios </h5>
            <small> Cursando Tercer Año de  Ingenieria en Sistemas  </small>
          </article>

          <article className='about__card'>
            < AiOutlineFundProjectionScreen className='about__icon'/>
            <h5>  Proyectos </h5>
            <small> 30+ Proyectos Personales <br/></small>
            <small> 10+ Proyectos Comerciales  </small>
          </article>
        </div>
        
          <p>Hola mi nombre es Valentino, llevo hace poco más de un año programando, actualmente me defino como programador FullStack 
            aunque me apasiona más el Backend por encima del Frontend, me considero una persona autodidacta y muy predispuesta
            para lo que se propone. Estoy cursando mi tercer año de Ingeniería en Sistemas de Información y buscando alguna oferta laboral para poder 
            adquirir experiencia  y mejorar mis aptitudes y cualidades estoy abierto a toda observación positiva o sugerencia.
          </p>
          
          <p>
          Hello my name is Valentino, I have been programming for a little over a year, currently I define myself as a FullStack programmer
            Although I am more passionate about the Backend than the Frontend, I consider myself a self-taught person and very predisposed
            for what is proposed. I am in my third year of Information Systems Engineering and looking for a job offer to be able to
            gain experience and improve my skills and qualities I am open to any positive comments or suggestions.
            </p>
          <a href="#contact" className='btn'> Contactame </a>

        </div>
      </div>
    </section>
  )
}

export default About