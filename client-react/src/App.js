import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Projectindex from './components/Projects/Projectindex';
import Header from './components/common/header';
import Nav from './components/common/Nav';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListProject from './components/Projects/ListProject';
import AddProject from './components/Projects/AddProject';
import EditProject from './components/Projects/EdiProject';



function App() {
    return ( <
        div >
        <
        Header / >
        <
        Nav / >
        <
        BrowserRouter >
        <
        Switch >
        <
        Route path = "/"
        exact component = { ListProject }
        /> <
        Route path = "/AddProject"
        exact component = { AddProject }
        /> <
        Route path = "/EditProject/:id"
        exact component = { EditProject }
        /> <
        Route path = "/BackProjectList"
        exact component = { ListProject }
        /> <
        /Switch>

        <
        /BrowserRouter> { /* <Projectindex/> */ } <
        /div>
    );
}

export default App;