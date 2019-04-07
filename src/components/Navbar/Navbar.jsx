import React, {Component} from 'react';
import style from './Navbar.module.css';
import Dialogs from '../Dialogs/Dialogs';
import { NavLink } from 'react-router-dom';





const Navbar = () => {
    return (
        <nav className={style.Navbar}>
            <div className="firstmenu">
                <NavLink to="/Profile" activeClassName={style.activelink}>Profile</NavLink>
            </div>
            <div className="firstmenu">
                <NavLink to="/Dialogs" activeClassName={style.activelink}>Messages</NavLink>
            </div>
            <div className="firstmenu">
                <NavLink to="/Group" activeClassName={style.activelink}>Group</NavLink>
            </div>
            <div className="firstmenu">
                <NavLink to="/News" activeClassName={style.activelink}>News</NavLink>
            </div>
            <div className="firstmenu">
                <p><NavLink to="/Settings" activeClassName={style.activelink}>Settings</NavLink></p>
            </div>

        </nav>
    );
}


export default Navbar;
