import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user&session_actions';
import { fetchFriendRequests } from '../../actions/friends_actions';
import { removeFriendRequest, createFriendRequest } from '../../actions/friends_actions';
import { receiveSearch } from '../../actions/search_action';
import { withRouter } from 'react-router-dom';
import Search from './search';

const mSTP = (state, ownProps) => ({
    users: Object.values(state.entities.users),
    search: state.ui.search,
    friendRequests: Object.values(state.entities.friends),
    currentUserId: state.session.currentUserId
})

const mDTP = (dispatch, ownProps) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchFriendRequests: (userId) => dispatch(fetchFriendRequests(userId)),
    deleteFriendRequest: (requestId) => dispatch(removeFriendRequest(requestId)),
    createFriendRequest: (request) => dispatch(createFriendRequest(request)),
    receiveSearch: (term) => dispatch(receiveSearch(term))
})

export default withRouter(connect(mSTP, mDTP)(Search));