import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import Profile from './Profile';
import {
    getUserProfile,
    getStatus,
    updateStatus,
} from '../../data/profileThunks';
import withAuthRedirect from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId || this.props.authUserId;
        if (userId) {
            this.props.getUserProfile(userId);
            this.props.getStatus(userId);
        }
    }

    render() {
        return (
            <>
                <Profile
                    userProfile={this.props.userProfile}
                    updateStatus={this.props.updateStatus}
                    status={this.props.status}
                />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        status: state.profilePage.status,
        authUserId: state.auth.userId,
    };
};

const mapDispatchToProps = {
    getUserProfile,
    getStatus,
    updateStatus,
};

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ProfileContainer);
