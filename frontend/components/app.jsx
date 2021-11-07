import React from 'react';
import splashGreeting from './greeting/greeting';
import Modal from "./modal/modal"
import { Switch } from 'react-router';
import newsfeedContainer from "./newfeed/newsfeed_container"
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import profileContainer from "./profile/profile_container"
import NavBarContainer from './navbar/nav_bar_container';
import {withRouter} from 'react-router-dom';

class App extends React.Component {
    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname !== this.props.location.pathname) window.scrollTo(0, 0);
    }

    handleCloseDropdown(e) {
        const menu = document.querySelector(".main-dropdown-content");
        const menuButton = document.getElementById("main-dropdown-button");
        const notifications = document.querySelector(".notifications-dropdown-content");
        const notificationsButton = document.getElementById("notifications-dropdown-button");
        const postMenu = document.querySelectorAll(".post-dropdown-content");
        const commentMenus = document.querySelectorAll(".comment-dropdown-content");
        const friendRequestMenu = document.getElementById("friend-request-content");
        const friendSectionMenu = document.querySelectorAll(".friend-section-dropdown-content")

        if (menu && menu.style.display === "block") {
            menu.style.display = "";
            menuButton.classList.remove("focus");
        }
        
        if (postMenu) {
            postMenu.forEach(el => el.style.display = "")
        }

        if (commentMenus) {
            commentMenus.forEach(el => {
                if (el.style.display === "block") el.style.display = "";
            })
        }

        if (friendRequestMenu && friendRequestMenu.style.display === "block") {
            friendRequestMenu.style.display = "";
        }

        if (notifications && notifications.style.display === "block") {
            notifications.style.display = "";
            notificationsButton.classList.remove("focus");
        }

        if (friendSectionMenu) {
            friendSectionMenu.forEach(el => el.style.display = "");
        }
    }

    render() {
        return <div className="app" onClick={this.handleCloseDropdown}>
            <Modal />
            <ProtectedRoute path="/" component={NavBarContainer} />
            <Switch>
                <AuthRoute exact path="/" component={splashGreeting} />
                <ProtectedRoute path="/newsfeed" component={newsfeedContainer} />
                <ProtectedRoute path="/:userId/profile" component={profileContainer} />
                {/* <AuthRoute component={splashGreeting} /> */}
            </Switch>
        </div>
    }
}

export default withRouter(App);