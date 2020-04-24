import React from "react";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <ul>
        <li className={style.item}>Profile</li>
        <li className={style.item}>Messages</li>
        <li className={style.item}>News</li>
        <li className={style.item}>Music</li>
        <li className={style.item}>Settings</li>
      </ul>
    </nav>
  );
};

export default Navbar;
