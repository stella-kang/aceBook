import usersReducer from "./user_reducer"
import { combineReducers } from "redux"

const entitiesReducer = combineReducers({
    users: usersReducer
})

export default entitiesReducer;