import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import * as axios from 'axios';
import { setUserProfile } from '../../data/profileActions';
import { withRouter } from 'react-router-dom';
import { profileApi } from '../../api/api';
// import style from "./Profile.module.css";

class ProfileContainer extends React.Component {
    async componentDidMount() {
        const userId = this.props.match.params.userId || 1238;
        const profile = await profileApi.getUserProfile(userId);
        this.props.setUserProfile(profile);
    }

    render() {
        return (
            <>
                <Profile userProfile={this.props.userProfile} />
            </>
        );
    }
}

const WithRoutDataProfileContainer = withRouter(ProfileContainer);

const mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
    };
};

const mapDispatchToProps = {
    setUserProfile,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WithRoutDataProfileContainer);
