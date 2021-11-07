import { RECEIVE_POSTS, RECEIVE_POST, DELETE_POST, CLEAR_ALL_POSTS } from "../actions/post_actions";

const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    
    switch(action.type) {
        case RECEIVE_POSTS:
            return action.posts;
        case RECEIVE_POST:
            nextState[action.post.id] = action.post;
            return nextState;
        case DELETE_POST:
            delete nextState[action.postId];
            return nextState;
        case CLEAR_ALL_POSTS:
            return {};
        default:
            return state;
    }
}

export default postsReducer;