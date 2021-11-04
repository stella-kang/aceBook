import usersReducer from "./user_reducer"
import postsReducer from "./posts_reducer"
import commentsReducer from "./comments_reducer"
import { combineReducers } from "redux"

const entitiesReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer
})

export default entitiesReducer;