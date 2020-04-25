import React from "react";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.head}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/be/Lineage_OS_Logo.png"
        alt=""
      />
    </div>
  );
};

export default Header;
