import React from "react";
import style from "./Dialogs.module.css";
import UserDialog from "./UserDialog/UserDialog";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "./../../redux/state";


const Dialogs = ({ data, dispatch }) => {
  let newMessageRef = React.createRef();

  let onSendMessageHandler = () => {
    dispatch(sendMessageActionCreator());
  };

  let onNewMessageChange = () => {
    dispatch(updateNewMessageTextActionCreator(newMessageRef.current.value));
  };

  return (
    <div className={style.dialogs}>
      <div className={style.usersList}>
        {data.usersDialogs.map((d, i) => (
          <UserDialog id={d.id} name={d.name} key={i} />
        ))}
      </div>
      <div className={style.messages}>
        {data.messages.map((m, i) => (
          <Message id={m.id} text={m.text} key={i} />
        ))}
        <textarea
          ref={newMessageRef}
          onChange={onNewMessageChange}
          value={data.currentText}
        />
        <button onClick={onSendMessageHandler}>Send Message</button>
      </div>
    </div>
  );
};

export default Dialogs;
