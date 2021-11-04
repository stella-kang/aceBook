import { RECEIVE_COMMENTS, DELETE_COMMENT } from "../actions/comment_actions";

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)

    switch(action.type) {
        case RECEIVE_COMMENTS:
            if (action.comments) {
                return action.comments;
            } else {
                return {};
            }
        case DELETE_COMMENT:
            delete nextState[action.commentId];
            return nextState;
        default:
            return state;
    }
}

export default commentsReducer;