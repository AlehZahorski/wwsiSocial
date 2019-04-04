import React, {Component} from 'react';
import style from './Navbar.module.css';
import Dialogs from '../Dialogs/Dialogs';


const Navbar = () => {
    return (
        <nav className={style.Navbar}>
            <div className="firstmenu">
                <a href="/Profile">Profile</a>
            </div>
            <div className="firstmenu">
                <a href="/Dialogs">Messages</a>
            </div>
            <div className="firstmenu">
                <a href="#">Group</a>
            </div>
            <div className="firstmenu">
                <a href="#">News</a>
            </div>
            <div className="firstmenu">
                <p><a href="#">Settings</a></p>
            </div>

        </nav>
    );
}

export default Navbar;
