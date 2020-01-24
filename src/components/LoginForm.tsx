import * as React from 'react';
import {Field , reduxForm} from 'redux-form';

const ILoginForm : React.FC = (props : any) => {

    const {handleSubmit} = props;

    return (
        <div className="card">
            <h2 className="text-center">Hi 👋! Welcome to 😻UsePay</h2>
            {/* <p className="text-center">You can access to all your donation details</p> */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <Field name="email" type="email"  component="input"/>
                </div>
                <div>
                    <label>Password</label>
                    <Field name="password" type="password" component="input" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

const ILoginFormRedux = reduxForm({
    form : 'LoginForm'
})(ILoginForm)

export default ILoginFormRedux;