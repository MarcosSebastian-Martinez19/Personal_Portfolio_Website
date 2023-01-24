import React from "react";
import "./Experience.css";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaSass, FaReact, FaNodeJs, FaPhp, FaPython, FaNpm, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiJquery, SiAngular, SiMysql, SiMongodb, SiNetlify } from "react-icons/si";

export const Experience = () => {
    return (
        <section>
            <h2>Mis Habilidades</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Front End Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <div>
                            <FaHtml5 className="experience__details-icon" />
                            <h4>HTML</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <div>
                            <FaCss3Alt className="experience__details-icon" />
                            <h4>CSS</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <div>
                            <SiJavascript className="experience__details-icon" />
                            <h4>JavaScript</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <div>
                            <FaBootstrap className="experience__details-icon" />
                            <h4>Bootstrap</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <div>
                            <FaSass className="experience__details-icon" />
                            <h4>SASS</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <div>
                            <FaReact className="experience__details-icon" />
                            <h4>ReactJS</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <div>
                            <SiAngular className="experience__details-icon" />
                            <h4>Angular</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <div>
                            <SiJquery className="experience__details-icon" />
                            <h4>jQuery</h4>
                            </div>
                        </article>
                    </div>
                </div>
                {/* END OF FRONT END */}
                {/* <div className="experience__backend">
                <h3>Back End Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <div>
                            <FaNodeJs className="experience__details-icon" />
                            <h4>NodeJS</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <div>
                            <FaPhp className="experience__details-icon" />
                            <h4>PHP</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <div>
                            <FaPython className="experience__details-icon" />
                            <h4>Python</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <div>
                            <SiMongodb className="experience__details-icon" />
                            <h4>MongoDB</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <div>
                            <SiMysql className="experience__details-icon" />
                            <h4>MySQL</h4>
                            </div>
                        </article>
                    </div>
                </div> */}
            </div>
        </section>
    )
};
