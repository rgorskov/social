import { connect } from "react-redux";
import Users from "./Users";
import { setFollofAC, setUsersAC } from "../../redux/users-reducer";
// import style from "./Settings.module.css";

const mapsStateToProps = (state) => {
  return {
    users: state.usersPage.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFollow: (userId, follow) => {
      dispatch(setFollofAC(userId, follow));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    }
  };
};

export default connect(mapsStateToProps, mapDispatchToProps)(Users);
