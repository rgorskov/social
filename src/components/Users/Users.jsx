import React from "react";
import style from "./Users.module.css";

let initialUsers = [
  { id: 1, followed: false, firstname: 'Alexey', surname: 'Popov', photoUrl: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' },
  { id: 2, followed: true, firstname: 'Sergey', surname: 'Petrov', photoUrl: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' },
  { id: 3, followed: false, firstname: 'Petr', surname: 'Ivanov', photoUrl: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' },
  { id: 4, followed: false, firstname: 'Ivan', surname: 'Kukanov', photoUrl: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' }
];

const Users = ({ users, setFollow, setUsers }) => {
  if(!users.length) {
    setUsers(initialUsers);
  }

  return (
    <div className={style.users}>
      {users.map((u) => {
        return (
          <div className={style.item} key={u.id}>
            <div className={style.photo}>
              <img src={u.photoUrl} alt="User photo" />
            </div>
            <div className={style.info}>
              <p className={style.name}>{u.firstname + " " + u.surname}</p>
              <button className="btn" onClick={() => setFollow(u.id, !u.followed)}>
                {u.followed ? "Unfollow" : "Follow"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
