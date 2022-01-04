import React from "react";
import './Header.css';

const Search = ({onInputChange}) => {
    return (
        <div className="search-main">
            <input
                onChange={(event) => onInputChange(event.target.value)}
                placeholder="Enter the Keywords..."
                className="search-input" />
        </div>
    )
}

export default Search;