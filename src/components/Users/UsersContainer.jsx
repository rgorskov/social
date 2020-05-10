import { connect } from 'react-redux';
import React from 'react';
import * as axios from 'axios';
import Users from './Users';
import {
  setFollofAC,
  setUsersAC,
  setCurrentPageAC,
  setUsersCountAC,
  setIsLoadingAC,
} from '../../redux/users-reducer';
// import style from "./Settings.module.css";

class UsersContainer extends React.Component {
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
    this.props.setIsLoading(true);
    return axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${currentPage}`
      )
      .then((response) => {
        this.props.setIsLoading(false);
        this.props.setUsers(response.data.items);
        return response;
      });
  }

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChange={this.onPageChange.bind(this)}
        setFollow={this.props.setFollow}
        users={this.props.users}
        isLoading={this.props.isLoading}
      />
    );
  }
}

const mapsStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
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
    },
    setIsLoading: (isLoading) => {
      dispatch(setIsLoadingAC(isLoading));
    },
  };
};

export default connect(mapsStateToProps, mapDispatchToProps)(UsersContainer);
