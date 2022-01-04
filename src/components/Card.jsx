import React from "react";
import './Header.css';

const Card = ({suggestedName}) => {
    const url = 'https://www.namecheap.com/domains/registration/results/?domain=';
    return (
        <a href={`${url}${suggestedName}`} target="_blank">
        <div className="card">
            <p className="name">{suggestedName}</p>
        </div>
        </a>
    );
};

export default Card;