import React, { Component } from 'react';
import './App.css';
import './components/Footer/Footer.css';
import './components/Header/Header.css';
import './components/LeftMenu/LeftMenu.css';
import Header from './components/Header/Header';
import LeftMenu from './components/LeftMenu/LeftMenu';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';


const App = () => {
    return (
    <div className="app-wrapper">
     <Header />
     <LeftMenu />
     <Profile />
     <Footer />


    </div>


  );
}









export default App;
