import React from 'react';
import { connect } from 'react-redux';
import { setUserData } from '../../data/authActions';
import Header from './Header';
import * as axios from 'axios';
import { authApi } from '../../api/api';

class HeaderContainer extends React.Component {
    componentDidMount() {
        if (!this.props.isAuth) {
            authApi.checkAuthMe().then((data) => {
                const { id, email, login } = data.data;
                this.props.setUserData(id, email, login);
            });
            // axios
            //     .get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            //         withCredentials: true,
            //     })
            //     .then((response) => {

            //     });
        }
    }

    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

const mapDispatchToProps = {
    setUserData,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
