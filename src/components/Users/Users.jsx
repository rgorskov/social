import React from 'react';
import style from './Users.module.css';
import defaultUserPhoto from '../../assets/images/user-photo.png';
import Preloader from '../common/Preloader';

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
                    u.photos.small !== null ? u.photos.small : defaultUserPhoto
                  }
                  alt="User photo"
                />
              </div>
              <div className={style.info}>
                <p className={style.name}>{u.name}</p>
                <button
                  className="btn"
                  onClick={() => setFollow(u.id, !u.followed)}
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
