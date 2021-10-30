import React from 'react';
import { Route } from 'react-router';
import loginFormContainer from './session/login_form_container';
import signupFormContainer from './session/signup_form_container';
import newsfeedContainer from "./newfeed/newsfeed_container"
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = (props) => {
    return <div>
        <h1>aceBook</h1>
        <AuthRoute exact path="/" component={loginFormContainer} />
        <AuthRoute path="/signup" component={signupFormContainer} />
        <ProtectedRoute path="/newsfeed" component={newsfeedContainer} />
    </div>
}

export default App;