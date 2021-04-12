import { connect } from 'react-redux';
import React from 'react';
import Users from './Users';
import {
    setFollow,
    setCurrentPage,
    setIsLoading,
    setUsers,
    setUsersCount,
} from '../../data/usersActions';
import { usersApi } from '../../api/api';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.requestUsers(this.props.currentPage).then((data) => {
            this.props.setUsersCount(data.totalCount);
        });
    }

    onPageChange(newPage) {
        this.requestUsers(newPage);
    }

    requestUsers(currentPage) {
        this.props.setCurrentPage(currentPage);
        this.props.setIsLoading(true);

        return usersApi
            .getAll(currentPage, this.props.pageSize)
            .then((data) => {
                this.props.setIsLoading(false);
                this.props.setUsers(data.items);
                return data;
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

let mapDispatchToProps = {
    setFollow,
    setUsers,
    setUsersCount,
    setCurrentPage,
    setIsLoading,
};

export default connect(mapsStateToProps, mapDispatchToProps)(UsersContainer);
