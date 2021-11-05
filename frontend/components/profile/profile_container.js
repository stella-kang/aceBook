import { connect } from 'react-redux';
import { fetchProfileComments } from '../../actions/comment_actions';
import { fetchUsers } from '../../actions/user&session_actions';
import { fetchProfilePosts, removePost } from '../../actions/post_actions';
import { openModal } from '../../actions/modal_actions';
import { createFriendRequest, fetchFriendRequests } from '../../actions/friends_actions';
import React from 'react';
import Profile from "./profile"

const mSTP = (state, ownProps) => ({
    users: state.entities.users,
    user: state.entities.users[ownProps.match.params.userId],
    posts: Object.values(state.entities.posts).reverse(),
    comments: Object.values(state.entities.comments),
    currentUser: state.entities.users[state.session.currentUserId],
    currentUserFriends: Object.values(state.entities.friends).filter(friend => friend.user_id === state.session.currentUserId),
    userFriends: Object.values(state.entities.friends).filter(friend => friend.user_id === ownProps.match.params.userId),
    friends: Object.values(state.entities.friends)
})

const mDTP = (dispatch, ownProps) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchProfilePosts: () => dispatch(fetchProfilePosts(ownProps.match.params.userId)),
    removePost: (postId) => dispatch(removePost(postId)),
    fetchProfileComments: () => dispatch(fetchProfileComments(ownProps.match.params.userId)),
    fetchProfileFriends: () => dispatch(fetchFriendRequests(ownProps.match.params.userId)),
    fetchCurrentUserFriends: (userId) => dispatch(fetchFriendRequests(userId)),
    createFriendRequest: (friend) => createFriendRequest(friend),

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
});

export default connect(mSTP, mDTP)(Profile)