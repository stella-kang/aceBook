import * as NewsfeedApiUtil from "../util/newfeed_util"
import * as ProfileApiUtil from "../util/profile_util"
import * as PostsApiUtil from "../util/posts_util"

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST"
export const DELETE_POST = "DELETE_POST"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"
export const CLEAR_ERRORS = "CLEAR_ERRORS"

const receivePosts = (posts) => ({
    type: RECEIVE_POSTS,
    posts
});

const deletePost = (postId) => ({
    type: DELETE_POST,
    postId
})

const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

export const fetchNewsfeedPosts = () => dispatch => {
    return NewsfeedApiUtil.fetchNewsfeedPosts()
        .then(
            posts => dispatch(receivePosts(posts)),
            )
}

export const fetchProfilePosts = (userId) => dispatch => {
    return ProfileApiUtil.fetchProfilePosts(userId)
        .then(
            posts => dispatch(receivePosts(posts))
        )
}

export const createPost = (post) => dispatch => {
    return PostsApiUtil.createPost(post)
        .then(
            null,
            err => dispatch(receiveErrors(err.responseJSON))
        )
}

export const updatePost = (post) => dispatch => {
    return PostsApiUtil.updatePost(post)
        .then(
            null,
            err => dispatch(receiveErrors(err.responseJSON))
        )
}

export const removePost = (postId) => dispatch => {
    return PostsApiUtil.deletePost(postId)
        .then(
            () => dispatch(deletePost(postId))
        )
}