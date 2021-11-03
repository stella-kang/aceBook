import React from "react";
import { Link } from "react-router-dom";


const NavBar = (props) => {
    const handleDropdownClick = (e) => {
        e.stopPropagation();
        const menu = document.getElementById("dropdown-content");
        const menuButton = document.getElementById("dropdown-button");
        if (menu.style.display === "") {
            menu.style.display = "block";
            menuButton.classList.add("focus");
        } else {
            menu.style.display = "";
            menuButton.classList.remove("focus");
        }
    } 

    return (<div className="nav-bar">
        <input type="text" placeholder="Search aceBook" id="search-bar" />
        <div className="middle-icons" onClick={(() => props.history.push('/newsfeed'))}>
            <button>
            <i className="fas fa-home fa-2x"></i>
            </button>
        </div>
        <div className="navbar-buttons">
            <button id="profile-button" onClick={() => props.history.push(`/${props.currentUserId}/profile`)}>
                {props.currentUser.profile_picture ? <img src={props.currentUser.profile_picture} /> : <img src={window.defaultProfile} />}
                <span>{props.currentUser.first_name} </span>
            </button>

            <div id="main-dropdown-menu" >
                <button id="dropdown-button" onClick={handleDropdownClick}>
                    <i className="fas fa-caret-down fa-2x"></i>
                </button>

                <div id="dropdown-content">
                    <div>
                        {/* <div id="dropdown-profile-link"> */}
                            <Link id="dropdown-profile-link" to={`/${props.currentUserId}/profile`}>
                                {props.currentUser.profile_picture ? <img src={props.currentUser.profile_picture} /> : <img src={window.defaultProfile} />}


                                <div id="profile-link-text">
                                    <span>{props.currentUser.first_name} {props.currentUser.last_name}</span>
                                    <span>See your profile</span>
                                </div>
                            </Link>
                        {/* </div> */}
                    </div>
                    <a onClick={() => props.logout()}>Logout</a>
                </div>
            </div>
        </div>
    </div>)
}

export default NavBar;