import React from "react";
import "./Footer.css";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">Marcos</a>
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer__socials">
                <a href="https://www.twitter.com/"><FaTwitter/></a>
                <a href="https://www.instagram.com/"><FaInstagram /></a>
                <a href="https://www.linkedin.com/"><FaLinkedin /></a>
                <a href="https://www.github.com/"><FaGithub /></a>
            </div>
            <div className="footer__copyright">
                <small>&copy; Marcos Martínez. All rights reserved.</small>
            </div>
        </footer>
    )
};
