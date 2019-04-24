import React from 'react';
import style from '../Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import d1 from '../../images/d1.jpg';
import d2 from '../../images/d2.jpg';
import d3 from '../../images/d3.jpg';
import d4 from '../../images/d4.jpg';
import d5 from '../../images/d5.jpg';

const DialogItem = (props) => {
  let path = "/Dialogs" + props.id;
  return (
    <div className={style.dialog}>
    <img className={style.itemphoto} src={d1}/>
    <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem;
