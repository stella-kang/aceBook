import React from "react";
import FriendItem from "./friend_item";

class FriendsSection extends React.Component {
    componentDidMount() {
        this.props.fetchFriendRequests();
    }

    render() {
        const userFriends = this.props.profileFriendRequests.filter(friend => friend.user_id === this.props.match.params.userId)

        return <ul className="profile-friend-section">
            {userFriends.map(friend => {
                return <FriendItem 
                    friendRequests={this.props.profileFriends}
                    friendRequest={friend} 
                    friend={this.props.users[friend.friend_id]}
                    key={friend.id} 
                    updateFriend={this.props.updateFriendRequest}
                    deleteFriend={this.props.deleteFriendRequest}
                    />
            })}
        </ul>
    }
}

export default FriendsSection;