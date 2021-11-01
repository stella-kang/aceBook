import { RECEIVE_POSTS } from "../actions/post_action";

const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch(action.type) {
        case RECEIVE_POSTS:
            return action.posts
        default:
            return state;
    }
}

export default postsReducer;