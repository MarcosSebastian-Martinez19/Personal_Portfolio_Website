import React from "react";
import "./Nav.css";
import { FaHome, FaTelegramPlane, FaBook } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { useState } from "react";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { About } from "../About/About.jsx";
import { Contact } from "../Contact/Contact.jsx";
import { Experience } from "../Experience/Experience.jsx";
import { Portfolio } from "../Portfolio/Portfolio.jsx";

export const Nav = () => {
    const [activeNav, setActiveNav] = useState("/");
    return (
        <Router>
            <nav>
                <Link to="/" onClick={() => setActiveNav("/")} className={activeNav === "/" ? "active" : ""}>
                    <FaHome />
                </Link>
                <Link to="/Experience" onClick={() => setActiveNav("/Experience")} className={activeNav === "/Experience" ? "active" : ""}>
                    <FaBook />
                </Link>
                <Link to="/Portfolio" onClick={() => setActiveNav("/Portfolio")} className={activeNav === "/Portfolio" ? "active" : ""}>
                    <MdWorkOutline />
                </Link>
                <Link to="/Contact" onClick={() => setActiveNav("/Contact")} className={activeNav === "/Contact" ? "active" : ""}>
                    <FaTelegramPlane />
                </Link>
            </nav>
            <main>
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/Experience" element={<Experience />} />
                    <Route path="/Portfolio" element={<Portfolio />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
            </main>
        </Router>
    );
};
