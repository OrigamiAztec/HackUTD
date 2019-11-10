import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header";
import Login from './Components/Login'
import Esri from './Components/Esri'
import FlightInput from "./Components/FlightInput";

class App extends Component{
    render = () => (
        <div>
            <Header/>
            {/*<Login/>*/}
            {/*<Esri/>*/}
            {/*<FlightInput/>*/}
            <div className="mayp" id="viewDiv"/>
        </div>
    );
}

export default App;
