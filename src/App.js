import React, { Component } from 'react';
import './App.css';
import ToggleConatiner from './container/ToggleContaner';
import ShowConatiner from './container/ShowContainer';
import Toggle1Conatiner from './container/Toogle1Container';
import Toggle2Conatiner from './container/Toggle2Container';

class App extends Component {
    render() {
        return ( <
            div className = "App" >
            <
            ToggleConatiner > < /ToggleConatiner>  <
            ShowConatiner > < /ShowConatiner>  <
            Toggle1Conatiner > < /Toggle1Conatiner> <
            Toggle2Conatiner > < /Toggle2Conatiner> <
            /div>
        );
    }
}

export default App;