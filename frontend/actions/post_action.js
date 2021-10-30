import * as NewsfeedApiUtil from "../util/newfeed_util"

export const RECEIVE_NEWSFEED_POSTS = "RECEIVE_NEWSFEED_POSTS"

const receiveNewsfeedPosts = (posts) => ({
    type: RECEIVE_NEWSFEED_POSTS,
    posts
})

export const fetchNewsfeedPosts = () => dispatch => {
    return NewsfeedApiUtil.fetchNewsfeedPosts()
        .then(
            posts => dispatch(receiveNewsfeedPosts(posts)),
            )
}