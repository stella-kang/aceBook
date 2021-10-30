import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root"
import configureStore from "./store/store"

document.addEventListener("DOMContentLoaded", e => {
    const root = document.getElementById("root");

    let preloadedState;
    if (window.currentUser) {
        preloadedState = {
            entities: {
                users: {
                    [window.currentUser.id]: window.currentUser
                }
            },
            session: {
                currentUserId: window.currentUser.id
            }
        };
    }

    const store = configureStore(preloadedState);

    window.store = store;

    ReactDOM.render(<Root store={store}/>, root);
})