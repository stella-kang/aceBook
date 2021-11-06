import React from 'react';
import FriendNotificationItem from './friend_notification_item';

export default class FriendNotificationList extends React.Component {

    render() {
        const currentFriendRequests = this.props.friends.filter(friend => friend.friend_id === this.props.currentUserId && friend.status === false)

        return <ul className="friend-request-list">
            {currentFriendRequests.map(request => {
                return <FriendNotificationItem 
                    currentUserId={this.props.currentUserId}
                    users={this.props.users}
                    deleteFriendRequest={this.props.deleteFriendRequest}
                    createFriendRequest={this.props.createFriendRequest}
                    updateFriendRequest={this.props.updateFriendRequest}
                    request={request}
                    key={request.id}
                />
            })}
        </ul>
    }
}