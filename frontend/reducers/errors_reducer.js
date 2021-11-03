import { combineReducers } from "redux"
import sessionErrorsReducer from "./session_errors_reducer"
import usersErrorsReducer from "./user_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    users: usersErrorsReducer
})

export default errorsReducer;