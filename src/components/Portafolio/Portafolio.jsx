import React from 'react'
import './Portafolio.css'
import IMG1 from '../../assets/IMG1.png'
import IMG2 from '../../assets/img2.PNG'
import IMG3 from '../../assets/img3.PNG'
import IMG4 from '../../assets/img4.PNG'


const Portafolio = () => {
  return (
    <section id="portafolio">
      <h1>  Portafolio  </h1>

      <div className='container portafolio__container'>

        <article className='portafolio__item'>
          <div className='portafolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
            <h3>Registrar y visualizar Productos en una base de datos por medio de un CRUD Web</h3>
            <div className='portafolio__item-cta'>
            <a href="https://github.com/valentinolopezbruno?tab=repositories" className='btn' target={"_Blank"}> GitHub </a>
            <a href="https://www.linkedin.com/posts/valentinolopezbruno_go-activity-6921159062378156032-ywEu?utm_source=linkedin_share&utm_medium=member_desktop_web" className='btn ' target={"_Blank"}> Ver Video </a>
            </div>
        </article>

        <article className='portafolio__item'>
          <div className='portafolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
            <h3>Registrar y visualizar Pedidos en base a los Productos anteriores en una base de datos por medio de un CRUD Web</h3>
            <div className='portafolio__item-cta'>
              <a href="https://github.com/valentinolopezbruno?tab=repositories" className='btn' target={"_Blank"}> GitHub </a>
             <a href="https://www.linkedin.com/posts/valentinolopezbruno_mysql-go-bootstrap-activity-6924671966553542656-3_EG?utm_source=linkedin_share&utm_medium=member_desktop_web" className='btn ' target={"_Blank"}> Ver Video </a>
            </div>
        </article>

        <article className='portafolio__item'>
          <div className='portafolio__item-image'>
            <img src={IMG3} alt="" />
          </div>
            <h3>Web Escribania</h3>
            <div className='portafolio__item-cta'>
             <a href="https://github.com/valentinolopezbruno?tab=repositories" className='btn' target={"_Blank"}> GitHub </a>
             <a href="https://www.youtube.com/watch?v=HMWuUNFGBZ8" className='btn ' target={"_Blank"}> Ver Video </a>
            </div>
        </article>

        <article className='portafolio__item'>
          <div className='portafolio__item-image'>
            <img src={IMG4} alt="" />
          </div>
            <h3>Esta Web (React)</h3>
            <div className='portafolio__item-cta'>
              <a href="https://github.com/valentinolopezbruno?tab=repositories" className='btn' target={"_Blank"}> GitHub </a>
              <a href="https://youtu.be/33lemQaCis8" className='btn ' target={"_Blank"}> Ver Video </a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portafolio