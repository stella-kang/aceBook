import * as NewsfeedApiUtil from "../util/newfeed_util"
import * as ProfileApiUtil from "../util/profile_util"
import * as PostsApiUtil from "../util/posts_util"

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST"
export const DELETE_POST = "DELETE_POST"
export const CLEAR_ALL_POSTS = "CLEAR_ALL_POSTS"

export const receivePosts = (posts) => ({
    type: RECEIVE_POSTS,
    posts
});

const receivePost = (post) => ({
    type: RECEIVE_POST,
    post
})

const deletePost = (postId) => ({
    type: DELETE_POST,
    postId
})

export const clearAllPosts = () => ({
    type: CLEAR_ALL_POSTS
})

// export const fetchNewsfeedPosts = () => dispatch => {
//     return NewsfeedApiUtil.fetchNewsfeedContent()
//         .then(
//             res => dispatch(receivePosts(res.posts)),
//             )
// }

export const fetchProfilePosts = (userId) => dispatch => {
    return ProfileApiUtil.fetchProfileContent(userId)
        .then(
            res => { dispatch(receivePosts(res.posts)) }
        )
}

export const createPost = (formData) => dispatch => {
    return PostsApiUtil.createPost(formData)
        .then(post => dispatch(receivePost(post)))
}

export const updatePost = (formData) => dispatch => {
    return PostsApiUtil.updatePost(formData)
        .then(post => dispatch(receivePost(post)))
}

export const removePost = (postId) => dispatch => {
    return PostsApiUtil.deletePost(postId)
        .then(
            () => dispatch(deletePost(postId))
        )
}