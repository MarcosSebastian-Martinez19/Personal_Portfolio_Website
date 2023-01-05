import React from "react";
import "./About.css";
import profileIMG from "../../assets/about-profile.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

export const About = () => {
    return (
        <section id="about">
            <h2>Sobre Mi</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={profileIMG} alt="About Image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experiencia</h5>
                            <small>...+ años trabajando</small>
                        </article>

                        {/* <article className="about__card">
                            <FiUsers className="about__icon" />
                            <h5>Clientes</h5>
                            <small>200+ en todo el mundo</small>
                        </article> */}

                        <article className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h5>Proyectos</h5>
                            <small>50+ Completados</small>
                        </article>
                    </div>

                    <p>
                        Hola me llamo Marcos, soy argentino.<br />
                        Estudio la carrera de Ciencias de la Computación en la <a href="https://www.unc.edu.ar/">Universidad Nacional de Córdoba</a>.<br />
                        Soy un desarrollador front-end apasionado por la creación de nuevas interfaces de usuario, con una mente creativa dispuesta a ofrecer nuevas soluciones e ideas; poseo capacidad de aprendizaje rápido así como agilidad en las tareas asignadas.<br />
                        Algunas tecnologías con las que disfruto trabajar incluyen HTML5, CSS3, JavaScript, Bootstrap 5, ReactJS, jQuery.
                    </p>

                    <a href="#contact" className="btn btn-primary">Contáctame</a>

                </div>
            </div>
        </section>
    )
};
