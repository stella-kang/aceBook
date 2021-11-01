import * as UserApiUtil from "../util/user_util"

export const UPDATE_USER = "UPDATE_USER"

const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
})

export const updateUser = (user) => dispatch => {
    return UserApiUtil.updateUser(user)
        .then(
            null,
            (err) => dispatch(receiveErrors(err.responseJSON))
        )
}