import { connect } from "react-redux";
import Users from "./Users";
import { setFollofAC, setUsersAC, setCurrentPageAC, setUsersCountAC } from "../../redux/users-reducer";
// import style from "./Settings.module.css";

const mapsStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFollow: (userId, follow) => {
      dispatch(setFollofAC(userId, follow));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setUsersCount: (totalUsersCount) => {
      dispatch(setUsersCountAC(totalUsersCount));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage));
    }
  };
};

export default connect(mapsStateToProps, mapDispatchToProps)(Users);
