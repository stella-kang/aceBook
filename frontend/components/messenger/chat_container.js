import { connect } from 'react-redux';
import { fetchMessages, receiveMessage, clearMessages } from '../../actions/message_chat_actions';
import Chat from "./chat"

const mSTP = (state, ownProps) => ({
    messages: Object.values(state.entities.messages),
    users: state.entities.users,
    // chats: Object.values(state.entities.chats),
    currentUser: state.entities.users[state.session.currentUserId]
})

const mDTP = (dispatch, ownProps) => ({
    fetchMessages: (chatId) => dispatch(fetchMessages(chatId)),
    receiveMessage: (message) => dispatch(receiveMessage(message)),
    clearMessages: () => dispatch(clearMessages())
})

export default connect(mSTP, mDTP)(Chat);