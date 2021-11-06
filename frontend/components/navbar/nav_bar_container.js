import { connect } from 'react-redux';
import { logout } from "../../actions/user&session_actions"
import { fetchFriendRequests } from '../../actions/friends_actions';
import { fetchUsers } from '../../actions/user&session_actions';
import NavBar from "./nav_bar"

const mSTP = (state, ownProps) => ({
    currentUserId: state.session.currentUserId,
    currentUser: state.entities.users[state.session.currentUserId],
    currentUserReceivedRequests: Object.values(state.entities.friends).filter(friend => friend.friend_id === state.session.currentUserId && friend.status === false)
})

const mDTP = (dispatch, ownProps) => ({
    logout: () => dispatch(logout()),
    fetchCurrentFriendRequests: (userId) => dispatch(fetchFriendRequests(userId))
})

export default connect(mSTP, mDTP)(NavBar);