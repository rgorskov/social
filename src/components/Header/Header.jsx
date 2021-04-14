import React from 'react';
import style from './Header.module.css';

const Header = ({ isAuth, login, logout }) => {
    return (
        <div className={style.head}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/be/Lineage_OS_Logo.png"
                alt=""
            />
            {isAuth && <button onClick={logout}>Log out</button>}
        </div>
    );
};

export default Header;
