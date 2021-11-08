import React from 'react';

class FriendButton extends React.Component {
    constructor(props) {
        super(props);

        this.handleCreateFriendRequest = this.handleCreateFriendRequest.bind(this);
        this.handleDeleteFriendRequest = this.handleDeleteFriendRequest.bind(this);
        this.handleUpdateFriendRequest = this.handleUpdateFriendRequest.bind(this);
        this.handleDropDownClick = this.handleDropDownClick.bind(this);
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
        const requests = this.props.friends.filter(friend => {
            return (friend.user_id === this.props.user.id && friend.friend_id === this.props.currentUser.id) || (friend.user_id === this.props.currentUser.id && friend.friend_id === this.props.user.id)
        })

        requests.forEach(request => {
            this.props.deleteFriendRequest(request.id)
        })
    }

    handleUpdateFriendRequest(e) {
        let originalRequest = this.props.friends.find(friend => friend.friend_id === this.props.currentUser.id && friend.user_id === this.props.user.id)

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

        const friendRequestMenu = document.getElementById(`friend-request-content-${this.props.user.id}`);
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
            if (this.props.friends.some(friend => friend.friend_id === this.props.user.id && friend.user_id == this.props.currentUser.id && friend.status === true)) {
                friendButton = <button id="friends-approved" onClick={this.handleDropDownClick}>
                    {this.props.buttonType === "profile" ? <i className="fas fa-user-check"></i>: null}
                    <span>Friends</span>
                </button>

                friendButtonDropdown = <div className="friend-request-content" id={`friend-request-content-${this.props.user.id}`}>
                    <div>
                        <button onClick={this.handleDeleteFriendRequest}>
                            {this.props.buttonType === "profile" ? <i className="fas fa-user-minus"></i> : null}
                            <span>Unfriend</span>
                        </button>
                    </div>
                </div>
            } else if (this.props.friends.some(friend => friend.friend_id === this.props.user.id && friend.user_id == this.props.currentUser.id && friend.status === false)) {
                friendButton = <button id="cancel-button" onClick={this.handleDeleteFriendRequest}>
                    {this.props.buttonType === "profile" ? <i className="fas fa-user-minus"></i> : null}
                    <span>Cancel Request</span>
                </button>
            } else if (this.props.friends.some(friend => (friend.friend_id === this.props.currentUser.id && friend.user_id === this.props.user.id && friend.status === false))) {
                friendButton = <button id="respond-button" onClick={this.handleDropDownClick}>
                    {this.props.buttonType === "profile" ? <i className="fas fa-user-plus"></i> : null}
                    <span>Respond</span>
                </button>

                friendButtonDropdown = <div className="friend-request-content" id={`friend-request-content-${this.props.user.id}`}>
                    <div>
                        <button onClick={this.handleUpdateFriendRequest}>Confirm</button>
                        <button onClick={this.handleDeleteFriendRequest}>Delete request</button>
                    </div>
                </div>
            } else if (!(this.props.friends.some(friend => friend.friend_id === this.props.user.id && friend.user_id === this.props.currentUser.id && friend.status === true))) {
                friendButton = <button id="add-friend-button" onClick={this.handleCreateFriendRequest}>
                    { this.props.buttonType === "profile" ? <i className="fas fa-user-plus"></i> : null}
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