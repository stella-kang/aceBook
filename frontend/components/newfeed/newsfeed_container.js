import { connect } from 'react-redux';
import { fetchNewsfeedComments, removeComment } from '../../actions/comment_actions';
import { fetchNewsfeedPosts, removePost } from '../../actions/post_actions';
import { openModal } from '../../actions/modal_actions';
import React from "react";
import Newsfeed from "./newsfeed"

const mSTP = (state, ownProps) => ({
    users: state.entities.users,
    posts: Object.values(state.entities.posts),
    currentUser: state.entities.users[state.session.currentUserId],
    comments: Object.values(state.entities.comments)
})

const mDTP = (dispatch, ownProps) => ({
    fetchNewsfeedPosts: () => dispatch(fetchNewsfeedPosts()),
    fetchNewsfeedComments: () => dispatch(fetchNewsfeedComments()),
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
        </button>)
})

export default connect(mSTP, mDTP)(Newsfeed);