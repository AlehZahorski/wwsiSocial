import React, { Component } from 'react';
import './App.css';
import './components/Footer.css';
import './components/Header.css';
import './components/LeftMenu.css';
import Header from './components/Header';
import LeftMenu from './components/LeftMenu';
import Profile from './components/Profile';
import Footer from './components/Footer';


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
