import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
            <h1> Experiencia & Areas de Trabajo </h1>
      <h5> Areas de Trabajo </h5>
      <div className='container experience__container'>

      {/* /* ---------------------------- Frontened Development---------------------------- */}

        <div className='experience__frontend'>
          <h3> Frontened Development</h3>
          <div className='experience__content'>

            <article className='experience_details'>
              < BsPatchCheckFill  className='experience__details-icon'/>
              <div>             
                <h4> HTML </h4>
                <small className='text-light'> AVANZADO </small>
              </div>
            </article>

            <article className='experience_details'>
              < BsPatchCheckFill  className='experience__details-icon'/>
              <div>             
                <h4> CSS </h4>
                <small className='text-light'> MEDIO  </small>
              </div>
            </article>

            <article className='experience_details'>
              < BsPatchCheckFill className='experience__details-icon'/>
              <div>             
                <h4> REACT </h4>
                <small className='text-light'> AVANZADO  </small>
              </div>
            </article>

            <article className='experience_details'>
              < BsPatchCheckFill  className='experience__details-icon'/>
              <div>             
                <h4> JavaScript </h4>
                <small className='text-light'>AVANZADO  </small>
              </div>
            </article>

            <article className='experience_details'>
              < BsPatchCheckFill  className='experience__details-icon'/>
              <div>             
                <h4> Bootstrap </h4>
                <small className='text-light'>AVANZADO  </small> 
              </div>
            </article>
{/*       /* ---------------------------- END Frontened Development---------------------------- */}
          </div>
        </div>

        <div className='experience__backend'>

        <h3> Backend Development </h3>

        <div className='experience__content'>
{/*         /* ----------------------------  Backend Development---------------------------- */ }
          <article className='experience_details'>
                < BsPatchCheckFill  className='experience__details-icon'/>
                <div>             
                  <h4> Golang </h4>
                  <small className='text-light'> AVANZADO  </small>
                </div>
              </article>

              <article className='experience_details'>
                < BsPatchCheckFill  className='experience__details-icon'/>
                <div>             
                  <h4> SQL SERVER </h4>
                  <small className='text-light'> AVANZADO  </small>
                </div>
              </article>

              <article className='experience_details'>
                < BsPatchCheckFill  className='experience__details-icon'/>
                <div>             
                  <h4> MySQL </h4>
                  <small className='text-light'> AVANZADO  </small>
                </div>

              </article>

              <article className='experience_details'>
                < BsPatchCheckFill  className='experience__details-icon'/>
                <div>             
                  <h4> PHP </h4>
                  <small className='text-light'> MEDIO  </small>
                </div>
              </article>

              <article className='experience_details'>
                < BsPatchCheckFill className='experience__details-icon'/>
                <div>             
                  <h4> NodeJS </h4>
                  <small className='text-light'> MEDIO  </small>
                </div>
              </article>
             {/*  /* ---------------------------- END Backend Development---------------------------- */ }
        </div>
        </div>
      </div>
    </section>
  )
}

export default Experience