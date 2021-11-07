import { connect } from 'react-redux';
import { fetchFriendRequests, removeFriendRequest, editFriendRequest } from '../../actions/friends_actions';
import { withRouter } from 'react-router';
import FriendsSection from "./friends_section"

const mSTP = (state, ownProps) => ({
    profileFriendRequests: Object.values(state.entities.friends),
    users: state.entities.users,
    currentUserId: state.session.currentUserId
})

const mDTP = (dispatch, ownProps) => ({
    // fetchFriendRequests: () => dispatch(fetchFriendRequests(parseInt(ownProps.match.params.userId))),
    deleteFriendRequest: (requestId) => dispatch(removeFriendRequest(requestId)),
    updateFriendRequest: (request) => dispatch(editFriendRequest(request))
})

export default withRouter(connect(mSTP, mDTP)(FriendsSection))