import React from 'react';
import loginFormContainer from './session/login_form_container';
import signupFormContainer from './session/signup_form_container';
import newsfeedContainer from "./newfeed/newsfeed_container"
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import profileContainer from "./profile/profile_container"
import NavBarContainer from './navbar/nav_bar_container';

const App = (props) => {

    return <div>
        <AuthRoute exact path="/" component={loginFormContainer} />
        <AuthRoute path="/signup" component={signupFormContainer} />
        <ProtectedRoute path="/" component={NavBarContainer} />
        <ProtectedRoute path="/newsfeed" component={newsfeedContainer} />
        <ProtectedRoute path="/:userId/profile" component={profileContainer}/>
    </div>
}

export default App;