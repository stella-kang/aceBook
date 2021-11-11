import React from 'react';
import FriendNotificationItem from './friend_notification_item';

const FriendNotificationList = (props) => {
    const currentFriendRequests = props.friends.filter(friend => friend.friend_id === props.currentUserId && friend.status === false)

    return <ul className="friend-request-list">
        {currentFriendRequests.map(request => {
            return <FriendNotificationItem 
                currentUserId={props.currentUserId}
                users={props.users}
                deleteFriendRequest={props.deleteFriendRequest}
                createFriendRequest={props.createFriendRequest}
                updateFriendRequest={props.updateFriendRequest}
                request={request}
                key={request.id}
            />
        })}
    </ul>
}

export default FriendNotificationList;