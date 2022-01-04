import React from "react";
import './Header.css';
import Card from "./Card";

const ResultsContainer = ({suggestedNames}) => {
    
    const suggestedNamesJSX = suggestedNames.map(suggestedNames => {
        return <Card key = {suggestedNames} suggestedName = {suggestedNames} />
    })
    
    return (
        <div className="results-main">
            {suggestedNamesJSX}
        </div>
    )
}

export default ResultsContainer;