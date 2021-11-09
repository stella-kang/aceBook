import * as LikeApiUtil from "../util/like_util"

export const RECEIVE_LIKE = "RECEIVE_LIKE"
export const DELETE_LIKE = "DELETE_LIKE"
export const RECEIVE_LIKES = "RECEIVE_LIKES"

const receiveLike = (like) => ({
    type: RECEIVE_LIKE,
    like
})

const deleteLike = (likeId) => ({
    type: DELETE_LIKE,
    likeId
})

const receiveLikes = (likes) => ({
    type: RECEIVE_LIKES,
    likes
}) 

export const fetchLikes = () => dispatch => {
    return LikeApiUtil.fetchLikes()
        .then(likes => dispatch(receiveLikes(likes))) 
}

export const createLike = (like) => dispatch => {
    return LikeApiUtil.createLike(like)
        .then(like => dispatch(receiveLike(like)))
}

export const removeLike = (likeId) => dispatch => {
    return LikeApiUtil.deleteLike(likeId)
        .then(() => dispatch(deleteLike(likeId)))
}