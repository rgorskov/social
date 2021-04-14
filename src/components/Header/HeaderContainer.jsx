import React from 'react';
import { connect } from 'react-redux';
import { getAuthUserData, logout } from '../../data/authThunks';
import Header from './Header';

class HeaderContainer extends React.Component {
    componentDidMount() {
        if (!this.props.isAuth) {
            this.props.getAuthUserData();
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
    getAuthUserData,
    logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
