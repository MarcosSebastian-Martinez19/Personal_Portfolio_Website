import React from "react";
import "./Header.css";
import { CTA } from "./CTA";
import profileIMG from "../../assets/profile.png"
import { HeaderSocials } from "./HeaderSocials";

export const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Marcos</h1>
                <h5 className="text-light">Front End Developer</h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={profileIMG} alt="Profile Image" />
                </div>

                <a href="" className="scroll__down">Scroll Down</a>
            </div>
        </header>
    )
};
