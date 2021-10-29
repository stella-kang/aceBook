import * as SessionApiUtil from "../util/session_util"

export const SIGN_UP = "SIGN_UP"
export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"

const signupUser = (user) => ({
    type: SIGN_UP,
    user
})

const loginUser = (user) => ({
    type: LOGIN,
    user
})

const logoutUser = () => ({
    type: LOGOUT
})

const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
})

export const signup = (user) => dispatch => {
    SessionApiUtil.signup(user)
        .then(
            (user) => dispatch(signupUser(user)),
            (err) => dispatch(receiveErrors(err.responseJSON))
        )
}

export const login = (user) => dispatch => {
    SessionApiUtil.login(user)
        .then(
            (user) => dispatch(loginUser(user)),
            (err) => dispatch(receiveErrors(err.responseJSON))
        )
}

export const logout = (user) => dispatch => {
    SessionApiUtil.logout()
        .then(
            () => dispatch(logoutUser()),
            (err) => dispatch(receiveErrors(err.responseJSON))
        )
}