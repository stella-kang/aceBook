import * as CommentApiUtil from "../util/comment_util"

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS"
export const RECEIVE_COMMENT = "RECEIVE_COMMENT"
export const DELETE_COMMENT = "DELETE_COMMENT"

export const receiveComments = (comments) => ({
    type: RECEIVE_COMMENTS,
    comments
})

const receiveComment = (comment) => ({
    type: RECEIVE_COMMENT,
    comment
})

const deleteComment = (commentId) => ({
    type: DELETE_COMMENT,
    commentId
})

export const createComment = (comment) => dispatch => {
    return CommentApiUtil.createComment(comment)
        .then(comment => dispatch(receiveComment(comment)))
}

export const editComment = (comment) => dispatch => {
    return CommentApiUtil.editComment(comment)
        .then(comment => dispatch(receiveComment(comment)))
}

export const removeComment = (commentId) => dispatch => {
    return CommentApiUtil.deleteComment(commentId)
        .then(() => dispatch(deleteComment(commentId)))
}