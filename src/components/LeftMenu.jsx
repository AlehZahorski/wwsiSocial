import React, { Component } from 'react';
import './LeftMenu.css';


const LeftMenu = () => {
  return (
    <nav className="leftmenu">
         <div className="firstmenu">
         <a href="#">Profile</a>
         </div>
         <div>
         <a href="#">Messages</a>
         </div>
         <div>
         <a href="#">Group</a>
         </div>
         <div>
         <a href="#">News</a>
         </div>
         <div>
         <p> <a href="#">Settings</a></p>
         </div>

    </nav>
  );
}

export default LeftMenu;
