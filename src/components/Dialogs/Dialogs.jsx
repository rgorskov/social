import React from "react";
import style from "./Dialogs.module.css";
import UserDialog from "./UserDialog/UserDialog";
import Message from "./Message/Message";


const Dialogs = () => {
  return (
    <div className={style.dialogs}>
      <div className={style.usersList}>
        <UserDialog id='1' name='Yury' />
        <UserDialog id='2' name='Dima' />
        <UserDialog id='3' name='Oleg' />
      </div>
      <div className={style.messages}>
        <Message text='Hello' />
        <Message text='How are you?' />
        <Message text='kek' />
      </div>
    </div>
  );
};

export default Dialogs;
