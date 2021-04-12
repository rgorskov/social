import React from 'react';
import style from './Users.module.css';
import defaultUserPhoto from '../../assets/images/user-photo.png';
import Preloader from '../common/Preloader';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

const Users = ({
    totalUsersCount,
    pageSize,
    currentPage,
    onPageChange,
    setFollow,
    users,
    isLoading,
}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = Array.from(new Array(pagesCount), (x, i) => i + 1);

    if (isLoading) {
        return <Preloader />;
    }

    const onFollowClick = (userId, follow) => {
        if (follow) {
            axios
                .post(
                    `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
                    {},
                    {
                        withCredentials: true,
                        headers: {
                            'api-key': 'bbb456ba-076e-44e4-9911-e2153d748cd2',
                        },
                    }
                )
                .then((response) => {
                    if (response.data.resultCode == 0) {
                        setFollow(userId, true);
                    }
                });
        } else {
            axios
                .delete(
                    `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
                    {
                        withCredentials: true,
                        headers: {
                            'api-key': 'bbb456ba-076e-44e4-9911-e2153d748cd2',
                        },
                    }
                )
                .then((response) => {
                    if (response.data.resultCode == 0) {
                        setFollow(userId, false);
                    }
                });
        }
    };

    return (
        <>
            <div className={style.pagination}>
                {pages.map((p) => {
                    let className = style.pageNum;
                    if (currentPage == p) {
                        className += ' ' + style.active;
                    }
                    return (
                        <button
                            key={p}
                            className={className}
                            onClick={() => {
                                onPageChange(p);
                            }}
                        >
                            {p}
                        </button>
                    );
                })}
            </div>
            <div className={style.users}>
                {users.map((u) => {
                    return (
                        <div className={style.item} key={u.id}>
                            <div className={style.photo}>
                                <img
                                    src={
                                        u.photos.small !== null
                                            ? u.photos.small
                                            : defaultUserPhoto
                                    }
                                    alt="User photo"
                                />
                            </div>
                            <div className={style.info}>
                                <p className={style.name}>
                                    <NavLink to={`/profile/${u.id}`}>
                                        {u.name}
                                    </NavLink>
                                </p>
                                <button
                                    className="btn"
                                    onClick={() =>
                                        onFollowClick(u.id, !u.followed)
                                    }
                                >
                                    {u.followed ? 'Unfollow' : 'Follow'}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Users;
