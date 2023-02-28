import React, { useState } from "react";
import "./Portfolio.css";
import Proyectos from "./Proyectos.json";
import { FaGithub } from "react-icons/fa"
import { SiNetlify } from "react-icons/si"
import { Search } from "./Search/Search";

export const Portfolio = () => {
    const [proyectos, setProyectos] = useState(Proyectos);
    const handleSearch = (e) => {
        const q = e.toLowerCase();
        
        if(!!q) {
            const search = Proyectos.filter((proyecto) => {
                return (
                    proyecto.title.toLowerCase().includes(q)
                )
            });
            setProyectos(search);
        } else {
            setProyectos(Proyectos);
        }
    }

    return (
    <section id="portfolio">
        <h2>Portafolio</h2>
        <Search onSearch={handleSearch} />
        <div className="container__filtro">
            <button>Html</button>
            <button>Css</button>
            <button>Scss</button>
            <button>Bootstrap</button>
            <button>JavaScript</button>
            <button>TypeScript</button>
            <button>React JS</button>
            <button>Angular</button>
        </div>
        <div className="container portfolio__container">
            {
                proyectos.map(({ id, image, title, urlGitHub, urlLiveDemo }) => {
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
)
};
