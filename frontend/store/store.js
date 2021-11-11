import { createStore, applyMiddleware } from "redux";
import RootReducer from "../reducers/root_reducer"
import logger from "redux-logger";
import thunk from "redux-thunk";


const configureStore = (preLoadedState) => {
    const middlewares = [thunk];

    if (process.env.NODE_ENV !== "production") {
        const { logger } = require("redux-logger");
        middlewares.push(logger);
    }

    return createStore(RootReducer, preLoadedState, applyMiddleware(...middlewares))

}

export default configureStore;