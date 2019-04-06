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
            <div className={style.logotopQ}>
                <img src={logo} height="50"/>
              WWSI social..
            </div>
        <div className={style.DropDown}>
          <DropDown className={ss.DRopDown}/>
        </div>
        </header>

    );
}

export default Header;
