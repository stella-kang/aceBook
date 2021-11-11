import { connect } from 'react-redux';
import { fetchMessages, receiveMessage, clearMessages } from '../../actions/message_chat_actions';
import { withRouter } from 'react-router-dom';
import Chat from "./chat"

const mSTP = (state, ownProps) => ({
    messages: Object.values(state.entities.messages),
    users: state.entities.users,
    currentUser: state.entities.users[state.session.currentUserId]
})

const mDTP = (dispatch, ownProps) => ({
    fetchMessages: (chatId) => dispatch(fetchMessages(chatId)),
    receiveMessage: (message) => dispatch(receiveMessage(message)),
    clearMessages: () => dispatch(clearMessages())
})

export default withRouter(connect(mSTP, mDTP)(Chat));