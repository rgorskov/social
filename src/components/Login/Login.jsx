import React from 'react';
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

const Login = () => {
    const onSubmit = ({ email, password, rememberMe }) => {
        debugger;
        login({ email, password, rememberMe })();
    };
    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit} />
        </div>
    );
};

export default Login;
