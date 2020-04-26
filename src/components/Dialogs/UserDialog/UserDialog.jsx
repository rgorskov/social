import React from "react";
import style from "./UserDialog.module.css";
import { NavLink } from "react-router-dom";

const UserDialog = ({ id, name }) => {
  return (
    <div className={style.userDialog}>
      <NavLink to={`/dialogs/${id}`} className={style.userDialogLink} activeClassName={style.active}>{name}</NavLink>
    </div>
  );
};

export default UserDialog;
