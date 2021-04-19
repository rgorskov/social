import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import Profile from './Profile';
import {
    getUserProfile,
    getStatus,
    updateStatus,
    changeProfilePhoto,
} from '../../data/profileThunks';

class ProfileContainer extends React.Component {
    loadUserProfile() {
        const userId = this.props.match.params.userId || this.props.authUserId;
        if (userId) {
            this.props.getUserProfile(userId);
            this.props.getStatus(userId);
        } else {
            this.props.history.push('/login');
        }
    }

    componentDidMount() {
        this.loadUserProfile();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.loadUserProfile();
        }
    }

    render() {
        return (
            <>
                <Profile
                    userProfile={this.props.userProfile}
                    updateStatus={this.props.updateStatus}
                    status={this.props.status}
                    changeProfilePhoto={this.props.changeProfilePhoto}
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
    changeProfilePhoto,
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ProfileContainer);
