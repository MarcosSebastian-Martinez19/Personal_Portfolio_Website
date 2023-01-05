import React from "react";
import "./Header.css";
import { CTA } from "./CTA";
import profileIMG from "../../assets/profile.png";
import { HeaderSocials } from "./HeaderSocials";
import { BsArrowDown } from "react-icons/bs";

export const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hola soy</h5>
                <h1>Marcos</h1>
                <h5 className="text-light">Desarrollador Front-end</h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={profileIMG} alt="Profile Image" />
                </div>

                <BsArrowDown className="scroll__down" /> 
            </div>
        </header>
    )
};
