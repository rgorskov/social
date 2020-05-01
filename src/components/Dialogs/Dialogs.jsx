import React from "react";
import style from "./Dialogs.module.css";
import UserDialog from "./UserDialog/UserDialog";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "./../../redux/dialogs-reducer";


const Dialogs = ({ usersDialogs, messages, currentText, sendMessage, updateNewMessageText }) => {
  let onSendMessageHandler = () => {
    sendMessage();
  };

  let onNewMessageChange = (e) => {
    updateNewMessageText(e.target.value);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.usersList}>
        {usersDialogs.map((d, i) => (
          <UserDialog id={d.id} name={d.name} key={i} />
        ))}
      </div>
      <div className={style.messages}>
        {messages.map((m, i) => (
          <Message id={m.id} text={m.text} key={i} />
        ))}
        <textarea
          onChange={onNewMessageChange}
          value={currentText}
        />
        <button onClick={onSendMessageHandler}>Send Message</button>
      </div>
    </div>
  );
};

export default Dialogs;
