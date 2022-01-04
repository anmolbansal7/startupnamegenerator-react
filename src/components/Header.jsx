import React from "react";
import './Header.css';

const Header = ({headerTitle, headerExpanded}) => {
    return (
        <div className="head-main">
            <h1
                className={`head-text
                ${headerExpanded ? 'head-text-expanded' : 'head-text-contracted'}`}
            >
                {headerTitle}
            </h1>
        </div>
    );
};

export default Header;