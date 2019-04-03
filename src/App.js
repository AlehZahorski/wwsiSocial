import React, { Component } from 'react';
import './App.css';
import './components/Footer/Footer.module.css';
import './components/Header/Header.css';
import './components/Navbar/Navbar.module.css';
import './components/Profile/MyPosts/MyPosts.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Dialogs from './components/Dialogs/Dialogs.jsx';


const App = () => {
  return (
    <div className="app-wrapper">
    <Header />
    <Navbar />
    <div className="app-wrapper-content">
    <Profile />
    <Dialogs />
    </div>
    <Footer />


    </div>


  );
}









export default App;
