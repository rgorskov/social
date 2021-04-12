import React from 'react';
import { connect } from 'react-redux';
import { setUserData } from '../../data/authActions';
import Header from './Header';
import * as axios from 'axios';
import { authApi } from '../../api/api';

class HeaderContainer extends React.Component {
    async componentDidMount() {
        if (!this.props.isAuth) {
            const authUserData = await authApi.checkAuthMe();
            const { id, email, login } = authUserData.data;
            this.props.setUserData(id, email, login);
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
