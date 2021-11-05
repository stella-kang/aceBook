import React from 'react';
import FriendNotificationItem from './friend_notification_item';

export default class FriendNotificationList extends React.Component {
    compeonentDidMount() {

    }

    render() {
        const currentFriendRequests = this.props.friends.filter(friend => friend.friend_id === this.props.currentUserId && friend.status === false)

        return <ul>
            {currentFriendRequests.map(request => {
                return <FriendNotificationItem 
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