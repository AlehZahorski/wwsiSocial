import React from 'react';
import style from '../Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import d1 from '../../images/d1.jpg';


const DialogItem = (props) => {
  let path = "/Dialogs" + props.id;
  return (
    <div className={style.dialog}>
    <img className={style.itemphoto} src={d1}/>
    <NavLink to={path}>{props.name}</NavLink>
    <NavLink to="/Dialogs"></NavLink>
    </div>
  )
}

export default DialogItem;
