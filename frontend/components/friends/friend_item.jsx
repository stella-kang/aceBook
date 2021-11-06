import React from 'react';

class FriendItem extends React.Component {
    constructor(props) {
        super(props)

        this.handleDeleteFriendRequest = this.handleDeleteFriendRequest.bind(this);
        this.handleDropDownClick = this.handleDropDownClick.bind(this);
    }

    handleDropDownClick(e) {
        e.stopPropagation();

        const friendRequestMenu = document.getElementById(`friend-section-dropdown-content-${this.props.friend.id}`);
        if (friendRequestMenu.style.display === "") {
            friendRequestMenu.style.display = "block";
        } else {
            friendRequestMenu.style.display = "";
        }
    }

    handleDeleteFriendRequest(e) {
        let oppRequest = this.props.friendRequests.find(friend => friend.user_id === this.props.friendRequest.friend_id);

        debugger

        this.props.deleteFriendRequest(this.props.friendRequest.id);
        this.props.deleteFriendRequest(oppRequest.id);
    }

    render() {
        if (this.props.friend) {
            return <li className="profile-friend-list-item">
                <div className="friend-item-heading">
                    {this.props.friend.profile_picture ? <img src={this.props.friend.profile_picture} /> : <img src={window.defaultProfile} />}
                    <span>{this.props.friend.first_name} {this.props.friend.last_name}</span>
                </div>

                <div className="friend-section-dropdown-menu">
                    <button id="friend-section-dropdown-button" onClick={this.handleDropDownClick}>
                        <i className="fas fa-ellipsis-h fa-1x"></i>
                    </button>

                    <div className="friend-section-dropdown-content" id={`friend-section-dropdown-content-${this.props.friend.id}`}>
                        <div>
                            <button onClick={this.handleDeleteFriendRequest}>
                                <i className="fas fa-user-minus"></i>
                                <span>Unfriend</span>
                            </button>
                        </div>
                    </div>
                </div>
            </li>
        } else {
            return null;
        }
    }
}

export default FriendItem;