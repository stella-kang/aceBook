import { SIGN_UP, LOGIN } from "../actions/session_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)

    switch(action.type) {
        case SIGN_UP:
            nextState[action.user.id] = action.user
            return nextState;
        case LOGIN:
            nextState[action.user.id] = action.user
            return nextState;
        default:
            return state;
    }
}

export default usersReducer;