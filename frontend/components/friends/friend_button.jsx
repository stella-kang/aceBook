import React from 'react';

class FriendButton extends React.Component {
    constructor(props) {
        super(props);

        this.handleCreateFriendRequest = this.handleCreateFriendRequest.bind(this);
        this.handleDeleteFriendRequest = this.handleDeleteFriendRequest.bind(this);
        this.handleUpdateFriendRequest = this.handleUpdateFriendRequest.bind(this);
    }

    componentDidMount() {
        this.props.fetchFriends();
    }

    handleCreateFriendRequest(e) {
        this.props.createFriendRequest({
            user_id: this.props.currentUser.id,
            friend_id: this.props.user.id
        })
    }

    handleDeleteFriendRequest(e) {
        const requests = Object.values(this.props.friends).filter(friend => {
            return (friend.user_id === this.props.user.id && friend.friend_id === this.props.currentUser.id) || (friend.user_id === this.props.currentUser.id && friend.friend_id === this.props.user.id)
        })

        requests.forEach(request => {
            this.props.deleteFriendRequest(request.id)
        })
    }

    handleUpdateFriendRequest(e) {
        let originalRequest = this.props.userFriends.find(friend => friend.friend_id === this.props.currentUser.id)

        this.props.updateFriendRequest({
            user_id: originalRequest.user_id,
            friend_id: originalRequest.friend_id,
            status: true,
            id: originalRequest.id
        })

        this.props.createFriendRequest({
            user_id: this.props.currentUser.id,
            friend_id: this.props.user.id,
            status: true
        })
    }

    handleDropDownClick(e) {
        e.stopPropagation()

        const friendRequestMenu = document.getElementById("friend-request-content");
        if (friendRequestMenu.style.display === "") {
            friendRequestMenu.style.display = "block"
        } else {
            friendRequestMenu.style.display = ""
        }
    }

    render() {
        let friendButton;
        let friendButtonDropdown;

        if (this.props.user) {
            if (this.props.currentUserFriends.some(friend => friend.friend_id === this.props.user.id && friend.status === true)) {
                friendButton = <button id="friends-approved" onClick={this.handleDropDownClick}>
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
            } else if (this.props.currentUserFriends.some(friend => friend.friend_id === this.props.user.id && friend.status === false)) {
                friendButton = <button onClick={this.handleDeleteFriendRequest}>
                    <i className="fas fa-user-minus"></i>
                    <span>Cancel Request</span>
                </button>
            } else if (this.props.userFriends.some(friend => friend.friend_id === this.props.currentUser.id && friend.status === false)) {
                friendButton = <button onClick={this.handleDropDownClick}>
                    <i className="fas fa-user-plus"></i>
                    <span>Respond</span>
                </button>

                friendButtonDropdown = <div id="friend-request-content">
                    <div>
                        <button onClick={this.handleUpdateFriendRequest}>Confirm</button>
                        <button onClick={this.handleDeleteFriendRequest}>Delete request</button>
                    </div>
                </div>
            } else if (!(this.props.currentUserFriends.some(friend => friend.friend_id === this.props.user.id && friend.status === true))) {
                friendButton = <button onClick={this.handleCreateFriendRequest}>
                    <i className="fas fa-user-plus"></i>
                    <span>Add Friend</span>
                </button>
            }

            return <div>
                {friendButton}
                {friendButtonDropdown}
            </div>
        } else {
            return null;
        }
    }
}

export default FriendButton;