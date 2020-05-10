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
  componentDidMount() {
    this.requestUsers(this.props.currentPage).then((response) => {
      this.props.setUsersCount(response.data.totalCount);
    });
  }

  onPageChange(newPage) {
    this.requestUsers(newPage);
  }

  requestUsers(currentPage) {
    this.props.setCurrentPage(currentPage);
    return axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${currentPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        return response;
      });
  }

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = Array.from(new Array(pagesCount), (x, i) => i + 1);
    return (
      <div>
        <div className={style.pagination}>
          {pages.map((p) => {
            let className = style.pageNum;
            if (this.props.currentPage == p) {
              className += " " + style.active;
            }
            return (
              <button
                key={p}
                className={className}
                onClick={() => {
                  this.onPageChange(p);
                }}
              >
                {p}
              </button>
            );
          })}
        </div>
        <div className={style.users}>
          {this.props.users.map((u) => {
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
      </div>
    );
  }
}

export default Users;
