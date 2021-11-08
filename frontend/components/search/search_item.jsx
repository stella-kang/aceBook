import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchItem extends React.Component {
    constructor(props) {
        super(props)

        this.handleCreateFriendRequest = this.handleCreateFriendRequest.bind(this);
        this.handleDeleteFriendRequest = this.handleDeleteFriendRequest.bind(this);
    }

    handleCreateFriendRequest(e) {
        this.props.createFriendRequest({
            user_id: this.props.currentUserId,
            friend_id: this.props.user.id
        })
    }

    handleDeleteFriendRequest(e) {
        const request = this.props.friendRequests.find(request => request.user_id === this.props.currentUserId && request.friend_id === this.props.user.id)

        this.props.deleteFriendRequest(request.id);
    }

    render() {
        debugger
        return <li className="search-item">
            <div className="search-item-user-info">
                {this.props.user.profile_picture ? <img onClick={() => this.props.history.push(`/${this.props.user.id}/profile`)} src={this.props.user.profile_picture}/> : 
                    <img onClick={() => this.props.history.push(`/${this.props.user.id}/profile`)} src={window.defaultProfile}/>}
                <span>{this.props.user.first_name} {this.props.user.last_name}</span>
            </div>


            {this.props.friendRequests.some(friend => (friend.user_id === this.props.currentUserId && friend.friend_id === this.props.user.id && friend.status === true)) || this.props.user.id === this.props.currentUserId ? null :
                this.props.friendRequests.some(friend => (friend.user_id === this.props.currentUserId && friend.friend_id === this.props.user.id && friend.status === false)) ?
                <button id="search-item-cancel-request" onClick={this.handleDeleteFriendRequest}>
                    <i className="fas fa-user-minus"></i>
                </button> :
                <button id="search-item-send-request" onClick={this.handleCreateFriendRequest}>
                    <i className="fas fa-user-plus"></i>
                </button>
            }
        </li>
    }
}

export default withRouter(SearchItem);