import React from "react";
import FriendItem from "./friend_item";

class FriendsSection extends React.Component {
    // componentDidMount() {
    //     this.props.fetchFriendRequests();
    // }

    render() {
        const userFriends = this.props.profileFriendRequests.filter(friend => friend.user_id === parseInt(this.props.match.params.userId))

        return <div id="profile-friend-section">
            <div className="friend-section-heading">
                <h5>Friends</h5>
            </div>

            <ul className="profile-friend-list">
                {userFriends.map(friend => {
                    return <FriendItem
                        friendRequests={this.props.profileFriendRequests}
                        friendRequest={friend}
                        friend={this.props.users[friend.friend_id]}
                        key={friend.id}
                        deleteFriendRequest={this.props.deleteFriendRequest}
                    />
                })}
            </ul>
        </div>
    }
}

export default FriendsSection;