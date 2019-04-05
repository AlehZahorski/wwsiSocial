import React from 'react';
import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = "/Dialogs" + props.id;
  return (
    <div className={style.dialog}>
    <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const MessageItem = (props) => {
  return (
    <div className={style.messages}>{props.message}</div>
  )
}


const Dialogs = (props) => {
  return (
    <div className={style.content}>
    <div className={style.dialog} >
    <DialogItem name="Andrzej" id="1"/>
    <DialogItem name="Grzegorz" id="2"/>
    <DialogItem name="Swetlana" id="3"/>
    <DialogItem name="Dmitrij" id="4"/>
    <DialogItem name="Konstantin" id="5"/>
    </div>
    <div className={style.messages}>
    <MessageItem message="Hi" />
    <MessageItem message="Hello. How are you?" />
    <MessageItem message="Siemasz co tam?" />
    <MessageItem message="Wiez nie pierdol" />
    <MessageItem message="GTFO! man! GTFO!!!" />

    </div>
    </div>
  );
}

export default Dialogs;
