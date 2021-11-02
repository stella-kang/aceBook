import React from 'react';
import LoginFormContainer from '../session/login_form_container';

const splashGreeting = (props) => {
    return <div id="splash-content">
        <div id="logo-content">
            <h1>aceBook</h1>
            <h3>Connect with friends and the world around you at aceBook</h3>
        </div>
            <LoginFormContainer />
        </div>
}

export default splashGreeting;