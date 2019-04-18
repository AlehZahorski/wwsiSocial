import React from 'react';
import style from '../Dialogs.module.css';





const MessageItem = (props) => {
  return (
    <div className={style.messages}>{props.message}</div>
  )
}

export default MessageItem;
