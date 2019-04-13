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

  let DialogsData = [
    { id: 1, name: 'Andzrej'},
    { id: 2, name: 'Grzegorz'},
    { id: 3, name: 'Swetlana'},
    { id: 4, name: 'Dmitrij'},
    { id: 5, name: 'Konstantin'}
  ]
  let MessagesData = [
    { id: 1, message: 'Hi. whatsup????'},
    { id: 2, message: 'Hello. How are you?'},
    { id: 3, message: 'Siemasz co tam?'},
    { id: 4, message: 'Wiez nie pierdol'},
    { id: 5, message: 'GTFO! man! GTFO!!!'}
  ]

  return (
    <div className={style.content}>
    <div className={style.dialog} >
    <DialogItem name={DialogsData[0].name} id={DialogsData[0].id}/>
    <DialogItem name={DialogsData[1].name} id={DialogsData[1].id}/>
    <DialogItem name={DialogsData[2].name} id={DialogsData[2].id}/>
    <DialogItem name={DialogsData[3].name} id={DialogsData[3].id}/>
    <DialogItem name={DialogsData[4].name} id={DialogsData[4].id}/>
    </div>
    <div className={style.messages}>
    <MessageItem message={MessagesData[0].message} />
    <MessageItem message={MessagesData[1].message} />
    <MessageItem message={MessagesData[2].message} />
    <MessageItem message={MessagesData[3].message} />
    <MessageItem message={MessagesData[4].message} />

    </div>
    </div>
  );
}

export default Dialogs;
