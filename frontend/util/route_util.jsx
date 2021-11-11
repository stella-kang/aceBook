import React from 'react';
import {withRouter, Route, Redirect} from "react-router-dom";
import { connect } from 'react-redux';

const Auth = (props) => {
    let Component = props.component

    return <Route
        path={props.path}
        exact={props.exact}
        render={newProps =>
            !props.loggedIn ? <Component {...newProps} /> : <Redirect to="/newsfeed" />
        }
    />
}

const Protected = (props) => {
    let Component = props.component;

    return <Route 
        path={props.path}
        exact={props.exact}
        render={newProps =>
            props.loggedIn ? <Component {...newProps} /> : <Redirect to="/" />
        }
    />
}

const mSTP = (state, ownProps) => ({
    loggedIn: Boolean(state.session.currentUserId)
})

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP)(Protected))