import React from "react";
import "./Footer.css";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { BrowserRouter as Router } from "react-router-dom";

export const Footer = () => {
    return (
        <Router>
            <footer>
                <a href="/" className="footer__logo">Marcos</a>
                
                <div className="footer__socials">
                    <a href="https://twitter.com/Marcos13549854" target="_blank" rel="noreferrer"><FaTwitter /></a>
                    <a href="https://www.linkedin.com/in/marcos-sebastian-martinez/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                    <a href="https://github.com/MarcosSebastian-Martinez19" target="_blank" rel="noreferrer"><FaGithub /></a>
                </div>
                <div className="footer__copyright">
                    <small>&copy; Marcos Martínez. Todos los derechos reservados.</small>
                </div>
            </footer>
        </Router>
    );
};
