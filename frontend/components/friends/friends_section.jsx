import React from "react";
import FriendItem from "./friend_item";

const FriendsSection = (props) => {
    const userFriends = props.profileFriendRequests.filter(friend => friend.user_id === parseInt(props.match.params.userId) && friend.status === true)

    return <div id="profile-friend-section">
        <div className="friend-section-heading">
            <h5>Friends</h5>
        </div>

        {userFriends.length !== 0 ? 
        <ul className="profile-friend-list">
            {userFriends.map(friend => {
                return <FriendItem
                    friendRequests={props.profileFriendRequests}
                    friendRequest={friend}
                    friend={props.users[friend.friend_id]}
                    key={friend.id}
                    currentUserId={props.currentUserId}
                    deleteFriendRequest={props.deleteFriendRequest}
                />
            })}
        </ul> : <span id="no-friends">This user does not have any friends.</span>}
    </div>
}

export default FriendsSection;