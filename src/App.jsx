import React from "react";
import './App.css';
import Header from "./components/Header";
import ResultsContainer from "./components/ResultsContainer";
import Search from "./components/Search";

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {

    state = {
        headerText: "Startup Name Generator",
        expanded: true,
        suggestedNames :[],
    };

    handleInputChange = (inputText) => {
        
        this.setState({
            expanded: !inputText,
            suggestedNames: name(inputText),
        })
    }
        
    render() {
        return (
            <div>
                <Header headerTitle={this.state.headerText} headerExpanded={this.state.expanded} />
                <Search onInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames}/>
            </div>
        );
    }
}

export default App;