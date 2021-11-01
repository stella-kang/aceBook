import React from 'react';
import loginFormContainer from './session/login_form_container';
import signupFormContainer from './session/signup_form_container';
import newsfeedContainer from "./newfeed/newsfeed_container"
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import profileContainer from "./profile/profile_container"

const App = (props) => {

    return <div>
        <h1>aceBook</h1>
        <AuthRoute path="/signup" component={signupFormContainer} />
        <ProtectedRoute path="/newsfeed" component={newsfeedContainer} />
        <ProtectedRoute path="/:userId/profile" component={profileContainer}/>
        <AuthRoute path="/" component={loginFormContainer} />
    </div>
}

export default App;