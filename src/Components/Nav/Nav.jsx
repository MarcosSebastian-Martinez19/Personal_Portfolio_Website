import React from "react";
import "./Nav.css";
import { FaHome, FaUser, FaTelegramPlane, FaBook } from "react-icons/fa"
import { RiServiceLine } from "react-icons/ri"
import { useState } from "react";

export const Nav = () => {
    const [activeNav, setActiveNav] = useState("#");
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><FaHome /></a>
            <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><FaUser /></a>
            <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><FaBook /></a>
            <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "active" : ""}><RiServiceLine /></a>
            <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><FaTelegramPlane /></a>
        </nav>
    )
};
