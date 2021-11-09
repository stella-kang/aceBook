import { receiveComments } from "./comment_actions"
import { receivePosts } from "./post_actions"
import * as NewsfeedApiUtil from "../util/newfeed_util"
import * as ProfileApiUtil from "../util/profile_util"

export const fetchNewsfeedContent = () => dispatch => {
    return NewsfeedApiUtil.fetchNewsfeedContent()
        .then(res => {
            dispatch(receiveComments(res.comments))
            dispatch(receivePosts(res.posts))
        })
}

export const fetchProfileContent = (userId) => dispatch => {
    return ProfileApiUtil.fetchProfileContent(userId)
        .then(res => {
            dispatch(receiveComments(res.comments))
            dispatch(receivePosts(res.posts))
        })
}