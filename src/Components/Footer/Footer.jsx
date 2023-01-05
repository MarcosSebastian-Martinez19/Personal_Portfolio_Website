import React from "react";
import "./Footer.css";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">Marcos</a>
            <ul className="permalinks">
                <li><a href="#">Inicio</a></li>
                <li><a href="#about">Sobre Mi</a></li>
                <li><a href="#experience">Experiencia</a></li>
                <li><a href="#portfolio">Portafolio</a></li>
                <li><a href="#contact">Contactar</a></li>
            </ul>
            <div className="footer__socials">
                <a href="https://twitter.com/Marcos13549854" target="_blank"><FaTwitter/></a>
                <a href="https://www.instagram.com/marcos.s.martinez/" target="_blank"><FaInstagram /></a>
                <a href="https://www.linkedin.com/in/marcos-sebasti%C3%A1n-mart%C3%ADnez-bbb3a4217/" target="_blank"><FaLinkedin /></a>
                <a href="https://github.com/MarcosSebastian-Martinez19" target="_blank"><FaGithub /></a>
            </div>
            <div className="footer__copyright">
                <small>&copy; Marcos Martínez. Todos los derechos reservados.</small>
            </div>
        </footer>
    )
};
