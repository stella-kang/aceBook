import { RECEIVE_ERRORS, CLEAR_ERRORS } from "../actions/user&session_actions";

const sessionErrorsReducer = (state = [], action) => {
    switch(action.type) {
        case RECEIVE_ERRORS:
            return action.errors.reverse();
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
}

export default sessionErrorsReducer;