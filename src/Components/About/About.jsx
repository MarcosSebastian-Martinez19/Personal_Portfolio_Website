import React from "react";
import "./About.css";
import profileIMG from "../../assets/about-profile.jpg";
import { CTA } from "./CTA";
// import { FaAward } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";
// import { VscFolderLibrary } from "react-icons/vsc";

export const About = () => {
    return (
        <section>

            <div className="container about__container">

                <div className="about__content">
                    <div>
                        <h5>Hola soy</h5>
                        <h1>Marcos</h1>
                        <h5 className="text-light">Desarrollador Front-end</h5>
                    </div>

                    <p>
                        Estudio la carrera de Ciencias de la Computación en la <a href="https://www.unc.edu.ar/">Universidad Nacional de Córdoba</a>.<br />
                        Soy un desarrollador front-end apasionado por la creación de nuevas interfaces de usuario, con una mente creativa dispuesta a ofrecer nuevas soluciones e ideas; poseo capacidad de aprendizaje rápido así como agilidad en las tareas asignadas.<br />
                        Algunas tecnologías con las que disfruto trabajar incluyen HTML5, CSS3, JavaScript, Bootstrap 5, ReactJS, jQuery.
                    </p>

                    <CTA />

                </div>
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={profileIMG} alt="About Image" />
                    </div>
                </div>
            </div>
        </section>
    )
};
