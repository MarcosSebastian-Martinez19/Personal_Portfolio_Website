import React from "react";
import "./Portfolio.css";
import Proyectos from "./Proyectos.json"


export const Portfolio = () => (
    <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__container">
            {
            Proyectos.map(({id, image, title, urlGitHub, urlLiveDemo}) => {
            return (
            <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                    <img src={image} alt={"Image " + title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                    <a href={urlGitHub} className="btn" target="_blank">GitHub</a>
                    <a href={urlLiveDemo} className="btn btn-primary" target="_blank">Live Demo</a>
                </div>
            </article>
            )
            })
        }
        </div>
    </section>
);
