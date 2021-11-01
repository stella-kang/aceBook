import * as NewsfeedApiUtil from "../util/newfeed_util"
import * as ProfileApiUtil from "../util/profile_util"

export const RECEIVE_POSTS = "RECEIVE_POSTS";

const receivePosts= (posts) => ({
    type: RECEIVE_POSTS,
    posts
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