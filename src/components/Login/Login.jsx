import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validations';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} 
                validate={[required]}
                component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} 
                validate={[required]}
                component={Input}/>
            </div>
            <div>
            <Field  component={Input} name={"rememberMe"} type={"checkbox"}/>Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};
const LoginReduxForm = reduxForm ({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {}
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
            
    </div>
}

export default Login;