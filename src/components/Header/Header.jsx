import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import logo from '../images/domain.svg';
import DropDown from './DropDown/DropDown.jsx';
import '../../App.css';
import style from './Header.module.css';
import ss from './DropDown/DropDown.module.css';


const Header = () => {
    return (

        <header className={style.headerQ}>
        <div className="empty"></div>
            <div className={style.logotopQ}>
                <img src={logo} className={style.logo}/>
              WWSI social..
            </div>
        <div className={style.DropDown}>
          <DropDown className={ss.DRopDown}/>
        </div>
        <div className="empty1"></div>
        </header>

    );
}

export default Header;
