import React from "react";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/be/Lineage_OS_Logo.png"
        alt=""
      />
    </header>
  );
};

export default Header;
