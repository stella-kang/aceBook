import * as SessionApiUtil from "../util/session_util"

export const RECEIVE_USER = "RECEIVE_USER"
export const LOGOUT = "LOGOUT"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"
export const CLEAR_ERRORS = "CLEAR_ERRORS"

export const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
})

const logoutUser = () => ({
    type: LOGOUT
})

const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

export const signup = (formData) => dispatch => {
    SessionApiUtil.signup(formData)
        .then(
            (user) => dispatch(receiveUser(user)),
            (err) => dispatch(receiveErrors(err.responseJSON))
        )
}

export const login = (user) => dispatch => {
    SessionApiUtil.login(user)
        .then(
            (user) => dispatch(receiveUser(user)),
            (err) => dispatch(receiveErrors(err.responseJSON))
        )
}

export const logout = () => dispatch => {
    SessionApiUtil.logout()
        .then(
            () => dispatch(logoutUser()),
            (err) => dispatch(receiveErrors(err.responseJSON))
        )
}

export const edit = (formData) => dispatch => {
    SessionApiUtil.edit(formData)
        .then(
            (user) => dispatch(receiveUser(user)),
            (err) => dispatch(receiveErrors(err.responseJSON))
        )
}