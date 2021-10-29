import React from 'react';
import {withRouter, Route, Redirect} from "react-router-dom";
import { connect } from 'react-redux';

// const Auth = ({ path, loggedIn, exact, component: Component}) => {

//     return <Route
//         path={path}
//         exact={exact}
//         render={props => 
//             !loggedIn ? <Component {...props} /> : <Redirect to="/" />
//         }
//     />
// }

const Auth = (props) => {
    let Component = props.component

    return <Route
        path={props.path}
        exact={props.exact}
        render={newProps =>
            !props.loggedIn ? <Component {...newProps} /> : <Redirect to="/" />
        }
    />
}

const mSTP = (state, ownProps) => ({
    loggedIn: Boolean(state.session.currentUserId)
})

export const AuthRoute = withRouter(connect(mSTP)(Auth));