import React from "react";
import "./Contact.css";
import { AiOutlineMail, AiOutlineLinkedin } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa"
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
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <AiOutlineMail />
                        <h4>Email</h4>
                        <h5>marcossebastian429@gmail.com</h5>
                        <a href="mailto:marcossebastian429@gmail.com" target="_blank">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <FaWhatsapp />
                        <h4>WhatsApp</h4>
                        <h5>+545454545214545</h5>
                        <a href="https://api.whatsapp.com/send?phone=3704238835" target="_blank">Send a message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
};
