import React, { Component } from 'react';
import style from './LeftMenu.module.css';


const LeftMenu = () => {
  return (
    <nav className={style.leftmenu}>
    <div className="firstmenu">
    <a href="/Profile">Profile</a>
    </div>
    <div className="firstmenu">
    <a href="/Messages">Messages</a>
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

export default LeftMenu;
