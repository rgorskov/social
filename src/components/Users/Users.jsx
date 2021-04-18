import React from 'react';
import style from './Users.module.css';
import defaultUserPhoto from '../../assets/images/user-photo.png';
import Preloader from '../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';
import Pagination from '../common/Pagination/Pagination';

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
    if (isLoading) {
        return <Preloader />;
    }

    const onFollowClick = (userId, follow) => {
        followUser(userId, follow);
    };

    return (
        <>
            <Pagination
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={onPageChange}
                portionSize="10"
            />
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
