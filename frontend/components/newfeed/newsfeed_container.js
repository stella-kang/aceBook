import { connect } from 'react-redux';
import { fetchNewsfeedPosts, removePost } from '../../actions/post_actions';
import { openModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/session_actions';
import React from "react";
import Newsfeed from "./newsfeed"

const mSTP = (state, ownProps) => ({
    posts: Object.values(state.entities.posts),
    currentUser: state.entities.users[state.session.currentUserId]
})

const mDTP = (dispatch, ownProps) => ({
    fetchNewsfeedPosts: () => dispatch(fetchNewsfeedPosts()),
    removePost: (postId) => dispatch(removePost(postId)),
    createPostFormModal: <button id="create-post-form-button" onClick={() => {
        dispatch(openModal("create_post"));
         }}>
    </button>,
    editPostFormModal: (postId) => (<button id="edit-post-form-button" onClick={() => {
        dispatch(openModal("edit_post", postId));
    }}>Test
    </button>)
})

export default connect(mSTP, mDTP)(Newsfeed);