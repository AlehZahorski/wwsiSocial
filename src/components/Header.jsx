import React, { Component } from 'react';
import logo from './images/domain.svg';


const Header = () => {
return (
  <header className="headerQ">
  <div className="logotopQ">
     <img src={logo}  height="50" />
     WWSI social..
  </div>


     <div className="topmenuQ">
        DropMenu
     </div>


</header>
);
}

export default Header;
