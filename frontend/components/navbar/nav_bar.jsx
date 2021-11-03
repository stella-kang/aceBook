import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => (
    <div id="nav-bar">
        <input type="text" placeholder="Search aceBook" id="search-bar"/>
        <button onClick={() => props.history.push(`/${props.currentUserId}/profile`)}>{props.currentUser.first_name} {props.currentUser.last_name}</button>
        <div id="topright-dropdown" >
            <i class="fas fa-caret-down fa-2x" id="dropdown-button"></i>
            <Link to={`/${props.currentUserId}/profile`}>View Profile</Link>
            <Link to='/newsfeed'>Newsfeed</Link>
            {/* <button onClick={() => props.history.push(`/${props.currentUserId}/profile`)}>View Profile</button>
            <button onClick={() => props.history.push('/newsfeed')}>Newsfeed</button> */}
            <button onClick={() => props.logout()}>Logout</button>
        </div>
    </div>
)

export default NavBar;