import React from "react";
import { Link } from "react-router-dom";


class NavBar extends React.Component {
    handleDropdownClick(e) {
        e.stopPropagation();
        const menu = document.querySelector(".dropdown-content");
        const menuButton = document.getElementById("dropdown-button");
        if (menu.style.display === "") {
            menu.style.display = "block";
            menuButton.classList.add("focus");
        } else {
            menu.style.display = "";
            menuButton.classList.remove("focus");
        }
    }

    render() {
        return (<div className="nav-bar">
            <input type="text" placeholder="Search aceBook" id="search-bar" />

            <div className="middle-icons" onClick={(() => this.props.history.push('/newsfeed'))}>
                <button 
                    id="newsfeed-nav-icon" 
                    className={this.props.location.pathname === `/newsfeed` ? "current-url" : null} 
                    disabled={this.props.location.pathname === `/newsfeed` ? true : false}>
                    <i className="fas fa-home fa-2x"></i>
                    <div></div>
                </button>
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

                <div className="main-dropdown-menu" >
                    <button id="dropdown-button" onClick={this.handleDropdownClick}>
                        <i className="fas fa-caret-down fa-2x"></i>
                    </button>

                    <div className="dropdown-content">
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