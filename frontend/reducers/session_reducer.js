import { LOGIN, LOGOUT, LOGIN_GUEST } from "../actions/session_actions";

const _nullState = { currentUserId: null }

const SessionReducer = (state = _nullState, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case LOGIN:
            nextState.currentUserId = action.user.id;
            return nextState;
        case LOGOUT:
            return _nullState;
        // case LOGIN_GUEST:
        //     nextState.currentUserId = action.user.id;
        //     return nextState;
        default:
            return state;
    }
}

export default SessionReducer;