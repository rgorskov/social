import React from "react";
import style from "./Users.module.css";
import * as axios from "axios";
import defaultUserPhoto from "../../assets/images/user-photo.png";

// const Users = ({ users, setFollow, setUsers }) => {
//   if(!users.length) {
//     axios.get('https://social-network.samuraijs.com/api/1.0/users')
//       .then(response => {
//         setUsers(response.data.items);
//       });
//   }

//   return (
//     <div className={style.users}>
//       {users.map((u) => {
//         return (
//           <div className={style.item} key={u.id}>
//             <div className={style.photo}>
//               <img src={(u.photos.small !== null) ? u.photos.small : defaultUserPhoto} alt="User photo" />
//             </div>
//             <div className={style.info}>
//               <p className={style.name}>{u.name}</p>
//               <button className="btn" onClick={() => setFollow(u.id, !u.followed)}>
//                 {u.followed ? "Unfollow" : "Follow"}
//               </button>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

class Users extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.users.length == 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
    }
  }

  render() {
    return (
      <div className={style.users}>
        {this.props.users.map((u) => {
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
                  onClick={() => this.props.setFollow(u.id, !u.followed)}
                >
                  {u.followed ? "Unfollow" : "Follow"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Users;
