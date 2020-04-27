import React from "react";
import style from "./Dialogs.module.css";
import UserDialog from "./UserDialog/UserDialog";
import Message from "./Message/Message";


const Dialogs = ({usersDialogs, messages}) => {
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
      </div>
    </div>
  );
};

export default Dialogs;
