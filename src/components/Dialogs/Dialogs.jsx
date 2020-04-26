import React from "react";
import style from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = () => {
  return (
    <div className={style.dialogs}>
      <div className={style.usersList}>
        <div className={style.userDialog}>
          <NavLink to='/dialogs/1' className={style.userDialogLink} activeClassName={style.active}>Yury</NavLink>
        </div>
        <div className={style.userDialog}>
          <NavLink to='/dialogs/2' className={style.userDialogLink} activeClassName={style.active}>Dima</NavLink>
        </div>
        <div className={style.userDialog}>
          <NavLink to='/dialogs/3' className={style.userDialogLink} activeClassName={style.active}>Oleg</NavLink>
        </div>
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
