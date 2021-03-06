import React from "react";
import FriendNotificationListContainer from "../friends/friend_notification_list_container";
import SearchFormContainer from "../search/search_form_container";
import { Link } from "react-router-dom";


class NavBar extends React.Component {
    componentDidMount() {
        this.props.fetchCurrentFriendRequests(this.props.currentUserId);
    }

    handleDropdownMainMenu(e) {
        e.stopPropagation();
        const menu = document.querySelector(".main-dropdown-content");
        const menuButton = document.getElementById("main-dropdown-button");
        const notifications = document.querySelector(".notifications-dropdown-content");
        const notificationsButton = document.getElementById("notifications-dropdown-button");
        if (menu.style.display === "") {
            menu.style.display = "block";
            menuButton.classList.add("focus");
            notifications.style.display = "";
            notificationsButton.classList.remove("focus");
        } else {
            menu.style.display = "";
            menuButton.classList.remove("focus");
        }
    }

    handleDropdownNotifications(e) {
        e.stopPropagation();
        const notifications = document.querySelector(".notifications-dropdown-content");
        const notificationsButton = document.getElementById("notifications-dropdown-button");
        const menu = document.querySelector(".main-dropdown-content");
        const menuButton = document.getElementById("main-dropdown-button");
        if (notifications.style.display === "") {
            notifications.style.display = "block";
            notificationsButton.classList.add("focus");
            menu.style.display = "";
            menuButton.classList.remove("focus");
        } else {
            notifications.style.display = "";
            notificationsButton.classList.remove("focus");
        }
    }

    render() {
        return (<div className="nav-bar">
            <div className="search-form-div">
                <img id="logo" src={window.logo} onClick={() => this.props.history.push('/newsfeed')}/>
                <SearchFormContainer />
            </div>

            <div className="middle-icons">
                <button
                    id="newsfeed-nav-icon"
                    className={this.props.location.pathname === `/newsfeed` ? "current-url" : null}
                    disabled={this.props.location.pathname === `/newsfeed` ? true : false}
                    onClick={(() => this.props.history.push('/newsfeed'))}
                    >
                        <i className="fas fa-home fa-2x"></i>
                        <div></div>
                </button>

                <a href="https://github.com/stella-kang/aceBook" target="_blank">
                    <img src={window.githubLogo} />
                </a>

                <a href="https://www.linkedin.com/in/stella-kang-33302b127/" target="_blank">
                    <img src={window.linkedinLogo} />
                </a>

                <a href="https://angel.co/u/stella-kang-2" target="_blank">
                    <img src={window.angelLogo} />
                </a>

                <a href="https://stellakang.dev/" target="_blank">
                    <i id="portfolio-icon" class="fas fa-user-alt fa-2x"></i>
                </a>
            </div>

            <div className="navbar-buttons">
                <button
                    id="profile-button"
                    onClick={() => this.props.history.push(`/${this.props.currentUserId}/profile`)}
                    className={this.props.location.pathname === `/${this.props.currentUserId}/profile` ? "current-url" : null}
                    disabled={this.props.location.pathname === `/${this.props.currentUserId}/profile` ? true : false}>
                        {this.props.currentUser.profile_picture ? <img src={this.props.currentUser.profile_picture} /> : <img src={window.defaultProfile} />}

                        <span>{this.props.currentUser.first_name} </span>
                </button>

                <div className="notifications-dropdown-menu">
                    <button id="notifications-dropdown-button" onClick={this.handleDropdownNotifications }>
                        <i className="fas fa-bell"></i>
                    </button>

                    <div className="notifications-dropdown-content">
                        {this.props.currentUserReceivedRequests.length === 0 ? <div id="no-notifications">No friend requests.</div> : <FriendNotificationListContainer />}
                    </div>
                </div>

                <div className="main-dropdown-menu" >
                    <button id="main-dropdown-button" onClick={this.handleDropdownMainMenu}>
                        <i className="fas fa-caret-down fa-2x"></i>
                    </button>

                    <div className="main-dropdown-content">
                        <div>
                            <Link
                                id="dropdown-profile-link"
                                to={`/${this.props.currentUserId}/profile`}>

                                {this.props.currentUser.profile_picture ? <img src={this.props.currentUser.profile_picture} /> : <img src={window.defaultProfile} />}


                                <div id="profile-link-text">
                                    <span>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</span>
                                    <span>See your profile</span>
                                </div>
                            </Link>
                        </div>
                        <div id="dropdown-separator"></div>
                        <button id="logout-button" onClick={() => this.props.logout()}>
                            <i className="fas fa-door-open fa-2x"></i>
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default NavBar;
