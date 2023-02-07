import React from "react";
import "./Portfolio.css";
import Proyectos from "./Proyectos.json";
import { FaGithub } from "react-icons/fa"
import { SiNetlify } from "react-icons/si"


export const Portfolio = () => (
    <section id="portfolio">
        <h2>Portafolio</h2>
        <div className="container portfolio__container">
            {
                Proyectos.map(({ id, image, title, urlGitHub, urlLiveDemo }) => {
                    return (
                        <article key={id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={image} alt={"Image " + title} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a href={urlGitHub} className="btn" target="_blank"> <FaGithub /> GitHub</a>
                                <a href={urlLiveDemo} className="btn btn-primary" target="_blank"> <SiNetlify /> Ver Demo</a>
                            </div>
                        </article>
                    )
                })
            }
        </div>
    </section>
);
