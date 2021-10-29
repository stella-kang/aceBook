import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root"
import configureStore from "./store/store"

document.addEventListener("DOMContentLoaded", e => {
    const preloadedState = {

    }
    const root = document.getElementById("root");
    const store = configureStore(preloadedState);
    window.store = store;
    ReactDOM.render(<Root store={store}/>, root);
})