import { RECEIVE_FRIEND_REQUEST, REMOVE_FRIEND_REQUEST, RECEIVE_FRIEND_REQUESTS, UPDATE_FRIEND_REQUEST} from "../actions/friends_actions";

const friendsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_FRIEND_REQUESTS:
            return action.friendRequests;
        case RECEIVE_FRIEND_REQUEST:
            nextState[action.friendRequest.id] = action.friendRequest;
            return nextState;
        case REMOVE_FRIEND_REQUEST:
            delete nextState[action.friendRequestId]
            return nextState;
        case UPDATE_FRIEND_REQUEST:
            nextState[action.friendRequest.id] = action.friendRequest;
            return nextState;
        default:
            return state;
    }
}

export default friendsReducer;