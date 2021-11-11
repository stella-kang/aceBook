import { connect } from 'react-redux';
import { removeFriendRequest, editFriendRequest, createFriendRequest } from "../../actions/friends_actions"
import FriendNotificationList from './friend_notification_list';

const mSTP = (state, ownProps) => ({
    friends: Object.values(state.entities.friends),
    users: state.entities.users,
    currentUserId: state.session.currentUserId
})

const mDTP = (dispatch, ownProps) => ({
    deleteFriendRequest: (requestId) => dispatch(removeFriendRequest(requestId)),
    updateFriendRequest: (request) => dispatch(editFriendRequest(request)),
    createFriendRequest: (request) => dispatch(createFriendRequest(request))
})


export default connect(mSTP, mDTP)(FriendNotificationList)