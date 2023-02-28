import { useState } from "react";
import "./Search.css";
import Proyectos from "../Proyectos.json";

export const Search = ({onSearch}) => {
    const [value, setValue] = useState("");

    function handleChange(e) {
        setValue(e.target.value);
        onSearch(e.target.value);
    }
    return (
        <div className="search">
            <input placeholder="Buscar proyecto..." className="search-input" type="text" list="name-projects" onChange={handleChange} value={value} />
            <datalist id="name-projects">
                {
                    Proyectos.map((proyecto) => (
                        <option key={proyecto.id} value={proyecto.title}></option>
                    ))
                }
            </datalist>
        </div>
    )
};