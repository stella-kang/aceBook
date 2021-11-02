import React from 'react';
import splashGreeting from './greeting/greeting';
import Modal from "./modal/modal"
import newsfeedContainer from "./newfeed/newsfeed_container"
import { Switch } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import profileContainer from "./profile/profile_container"
import NavBarContainer from './navbar/nav_bar_container';

const App = (props) => {
    
    return <div>
        <Modal />
        <Switch>
        <AuthRoute exact path="/" component={splashGreeting} />
        {/* <AuthRoute path="/signup" component={signupFormContainer} /> */}
        <ProtectedRoute path="/" component={NavBarContainer} />
        <ProtectedRoute path="/newsfeed" component={newsfeedContainer} />
        <ProtectedRoute path="/:userId/profile" component={profileContainer}/>
        </Switch>
    </div>
}

export default App;