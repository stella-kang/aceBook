import * as NewsfeedApiUtil from "../util/newfeed_util"
import * as ProfileApiUtil from "../util/profile_util"
import * as PostsApiUtil from "../util/posts_util"

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST"
export const DELETE_POST = "DELETE_POST"

const receivePosts = (posts) => ({
    type: RECEIVE_POSTS,
    posts
});

const deletePost = (postId) => ({
    type: DELETE_POST,
    postId
})

export const fetchNewsfeedPosts = () => dispatch => {
    return NewsfeedApiUtil.fetchNewsfeedContent()
        .then(
            res => dispatch(receivePosts(res.posts)),
            )
}

export const fetchProfilePosts = (userId) => dispatch => {
    return ProfileApiUtil.fetchProfileContent(userId)
        .then(
            res => { dispatch(receivePosts(res.posts)) }
        )
}

export const createPost = (formData) => dispatch => {
    return PostsApiUtil.createPost(formData)
}

export const updatePost = (formData) => dispatch => {
    return PostsApiUtil.updatePost(formData)
}

export const removePost = (postId) => dispatch => {
    return PostsApiUtil.deletePost(postId)
        .then(
            () => dispatch(deletePost(postId))
        )
}