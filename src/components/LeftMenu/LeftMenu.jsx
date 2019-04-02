import React, { Component } from 'react';
import './LeftMenu.css';


const LeftMenu = () => {
  return (
    <nav className="leftmenu">
    <div className="firstmenu">
    <a href="#">Profile</a>
    </div>
    <div className="firstmenu">
    <a href="#">Messages</a>
    </div>
    <div className="firstmenu">
    <a href="#">Group</a>
    </div>
    <div className="firstmenu">
    <a href="#">News</a>
    </div>
    <div className="firstmenu">
    <p> <a href="#">Settings</a></p>
    </div>

    </nav>
  );
}

export default LeftMenu;
