import React from 'react';
import { Route } from 'react-router';
import loginFormContainer from './session/login_form_container';
import signupFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util';

const App = (props) => {
    return <div>
        <h1>aceBook</h1>
        <AuthRoute path="/login" component={loginFormContainer} />
        <AuthRoute path="/signup" component={signupFormContainer} />
    </div>
}

export default App;