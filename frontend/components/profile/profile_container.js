import { connect } from 'react-redux';
import { fetchProfileComments, removeComment } from '../../actions/comment_actions';
import { fetchProfilePosts, removePost } from '../../actions/post_actions';
import { openModal } from '../../actions/modal_actions';
import React from 'react';
import Profile from "./profile"

const mSTP = (state, ownProps) => {
    return {users: state.entities.users,
    user: state.entities.users[ownProps.match.params.userId],
    posts: Object.values(state.entities.posts),
    comments: Object.values(state.entities.comments)}
}

const mDTP = (dispatch, ownProps) => ({
    fetchProfilePosts: () => dispatch(fetchProfilePosts(ownProps.match.params.userId)),
    fetchProfileComments: () => dispatch(fetchProfileComments(ownProps.match.params.userId)),
    removePost: (postId) => dispatch(removePost(postId)),

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