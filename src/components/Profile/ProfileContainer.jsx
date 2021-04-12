import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import * as axios from 'axios';
import { setUserProfile } from '../../data/profileActions';
import { withRouter } from 'react-router-dom';
// import style from "./Profile.module.css";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId || 1238;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, {
        withCredentials: true,
      })
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
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
