import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import DropDown from './components/Header/DropDown/DropDown.jsx';

const App = (props) => {
  return (

    <BrowserRouter>
    <switch className="app-wrapper">
    <Header />
    <div className="app-wrapper-content">
    <Route exact path="/Profile" component={Profile}/>
    <Route exact path="/Dialogs" component={Dialogs}/>
    </div>
    <Navbar />
    <Footer />
    </switch>
    </BrowserRouter>

  );
}


export default App;
