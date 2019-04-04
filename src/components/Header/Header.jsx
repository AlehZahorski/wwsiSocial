import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import logo from '../images/domain.svg';
import '../../App.css';
import Dropdown from './DropMenu/dropdown.js';
import './Header.css';

const Header = () => {
    return (
        <header className="headerQ">
            <div className="logotopQ">
                <img src={logo} height="50"/>
                WWSI social..
            </div>
            <Dropdown/>


        </header>
    );
}

export default Header;
