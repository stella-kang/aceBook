import { receiveComments } from "./comment_actions"
import { receivePosts } from "./post_actions"
import * as NewsfeedApiUtil from "../util/newfeed_util"

export const fetchNewsfeedContent = () => dispatch => {
    return NewsfeedApiUtil.fetchNewsfeedContent()
        .then(res => {
            dispatch(receiveComments(res.comments))
            dispatch(receivePosts(res.posts))
        })
}