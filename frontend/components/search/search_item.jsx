import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchItem extends React.Component {
    constructor(props) {
        super(props)

        this.handleCreateFriendRequest = this.handleCreateFriendRequest.bind(this);
        this.handleDeleteFriendRequest = this.handleDeleteFriendRequest.bind(this);
        this.redirectToProfilePage = this.redirectToProfilePage.bind(this);
        this.handleUpdateFriendRequest = this.handleUpdateFriendRequest.bind(this);
        this.openChat = this.openChat.bind(this);
    }

    redirectToProfilePage(e) {
        this.props.history.push(`/${this.props.user.id}/profile`)
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

    handleUpdateFriendRequest(e) {
        let originalRequest = this.props.friendRequests.find(friend => friend.friend_id === this.props.currentUserId && friend.user_id === this.props.user.id)

        this.props.updateFriendRequest({
            user_id: originalRequest.user_id,
            friend_id: originalRequest.friend_id,
            status: true,
            id: originalRequest.id
        })

        this.props.createFriendRequest({
            user_id: this.props.currentUserId,
            friend_id: this.props.user.id,
            status: true
        })
    }

    openChat(e) {
        let chat = this.props.chats.find(chat => chat.user1_id === this.props.user.id || chat.user2_id === this.props.user.id)
        if (chat) {
            this.props.fetchMessages(chat.id);
            document.getElementById(`chatroom-${chat.id}`).style.display = "block";
            const currentChat = document.querySelector(".current-chat");
            if (currentChat) currentChat.classList.remove("current-chat");
            document.getElementById(`chat-close-button-${chat.id}`).classList.add("current-chat");
        } else {
            this.props.createChat({
                user1_id: this.props.currentUserId,
                user2_id: this.props.user.id
            })
        }
    }

    render() {
        let button

        if (this.props.user.id === this.props.currentUserId) {
            button = null;
        } else if (this.props.friendRequests.some(friend => (friend.user_id === this.props.currentUserId && friend.friend_id === this.props.user.id && friend.status === true))) {
            button = <button id="search-item-message" onClick={this.openChat}>
                <i className="fas fa-comment"></i>
            </button>
        } else if (this.props.friendRequests.some(friend => (friend.user_id === this.props.currentUserId && friend.friend_id === this.props.user.id && friend.status === false))) {
            button = <button id="search-item-cancel-request" onClick={this.handleDeleteFriendRequest}>
                <i className="fas fa-user-minus"></i>
            </button>
        }  else if (this.props.friendRequests.some(friend => friend.friend_id === this.props.currentUserId && friend.user_id === this.props.user.id && friend.status === false)) {
            button = <button id="search-item-confirm-request" onClick={this.handleUpdateFriendRequest}>
                <i className="fas fa-user-plus"></i>
            </button>
        } else {
            button = <button id="search-item-send-request" onClick={this.handleCreateFriendRequest}>
                <i className="fas fa-user-plus"></i>
            </button>
        }

        return <li className="search-item">
            <div className="search-item-user-info">
                {this.props.user.profile_picture ? <img onClick={this.redirectToProfilePage} src={this.props.user.profile_picture}/> : 
                    <img onClick={this.redirectToProfilePage} src={window.defaultProfile}/>}
                <span onClick={this.redirectToProfilePage} >{this.props.user.first_name} {this.props.user.last_name}</span>
            </div>

            {button}

            {/* {this.props.friendRequests.some(friend => (friend.user_id === this.props.currentUserId && friend.friend_id === this.props.user.id && friend.status === true)) || this.props.user.id === this.props.currentUserId ? null :
                this.props.friendRequests.some(friend => (friend.user_id === this.props.currentUserId && friend.friend_id === this.props.user.id && friend.status === false)) ?
                <button id="search-item-cancel-request" onClick={this.handleDeleteFriendRequest}>
                    <i className="fas fa-user-minus"></i>
                </button> :
                <button id="search-item-send-request" onClick={this.handleCreateFriendRequest}>
                    <i className="fas fa-user-plus"></i>
                </button>
            } */}
        </li>
    }
}

export default withRouter(SearchItem);