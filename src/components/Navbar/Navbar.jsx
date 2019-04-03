import React, { Component } from 'react';
import style from './Navbar.module.css';


const Navbar = () => {
  return (
    <nav className={style.Navbar}>
    <div className="firstmenu">
    <a href="/Profile">Profile</a>
    </div>
    <div className="firstmenu">
    <a href="/Navbar">Messages</a>
    </div>
    <div className="firstmenu">
    <a href="/Group">Group</a>
    </div>
    <div className="firstmenu">
    <a href="/News">News</a>
    </div>
    <div className="firstmenu">
    <p> <a href="/Settings">Settings</a></p>
    </div>

    </nav>
  );
}

export default Navbar;
