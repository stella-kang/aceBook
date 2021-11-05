import usersReducer from "./user_reducer"
import postsReducer from "./posts_reducer"
import commentsReducer from "./comments_reducer"
import friendsReducer from "./friends_reducer"
import { combineReducers } from "redux"

const entitiesReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer,
    friends: friendsReducer
})

export default entitiesReducer;