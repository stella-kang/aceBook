import React from "react";
import { withRouter } from 'react-router-dom'

class FriendNotificationItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleDeleteFriendRequest = this.handleDeleteFriendRequest.bind(this);
        this.handleUpdateFriendRequest = this.handleUpdateFriendRequest.bind(this);
    }

    handleDeleteFriendRequest(e) {
        this.props.deleteFriendRequest(this.props.request.id)
    }

    handleUpdateFriendRequest(e) {
        this.props.updateFriendRequest({
            user_id: this.props.request.user_id,
            friend_id: this.props.request.friend_id,
            status: true,
            id: this.props.request.id
        })

        this.props.createFriendRequest({
            user_id: this.props.currentUserId,
            friend_id: this.props.request.user_id,
            status: true
        })
    }

    render() {
        let requestor = this.props.users[this.props.request.user_id];

        if (requestor) {
            return <li id="list-notification-item">
                <div id="requestor-information" onClick={() => this.props.history.push(`/${requestor.id}/profile`)}>
                    {requestor.profile_picture ? <img src={requestor.profile_picture} /> : <img src={window.defaultProfile} />}
                    <span> {requestor.first_name} {requestor.last_name} sent you a friend request</span>
                </div>

                <div>
                    <button id="confirm-request-button" onClick={this.handleUpdateFriendRequest}>Confirm</button>
                    <button onClick={this.handleDeleteFriendRequest}>Delete</button>
                </div>
            </li>
        } else {
            return null;
        }
    }
}

export default withRouter(FriendNotificationItem);