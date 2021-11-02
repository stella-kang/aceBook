import React from 'react';
import splashGreeting from './greeting/greeting';
import Modal from "./modal/modal"
import { Switch } from 'react-router';
import newsfeedContainer from "./newfeed/newsfeed_container"
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import profileContainer from "./profile/profile_container"
import NavBarContainer from './navbar/nav_bar_container';

const App = (props) => {
    
    return <div>
        <Modal />
        {/* <AuthRoute path="/signup" component={signupFormContainer} /> */}
        <ProtectedRoute path="/" component={NavBarContainer} />
        <Switch>
            <AuthRoute exact path="/" component={splashGreeting} />
            <ProtectedRoute path="/newsfeed" component={newsfeedContainer} />
            <ProtectedRoute path="/:userId/profile" component={profileContainer}/>
            <AuthRoute component={splashGreeting}/>
        </Switch>
    </div>
}

export default App;