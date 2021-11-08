import { connect } from 'react-redux';
import { fetchNewsfeedComments,} from '../../actions/comment_actions';
import { fetchUsers } from '../../actions/user&session_actions';
import { fetchNewsfeedPosts, removePost, clearAllPosts } from '../../actions/post_actions';
import { fetchNewsfeedContent } from '../../actions/newsfeed_profile_actions';
import { openModal } from '../../actions/modal_actions';
import React from "react";
import Newsfeed from "./newsfeed"

const mSTP = (state, ownProps) => ({
    users: state.entities.users,
    posts: Object.values(state.entities.posts).reverse(),
    currentUser: state.entities.users[state.session.currentUserId],
    comments: Object.values(state.entities.comments),
    friends: Object.values(state.entities.friends).filter(friend => friend.user_id === state.session.currentUserId && friend.status === true)
})

const mDTP = (dispatch, ownProps) => ({
    // fetchNewsfeedPosts: () => dispatch(fetchNewsfeedPosts()),
    // fetchNewsfeedComments: () => dispatch(fetchNewsfeedComments()),
    fetchNewsfeedContent: (num1, num2) => dispatch(fetchNewsfeedContent(num1, num2)),
    removePost: (postId) => dispatch(removePost(postId)),
    clearPosts: () => dispatch(clearAllPosts()),
    fetchUsers: () => dispatch(fetchUsers()),

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