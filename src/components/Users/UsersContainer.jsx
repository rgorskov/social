import { connect } from 'react-redux';
import React from 'react';
import * as axios from 'axios';
import Users from './Users';
import {
  setFollow,
  setUsers,
  setCurrentPage,
  setUsersCount,
  setIsLoading,
} from '../../data/usersReducer';
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

let actionCreators = {
  setFollow,
  setUsers,
  setUsersCount,
  setCurrentPage,
  setIsLoading,
};

export default connect(mapsStateToProps, actionCreators)(UsersContainer);
