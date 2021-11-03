import { connect } from 'react-redux';
import { fetchProfilePosts, removePost } from '../../actions/post_actions';
import React from 'react';
import Profile from "./profile"

const mSTP = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    posts: Object.values(state.entities.posts)
})

const mDTP = (dispatch, ownProps) => ({
    fetchProfilePosts: () => dispatch(fetchProfilePosts(ownProps.match.params.userId)),
    removePost: (postId) => dispatch(removePost(postId)),
    createPostFormModal: <button id="create-post-form-button" onClick={() => {
        dispatch(openModal("create_post"));
    }}>
    </button>,
    editPostFormModal: (postId) => (<button id="edit-post-form-button" onClick={() => {
        dispatch(openModal("edit_post", postId));
    }}>Test
    </button>)
});

export default connect(mSTP, mDTP)(Profile)