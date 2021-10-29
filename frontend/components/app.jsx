import React from 'react';
import { Route } from 'react-router';
import loginFormContainer from './session/login_form_container';
import signupFormContainer from './session/signup_form_container';

const App = (props) => {
    return <div>
        <h1>aceBook</h1>
        <Route exact path="/login" component={loginFormContainer} />
        <Route exact path="/signup" component={signupFormContainer} />
    </div>
}

export default App;