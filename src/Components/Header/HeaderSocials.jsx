import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import "./Header.css";

export const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/marcos-sebasti%C3%A1n-mart%C3%ADnez-bbb3a4217/" target="_blank"><FaLinkedin /></a>
      <a href="https://github.com/MarcosSebastian-Martinez19" target="_blank"><FaGithub /></a>
      <a href="mailto:marcossebastian429@gmail.com" target="_blank"><MdOutlineAlternateEmail /></a>
    </div>
  )
}
