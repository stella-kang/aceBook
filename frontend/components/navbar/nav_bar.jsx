import React from "react";

const NavBar = (props) => (
    <div>
        <button onClick={() => props.history.push(`/${props.currentUserId}/profile`)}>View Profile</button>
        <button onClick={() => props.history.push('/newsfeed')}>Newsfeed</button>
        <button onClick={() => props.logout()}>Logout</button>
    </div>
)

export default NavBar;