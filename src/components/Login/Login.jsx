import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../data/authThunks';
import { required } from '../../utils.js/validators';
import { Input } from '../common/ReduxFormFields/ReduxFormFields';

let LoginForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    type="text"
                    name="email"
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    type="password"
                    name="password"
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>
                <Field type="checkbox" name="rememberMe" component="input" />
            </div>
            <div>
                <button>Log in</button>
            </div>
        </form>
    );
};

LoginForm = reduxForm({ form: 'login' })(LoginForm);

const Login = ({ isAuth, login }) => {
    const onSubmit = ({ email, password, rememberMe }) => {
        login({ email, password, rememberMe });
    };

    if (isAuth) {
        return <Redirect to="/profile" />;
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});

const mapDispatchToProps = {
    login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
