import { connect } from 'react-redux';
import React from 'react';
import Users from './Users';
import { getUsers, followUser } from '../../data/usersThunks';
import { setCurrentPage } from '../../data/usersActions';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.requestUsers(1);
    }

    onPageChange(newPage) {
        this.props.setCurrentPage(newPage);
        this.requestUsers(newPage);
    }

    requestUsers(currentPage) {
        this.props.getUsers(currentPage, this.props.pageSize);
    }

    render() {
        return (
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChange={this.onPageChange.bind(this)}
                users={this.props.users}
                isLoading={this.props.isLoading}
                followUser={this.props.followUser}
                followingInProgress={this.props.followingInProgress}
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
        followingInProgress: state.usersPage.followingInProgress,
    };
};

let mapDispatchToProps = {
    followUser,
    getUsers,
    setCurrentPage,
};

export default compose(
    withAuthRedirect,
    connect(mapsStateToProps, mapDispatchToProps)
)(UsersContainer);
