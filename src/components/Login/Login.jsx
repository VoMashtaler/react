import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Input, createField} from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validations';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import style from '../common/FormsControls/FormsControls.module.css'


const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} 
                validate={[required]}
                component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} type={"password"}
                validate={[required]}
                component={Input}/>
            </div>
            <div>
            <Field  component={Input} name={"rememberMe"} type={"checkbox"}/>Remember me
            </div>
            { captchaUrl && <img src={captchaUrl} alt="captcha"/>}
            { captchaUrl && createField("Symbols from image", "captcha", [required], Input, {})}
            { error && <div className={style.formSummaryError}> 
            {error}
            </div>}
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
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha );
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
            
    </div>
};

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login}) (Login);