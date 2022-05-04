import React from 'react'
import './Contact.css'
import {RiMailSendFill} from 'react-icons/ri'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import  { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_xvsie4n', 'template_gioo0kr', form.current, '_y5GosJHfWkwuwavS')
      e.target.reset()
    };

   
  return (
    <section id="contact">
      <h1> CONTACTO </h1>
      <div className='container contact__container'>
        <div className="contact__options">
          <article className="contact__option">
            <RiMailSendFill className='contact__icon'/>
            <h4>CORREO</h4>
            <h5>valentinolopezbruno@gmail.com</h5>
            <a href="mailto:valentinolopezbruno@gmail.com"> Enviar Correo</a>
          </article>

          <article className="contact__option">
            <AiOutlineWhatsApp className='contact__icon'/>
            <h4>WHATSAPP</h4>
            <h5>+54 9 353422-3573</h5>
            <a href="HTTPS://API.WHATSAPP.COM/SEND?PHONe+543534223573" target={"_Blank"}> Enviar Mensaje</a>
          </article>

          <article className="contact__option">
            <AiFillLinkedin className='contact__icon'/>
            <h4>LINKEDIN</h4>
            <h5>valentinolopezbruno</h5>
            <a href="https://www.linkedin.com/in/valentinolopezbruno/" target={"_Blank"}> Ir al Perfil</a>
          </article>
       </div>
       <form ref={form} onSubmit={sendEmail}>
         <input type="text" name='name' placeholder='Su Nombre' requiered/>
         <input type="email"  name='email' placeholder='Su Correo Completo' />
         <textarea name="message"  rows="7" placeholder='Su Mensaje' requiered></textarea>
         <button type='submit' className='btn '> Enviar</button>
       </form>
      </div>
    </section>
  )
}

export default Contact