import { RECEIVE_USER, RECEIVE_USERS } from "../actions/user&session_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)

    switch(action.type) {
        case RECEIVE_USER:
            nextState[action.user.id] = action.user
            return nextState;
        case RECEIVE_USERS:
            let users = Object.values(action.users)
            users.forEach(user => {
                nextState[user.id] = user
            })
            return nextState;
        default:
            return state;
    }
}

export default usersReducer;