import React from "react";
import "./Footer.css";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

export const Footer = () => {
    return (
        <Router>
            <footer>
                <a href="/" className="footer__logo">Marcos</a>
                
                <div className="footer__socials">
                    <a href="https://twitter.com/Marcos13549854" target="_blank"><FaTwitter /></a>
                    <a href="https://www.instagram.com/marcos.s.martinez/" target="_blank"><FaInstagram /></a>
                    <a href="https://www.linkedin.com/in/marcos-sebasti%C3%A1n-mart%C3%ADnez-bbb3a4217/" target="_blank"><FaLinkedin /></a>
                    <a href="https://github.com/MarcosSebastian-Martinez19" target="_blank"><FaGithub /></a>
                </div>
                <div className="footer__copyright">
                    <small>&copy; Marcos Martínez. Todos los derechos reservados.</small>
                </div>
            </footer>
        </Router>
    );
};
