import { RECEIVE_POSTS, RECEIVE_POST, DELETE_POST } from "../actions/post_actions";

const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    
    switch(action.type) {
        case RECEIVE_POSTS:
            return action.posts;
        case DELETE_POST:
            delete nextState[action.postId];
            return nextState;
        default:
            return state;
    }
}

export default postsReducer;