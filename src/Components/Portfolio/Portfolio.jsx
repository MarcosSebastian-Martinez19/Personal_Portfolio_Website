import React, { useState } from "react";
import "./Portfolio.css";
import Proyectos from "./Proyectos.json";
import { Search } from "./Search/Search";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

export const Portfolio = () => {
    const [proyectos, setProyectos] = useState(Proyectos);
    const [activeFilter, setActiveFilter] = useState([]);
    const [valueSearch, setValueSearch] = useState("");
    const handleSearch = (e) => {
        setValueSearch(e);
        const q = e.toLowerCase();

        if (!!q) {
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

    function handleFilter(e) {
        const q = e.target.value;

        if (!!q) {
            setActiveFilter(q);
            const filter = Proyectos.filter((proyecto) => {
                return proyecto.usedTechnology.includes(q)
            });
            setProyectos(filter);
        } else {
            setProyectos(Proyectos);
        }
    }

    return (
        <section id="portfolio">
            <h2>Portafolio</h2>
            <Search onSearch={handleSearch} />
            {
                valueSearch !== "" ? <div className="result__container">
                    <p>Resultados para: {valueSearch}</p>
                </div> : valueSearch
            }
            
            <div className="container__filtro">
                <input onClick={handleFilter} className={activeFilter === "Html" ? "active" : ""} type="button" value="Html" />
                <input onClick={handleFilter} className={activeFilter === "Css" ? "active" : ""} type="button" value="Css" />
                <input onClick={handleFilter} className={activeFilter === "Scss" ? "active" : ""} type="button" value="Scss" />
                <input onClick={handleFilter} className={activeFilter === "Bootstrap" ? "active" : ""} type="button" value="Bootstrap" />
                <input onClick={handleFilter} className={activeFilter === "JavaScript" ? "active" : ""} type="button" value="JavaScript" />
                <input onClick={handleFilter} className={activeFilter === "TypeScript" ? "active" : ""} type="button" value="TypeScript" />
                <input onClick={handleFilter} className={activeFilter === "React JS" ? "active" : ""} type="button" value="React JS" />
                <input onClick={handleFilter} className={activeFilter === "Angular" ? "active" : ""} type="button" value="Angular" />
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
