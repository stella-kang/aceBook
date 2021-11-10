import { connect } from 'react-redux';
import { fetchChats, fetchMessages, createChat } from '../../actions/message_chat_actions';
import ChatList from "./chat_list"

const mSTP = (state, ownProps) => ({
    users: state.entities.users,
    currentUser: state.entities.users[state.session.currentUserId],
    chats: Object.values(state.entities.chats)
})

const mDTP = (dispatch, ownProps) => ({
    fetchChats: () => dispatch(fetchChats()),
})

export default connect(mSTP, mDTP)(ChatList);