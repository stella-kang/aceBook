import React from 'react';
import { withRouter } from 'react-router-dom';
import FriendButtonContainer from './friend_button_container';

class FriendItem extends React.Component {
    constructor(props) {
        super(props)

        this.handleDeleteFriendRequest = this.handleDeleteFriendRequest.bind(this);
        this.handleDropDownClick = this.handleDropDownClick.bind(this);
        this.redirectToProfilePage = this.redirectToProfilePage.bind(this);
    }

    redirectToProfilePage(e) {
        this.props.history.push(`/${this.props.friend.id}/profile`)
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
        const requests = this.props.friendRequests.filter(friend => {
            return (friend.user_id === this.props.friend.id && friend.friend_id === this.props.currentUserId) || (friend.user_id === this.props.currentUserId && friend.friend_id === this.props.friend.id)
        })

        requests.forEach(request => {
            this.props.deleteFriendRequest(request.id)
        })
    }

    render() {
        if (this.props.friend) {
            return <li className="profile-friend-list-item">
                <div className="friend-item-heading">
                    {this.props.friend.profile_picture ? <img onClick={this.redirectToProfilePage} src={this.props.friend.profile_picture} /> : 
                    <img onClick={this.redirectToProfilePage} src={window.defaultProfile} />}
                    
                    <span onClick={this.redirectToProfilePage}>{this.props.friend.first_name} {this.props.friend.last_name}</span>
                </div>

                {this.props.friendRequests.some(friend => friend.user_id === this.props.currentUserId && friend.friend_id == this.props.friend.id && friend.status === true) ? 
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
                </div> :  this.props.friend.id === this.props.currentUserId ? null : <FriendButtonContainer user={this.props.friend} buttonType="friends"/>}
            </li>
        } else {
            return null;
        }
    }
}

export default withRouter(FriendItem);