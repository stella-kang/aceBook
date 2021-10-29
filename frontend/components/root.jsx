import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import App from "./app";
import React from "react";

const Root = (props) => (
    <Provider store={props.store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
)

export default Root;