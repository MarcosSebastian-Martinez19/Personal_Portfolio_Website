import React from "react";
import "./Contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from "emailjs-com";

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_gap61mi', 'template_z8beyxn', form.current, '6NLtUP7NdRba5JZX6')
        
        e.target.reset()
    };

    return (
        <section>
            <h2>Contáctame</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <AiOutlineMail className="contact__option-icon" />
                        <h4>Correo Electrónico</h4>
                        <h5>marcossebastian429@gmail.com</h5>
                        <a href="mailto:marcossebastian429@gmail.com" target="_blank">Enviar un mensaje</a>
                    </article>
                    <article className="contact__option">
                        <FaLinkedin className="contact__option-icon" />
                        <h4>LinkedIn</h4>
                        <h5>Marcos Sebastián Martínez</h5>
                        <a href="https://www.linkedin.com/in/marcos-sebastian-martinez/" target="_blank">Ver perfil</a>
                    </article>
                    <article className="contact__option">
                        <FaGithub className="contact__option-icon" />
                        <h4>GitHub</h4>
                        <h5>MarcosSebastian-Martinez19</h5>
                        <a href="https://github.com/MarcosSebastian-Martinez19" target="_blank">Ver repositorio</a>
                    </article>
                </div>
                
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Tu nombre completo" required />
                    <input type="email" name="email" placeholder="Tu correo electrónico" required />
                    <textarea name="message" rows="7" placeholder="Tu mensaje" required></textarea>
                    <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
                </form>
            </div>
        </section>
    )
};
