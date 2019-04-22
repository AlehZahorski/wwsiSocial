import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/Message';



const Dialogs = (props) => {


  let DialogsElements = props.state.dialogs.map( (dialog) => {
    return (
      <DialogItem name={dialog.name} id={dialog.id}/>
    )
  });

  let MessageElements = props.state.messages.map( (messages) => {
    return (
      <MessageItem message={messages.message} />
    )
  });

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
