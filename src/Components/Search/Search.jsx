import { useState } from "react";
import "./Search.css";
import { ImSearch } from "react-icons/im";

export const Search = ({onSearch}) => {
    const [value, setValue] = useState("");

    function handleChange(e) {
        setValue(e.target.value);
        onSearch(e.target.value);
    }
    return (
        <div className="search">
            <input className="search-input" type="text" onChange={handleChange} value={value} />
            <ImSearch className="search-icon" />
        </div>
    )
};