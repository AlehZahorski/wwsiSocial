import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/Message';



const Dialogs = (props) => {

  let DialogsData = [
    { id: 1, name: 'Andzrej'},
    { id: 2, name: 'Grzegorz'},
    { id: 3, name: 'Swetlana'},
    { id: 4, name: 'Dmitrij'},
    { id: 5, name: 'Konstantin'}
  ]
  let DialogsElements = DialogsData.map( (dialog) => {
    return (
      <DialogItem name={dialog.name} id={dialog.id}/>
    )
  });
  let MessagesData =  [
    { id: 1, message: 'Hi. whatsup????'},
    { id: 2, message: 'Hello. How are you?'},
    { id: 3, message: 'Siemasz co tam?'},
    { id: 4, message: 'Wiez nie pierdol'},
    { id: 5, message: 'GTFO! man! GTFO!!!'}
  ]
  let MessageElements = MessagesData.map( (message) => {
    return (
      <MessageItem message={message.message} />
    )
  })

  return (
    <div className={style.content}>
    <div className={style.dialog} >
     {DialogsElements}
    </div>
    <div className={style.messages}>
     {MessageElements}
    </div>
    </div>
  );
}

export default Dialogs;
