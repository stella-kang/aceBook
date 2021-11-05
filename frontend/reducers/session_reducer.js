import { RECEIVE_USER, LOGOUT } from "../actions/user&session_actions";

const _nullState = { currentUserId: null }

const SessionReducer = (state = _nullState, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_USER:
            nextState.currentUserId = action.user.id;
            return nextState;
        case LOGOUT:
            return _nullState;
        default:
            return state;
    }
}

export default SessionReducer;