import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { createFriendRequest, fetchFriendRequests, removeFriendRequest, editFriendRequest } from '../../actions/friends_actions';
import FriendButton from "./friend_button"

const mSTP = (state, ownProps) => ({
    users: state.entities.users,
    currentUser: state.entities.users[state.session.currentUserId],
    friends: Object.values(state.entities.friends),
    currentUserFriends: Object.values(state.entities.friends).filter(friend => friend.user_id === state.session.currentUserId),
    userFriends: Object.values(state.entities.friends).filter(friend => friend.user_id === parseInt(ownProps.match.params.userId))
})

const mDTP = (dispatch, ownProps) => ({
    fetchFriends: () => dispatch(fetchFriendRequests(ownProps.match.params.userId)),
    createFriendRequest: (friend) => dispatch(createFriendRequest(friend)),
    deleteFriendRequest: (requestId) => dispatch(removeFriendRequest(requestId)),
    updateFriendRequest: (friend) => dispatch(editFriendRequest(friend)),
})

export default withRouter(connect(mSTP, mDTP)(FriendButton));