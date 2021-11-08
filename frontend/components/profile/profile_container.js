import { connect } from 'react-redux';
import { fetchProfileComments } from '../../actions/comment_actions';
import { fetchUsers } from '../../actions/user&session_actions';
import { fetchProfilePosts, removePost, clearAllPosts } from '../../actions/post_actions';
import { openModal } from '../../actions/modal_actions';
import { createFriendRequest, fetchFriendRequests, removeFriendRequest, editFriendRequest } from '../../actions/friends_actions';
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
        // currentUserFriends: Object.values(state.entities.friends).filter(friend => friend.user_id === state.session.currentUserId),
        // userFriends: Object.values(state.entities.friends).filter(friend => friend.user_id === parseInt(ownProps.match.params.userId))
    }
}



const mDTP = (dispatch, ownProps) => {
    const profileId = parseInt(ownProps.match.params.userId)
    return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchProfilePosts: () => dispatch(fetchProfilePosts(ownProps.match.params.userId)),
    clearPosts: () => dispatch(clearAllPosts()),
    removePost: (postId) => dispatch(removePost(postId)),
    fetchProfileComments: () => dispatch(fetchProfileComments(ownProps.match.params.userId)),
    // fetchProfileFriends: () => dispatch(fetchFriendRequests(ownProps.match.params.userId)),
    // fetchCurrentUserFriends: (userId) => dispatch(fetchFriendRequests(userId)),
    // fetchFriends: () => dispatch(fetchFriendRequests(ownProps.match.params.userId)),
    // createFriendRequest: (friend) => dispatch(createFriendRequest(friend)),
    // deleteFriendRequest: (requestId) => dispatch(removeFriendRequest(requestId)),
    // updateFriendRequest: (friend) => dispatch(editFriendRequest(friend)),

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