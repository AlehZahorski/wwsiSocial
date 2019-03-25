import React, { Component } from 'react';
import logo from './images/domain.svg';
import '../App.css';


const Header = () => {
return (
  <header className="headerQ">
  <div className="logotopQ">
     <img src={logo}  height="50" />
     WWSI social..
  </div>




    <div id="sidebar">
    <div className="toggle-btn" onclick="openMenu()">
    <span></span>
    <span></span>
    <span></span>
    </div>
      <ul>
        <li><a href="#">Вход</a></li>
        <li><a href="#">Выход</a></li>
        <li><a href="#">Регистрация</a></li>
      </ul>
    </div>



</header>
);
}

export default Header;
