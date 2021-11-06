import React from 'react';

class FriendItem extends React.Component {
    constructor(props) {
        super(props)
    }

    handleDropDownClick() {
        const friendRequestMenu = document.getElementById("friend-request-content");
        if (friendRequestMenu.style.display === "") {
            friendRequestMenu.style.display = "block";
        } else {
            friendRequestMenu.style.display = "";
        }
    }

    handleDeleteFriendRequest() {
        this.props.deleteFriendRequest(this.props.friend.id);

        let oppRequest = this.props.friendRequests.find(friend => friend.user_id === this.props.friend.id);
        this.props.deleteFriendRequest(oppRequest.id);
    }

    render() {
        let friendButton;
        let friendButtonDropdown;

        friendButton = <button onClick={this.handleDropDownClick}>
            <i className="fas fa-user-check"></i>
            <span>Friends</span>
        </button>

        friendButtonDropdown = <div id="friend-request-content">
            <div>
                <button onClick={this.handleDeleteFriendRequest}>
                    <i className="fas fa-user-minus"></i>
                    <span>Unfriend</span>
                </button>
            </div>
        </div>
        // ---
        // friendButton = <button onClick={this.handleDeleteFriendRequest}>
        //     <i className="fas fa-user-minus"></i>
        //     <span>Cancel Request</span>
        // </button>
        // ---
        // friendButton = <button onClick={this.handleCreateFriendRequest}>
        //         <i className="fas fa-user-plus"></i>
        //         <span>Add Friend</span>
        //     </button>

        if (this.props.friend) {
            return <li>
                {this.props.friend.profile_picture ? <img src={this.props.friend.profile_picture} /> : <img src={window.defaultProfile} />}
                <span>{this.props.friend.first_name} {this.props.friend.last_name}</span>
                {friendButton}
                {friendButtonDropdown}
            </li>
        } else {
            return null;
        }
    }
}

export default FriendItem;