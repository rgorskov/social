import React from "react";
import style from "./Dialogs.module.css";
import UserDialog from "./UserDialog/UserDialog";
import Message from "./Message/Message";


const Dialogs = ({data, sendMessage}) => {
  let newMessageRef = React.createRef();
  let onSendMessageHandler = () => {
    sendMessage(newMessageRef.current.value);
    newMessageRef.current.value = '';
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
        <textarea ref={newMessageRef}></textarea>
        <button onClick={onSendMessageHandler}>Send Message</button>
      </div>
    </div>
  );
};

export default Dialogs;
