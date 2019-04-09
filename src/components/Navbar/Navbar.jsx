import React, {Component} from 'react';
import style from './Navbar.module.css';
import Dialogs from '../Dialogs/Dialogs';
import { NavLink } from 'react-router-dom';
import profile from '../images/profile.png';
import messages from '../images/messages.png';
import news from '../images/news.png';
import group from '../images/group.png';
import settings from '../images/settings.png';





const Navbar = () => {
    return (
        <nav className={style.Navbar}>
            <em className="firstmenu">
                <NavLink to="/Profile" activeClassName={style.activelink}><img src={profile} className={style.NavbarProfile}></img></NavLink>
            </em>
            <em className="firstmenu">
                <NavLink to="/Dialogs" activeClassName={style.activelink}><img src={messages} className={style.NavbarMessages}></img></NavLink>
            </em>
            <em className="firstmenu">
                <NavLink to="/Group" activeClassName={style.activelink}><img src={news} className={style.NavbarGroup}></img></NavLink>
            </em>
            <em className="firstmenu">
                <NavLink to="/News" activeClassName={style.activelink}><img src={group}className={style.NavbarNews}></img></NavLink>
            </em>
            <em className="firstmenu">
                <NavLink to="/Settings" activeClassName={style.activelink}><img src={settings} className={style.NavbarSettings}></img></NavLink>
            </em>

        </nav>
    );
}


export default Navbar;
