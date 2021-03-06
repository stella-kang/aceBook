import * as FriendsApiUtil from "../util/friends_util"

export const RECEIVE_FRIEND_REQUESTS = "RECEIVE_FRIEND_REQUESTS"
export const RECEIVE_FRIEND_REQUEST = "RECEIVE_FRIEND_REQUEST"
export const UPDATE_FRIEND_REQUEST = "UPDATE_FRIEND_REQUEST"
export const REMOVE_FRIEND_REQUEST = "REMOVE_FRIEND_REQUEST"

const receiveFriendRequests = (friendRequests) => ({
    type: RECEIVE_FRIEND_REQUESTS,
    friendRequests
})

const receiveFriendRequest = (friendRequest) => ({
    type: RECEIVE_FRIEND_REQUEST,
    friendRequest
})

const updateFriendRequest = (friendRequest) => ({
    type: UPDATE_FRIEND_REQUEST,
    friendRequest
})

const deleteFriendRequest = (friendRequestId) => ({
    type: REMOVE_FRIEND_REQUEST,
    friendRequestId
})

export const fetchFriendRequests = (userId) => dispatch => {
    return FriendsApiUtil.fetchFriends(userId)
        .then(friendrequests => {
            dispatch(receiveFriendRequests(friendrequests));
        })
}

export const createFriendRequest = (friend) => dispatch => {
    return FriendsApiUtil.createFriend(friend)
        .then(friendrequest => dispatch(receiveFriendRequest(friendrequest)))
}

export const editFriendRequest = (friend) => dispatch => {
    return FriendsApiUtil.updateFriend(friend)
        .then(friendrequest => dispatch(updateFriendRequest(friendrequest)))
}

export const removeFriendRequest = (friendId) => dispatch => {
    return FriendsApiUtil.deleteFriend(friendId)
        .then(() => dispatch(deleteFriendRequest(friendId)))
}