import React from 'react';
import style from './Users.module.css';
import defaultUserPhoto from '../../assets/images/user-photo.png';
import Preloader from '../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';

const Users = ({
    totalUsersCount,
    pageSize,
    currentPage,
    onPageChange,
    users,
    isLoading,
    followUser,
    followingInProgress,
}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = Array.from(new Array(pagesCount), (x, i) => i + 1);

    if (isLoading) {
        return <Preloader />;
    }

    const onFollowClick = (userId, follow) => {
        followUser(userId, follow);
    };

    return (
        <>
            <div className={style.pagination}>
                {pages.map((p) => {
                    let className = style.pageNum;
                    if (currentPage === p) {
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
                    let disabled = followingInProgress.some(
                        (id) => id === u.id
                    );
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
                                    disabled={disabled}
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
