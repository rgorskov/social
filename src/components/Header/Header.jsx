import React from 'react';
import style from './Header.module.css';

const Header = ({ isAuth, login }) => {
    debugger;
    return (
        <div className={style.head}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/be/Lineage_OS_Logo.png"
                alt=""
            />
            {isAuth && <span>{login}</span>}
        </div>
    );
};

export default Header;
