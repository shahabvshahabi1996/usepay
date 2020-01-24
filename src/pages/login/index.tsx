import * as React from 'react';
import Head from '../../components/head';
import LoginForm from '../../components/LoginForm';

const Login : React.FC = () => {
    return (
        <React.Fragment>
            <Head title="🔒 Login"/>
            {/* <Nav/> */}
            <div className="login-page-container">
                <div className="left-side">
                    <div className="d-flex align-items-center">
                        <span className="brand">😺</span>
                        <h1>UsePay</h1>
                    </div>
                    <div>
                        <h3>
                            <span className="text-bg">Login and access to all your payment details</span>
                        </h3>
                    </div>
                </div>
                <div className="right-side">
                    <LoginForm/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login;