import React from "react";
import style from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={style.dialogs}>
      <div className={style.usersList}>
        <div className={`${style.userDialog} ${style.active}`}>Yury</div>
        <div className={style.userDialog}>Dima</div>
        <div className={style.userDialog}>Oleg</div>
      </div>
      <div className={style.messages}>
        <div className={style.message}>Hello</div>
        <div className={style.message}>How are you?</div>
        <div className={style.message}>kek</div>
      </div>
    </div>
  );
};

export default Dialogs;
