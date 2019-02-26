import React, { Component } from 'react';
import './App.css';
import ToggleConatiner from './container/ToggleContaner';
import ShowConatiner from './container/ShowContainer';
class App extends Component {
    render() {
        return ( 
            <div className = "App" >
                    <ToggleConatiner > </ToggleConatiner> 
                    <ShowConatiner > </ShowConatiner> 
            </div>
        );
    }
}

export default App;