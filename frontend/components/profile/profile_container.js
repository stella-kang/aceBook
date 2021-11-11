import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user&session_actions';
import { fetchProfileContent } from "../../actions/newsfeed_profile_actions"
import { removePost, clearAllPosts } from '../../actions/post_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchFriendRequests } from '../../actions/friends_actions';
import { fetchLikes, createLike, removeLike } from '../../actions/like_actions';
import { fetchMessages, createChat } from '../../actions/message_chat_actions';
import React from 'react';
import Profile from "./profile"

const mSTP = (state, ownProps) => {
    return {
        users: state.entities.users,
        user: state.entities.users[ownProps.match.params.userId],
        currentUser: state.entities.users[state.session.currentUserId],
        posts: Object.values(state.entities.posts).reverse(),
        comments: Object.values(state.entities.comments),
        friends: Object.values(state.entities.friends),
        likes: Object.values(state.entities.likes),
        chats: Object.values(state.entities.chats)
    }
}



const mDTP = (dispatch, ownProps) => {
    return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchProfileContent: () => dispatch(fetchProfileContent(ownProps.match.params.userId)),
    clearPosts: () => dispatch(clearAllPosts()),
    removePost: (postId) => dispatch(removePost(postId)),
    fetchFriends: () => dispatch(fetchFriendRequests(ownProps.match.params.userId)),
    fetchLikes: () => dispatch(fetchLikes()),
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (likeId) => dispatch(removeLike(likeId)),
    fetchMessages: (chatId) => dispatch(fetchMessages(chatId)),
    createChat: (chat) => dispatch(createChat(chat)),

    createPostFormModal: <button id="create-post-form-button" onClick={() => {
        dispatch(openModal("create_post"));
        }}>
        </button>,
 
    editPostFormModal: (postId) => (<button id="edit-post-form-button" onClick={() => {
        dispatch(openModal("edit_post", postId));
        }}>
            <i className="fas fa-edit"></i>
            Edit post
        </button>),

    editUserModal: () => (<button id="edit-user-button" onClick={() => {
        dispatch(openModal("edit_user"))
        }}>
            <i className="fas fa-edit"></i>
            Edit Profile
        </button>
    )
}};

export default connect(mSTP, mDTP)(Profile)