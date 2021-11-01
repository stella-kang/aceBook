import React from "react";

const NavBar = (props) => (
    <div>
        <button onClick={() => this.props.logout()}>Logout</button>
        <button onClick={() => this.props.history.push(`/${this.props.currentUserId}/profile`)}>View Profile</button>
    </div>
)

export default NavBar;