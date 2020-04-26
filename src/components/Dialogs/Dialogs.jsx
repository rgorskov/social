import React from "react";
import style from "./Dialogs.module.css";
import UserDialog from "./UserDialog/UserDialog";
import Message from "./Message/Message";

let usersDialogData = [
  { id: 1, name: "Yury" },
  { id: 2, name: "Dima" },
  { id: 3, name: "Oleg" },
];

let messagesData = [
  { id: 1, text: "Hello" },
  { id: 2, text: "How are you?" },
];

const Dialogs = () => {
  return (
    <div className={style.dialogs}>
      <div className={style.usersList}>
        {usersDialogData.map((d, i) => (
          <UserDialog id={d.id} name={d.name} key={i} />
        ))}
      </div>
      <div className={style.messages}>
        {messagesData.map((m, i) => (
          <Message id={m.id} text={m.text} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Dialogs;
