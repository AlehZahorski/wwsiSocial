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
  /* const arr = [{link: '', image:'', text: ''},{}]
   { arr.map(el => (
     <em className="firstmenu">
         <NavLink to={el.link} activeClassName={style.activelink}><img src={profile} className={style.NavbarProfile}></img><span className={style.textes}>Profile</span></NavLink>
     </em>
   )) } react map to jsx*/
    return (
        <nav className={style.Navbar}>
            <em className="firstmenu">
                <NavLink to="/Profile" activeClassName={style.activelink}><img src={profile} className={style.NavbarProfile}></img><span className={style.textes}>Profile</span></NavLink>
            </em>
            <em className="firstmenu">
                <NavLink to="/Dialogs" activeClassName={style.activelink}><img src={messages} className={style.NavbarMessages}></img><span className={style.textes}>Messages</span></NavLink>
            </em>
            <em className="firstmenu">
                <NavLink to="/News" activeClassName={style.activelink}><img src={news}className={style.NavbarNews}></img><span className={style.textes}>News</span></NavLink>
            </em>
            <em className="firstmenu">
                <NavLink to="/Group" activeClassName={style.activelink}><img src={group} className={style.NavbarGroup}></img><span className={style.textes}>Group</span></NavLink>
            </em>
            <em className="firstmenu">
                <NavLink to="/Settings" activeClassName={style.activelink}><img src={settings} className={style.NavbarSettings}></img><span className={style.textes}>Settings</span></NavLink>
            </em>

        </nav>
    );
}


export default Navbar;
