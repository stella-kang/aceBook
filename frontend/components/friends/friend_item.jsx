import React from 'react';
import { withRouter } from 'react-router-dom';
import FriendButtonContainer from './friend_button_container';

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
        // let request = this.props.friendRequests.find(friend => friend.user_id === this.props.currentUserId && friend.friend_id === this.props.friend.id)
        // let oppRequest = this.props.friendRequests.find(friend => friend.friend_id === this.props.currentUserId && friend.user_id === this.props.friend.id);

        // this.props.deleteFriendRequest(request.id);
        // this.props.deleteFriendRequest(oppRequest.id);

        const requests = this.props.friendRequests.filter(friend => {
            return (friend.user_id === this.props.friend.id && friend.friend_id === this.props.currentUserId) || (friend.user_id === this.props.currentUserId && friend.friend_id === this.props.friend.id)
        })

        requests.forEach(request => {
            this.props.deleteFriendRequest(request.id)
        })
    }

    render() {
        if (this.props.friend) {
            // let button;

            // if (!this.props.friendRequests.some(friend => (friend.user_id === this.props.friend.id && friend.friend_id === this.props.currentUserId) || (friend.user_id === this.props.currentUserId && this.props.friend_id == this.props.friend.id))) {
            //     button = <button onClick={this.handleCreateFriendRequest}>
            //         <i className="fas fa-user-plus"></i>
            //         <span>Add Friend</span>
            //     </button>
            // } else if (this.props.friendRequests.some(friend => friend.user_id === this.props.currentUserId && friend.friend_id === this.props.friend.id && friend.status === false)) {
            //     button = <button onClick={this.handleDeleteFriendRequest}>
            //         <i className="fas fa-user-minus"></i>
            //         <span>Cancel Request</span>
            //     </button>
            // } else if (this.props.friendRequests.some(friend => friend.user_id === this.props.friend.id && friend.friend_id == this.props.currentUserId && friend.status === false)) {
            //     button = <div>
            //         <button onClick={this.handleDropDownClick}>
            //             <i className="fas fa-user-plus"></i>
            //             <span>Respond</span>
            //         </button>

            //         <div id="friend-request-content">
            //             <div>
            //                 <button onClick={this.handleUpdateFriendRequest}>Confirm</button>
            //                 <button onClick={this.handleDeleteFriendRequest}>Delete request</button>
            //             </div>
            //         </div>
            //     </div>
            // }

            return <li className="profile-friend-list-item">
                <div className="friend-item-heading">
                    {this.props.friend.profile_picture ? <img onClick={() => this.props.history.push(`/${this.props.friend.id}/profile`)} src={this.props.friend.profile_picture} /> : 
                    <img onClick={() => this.props.history.push(`/${this.props.friend.id}/profile`)} src={window.defaultProfile} />}
                    
                    <span onClick={() => this.props.history.push(`/${this.props.friend.id}/profile`)}>{this.props.friend.first_name} {this.props.friend.last_name}</span>
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