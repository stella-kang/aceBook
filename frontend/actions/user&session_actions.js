import * as SessionApiUtil from "../util/session_util"
import * as UserApiUtil from "../util/user_util"

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const LOGOUT = "LOGOUT";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
})

export const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users
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
    return SessionApiUtil.signup(formData)
        .then(
            (user) => dispatch(receiveUser(user)),
            (err) => dispatch(receiveErrors(err.responseJSON))
        )
}

export const login = (user) => dispatch => {
    return SessionApiUtil.login(user)
        .then(
            (user) => dispatch(receiveUser(user)),
            (err) => dispatch(receiveErrors(err.responseJSON))
        )
}

export const logout = () => dispatch => {
    return SessionApiUtil.logout()
        .then(
            () => dispatch(logoutUser()),
            (err) => dispatch(receiveErrors(err.responseJSON))
        )
}

export const edit = (formData) => dispatch => {
    return SessionApiUtil.edit(formData)
        .then(
            (user) => dispatch(receiveUser(user)),
            (err) => dispatch(receiveErrors(err.responseJSON))
        )
}

export const fetchUser = (userId) => dispatch => {
    return UserApiUtil.fetchUser(userId)
        .then((user) => dispatch(receiveUser(user)))
}

export const fetchUsers = () => dispatch => {
    return UserApiUtil.fetchUsers()
        .then((users) => {
            dispatch(receiveUsers(users))
        })
}