import { connect } from 'react-redux';
import { logout } from "../../actions/user&session_actions"
import NavBar from "./nav_bar"

const mSTP = (state, ownProps) => ({
    currentUserId: state.session.currentUserId,
    currentUser: state.entities.users[state.session.currentUserId]
})

const mDTP = (dispatch, ownProps) => ({
    logout: () => dispatch(logout()),
})

export default connect(mSTP, mDTP)(NavBar);