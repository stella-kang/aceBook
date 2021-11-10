import usersReducer from "./user_reducer"
import postsReducer from "./posts_reducer"
import commentsReducer from "./comments_reducer"
import friendsReducer from "./friends_reducer"
import likesReducer from "./likes_reducer"
import chatReducer from "./chats_reducer"
import messagesReducer from "./messages_reducer"
import { combineReducers } from "redux"

const entitiesReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer,
    friends: friendsReducer,
    likes: likesReducer,
    chats: chatReducer,
    messages: messagesReducer
})

export default entitiesReducer;