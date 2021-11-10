import { connect } from 'react-redux';
import { fetchMessages, receiveMessage, receiveMessages } from '../../actions/message_chat_actions';
import Chat from "./chat"

const mSTP = (state, ownProps) => ({
    messages: Object.values(state.entities.messages),
    // chats: Object.values(state.entities.chats),
    currentUser: state.entities.users[state.session.currentUserId]
})

const mDTP = (dispatch, ownProps) => ({
    fetchMessages: (chatId) => dispatch(fetchMessages(chatId)),
    receiveMessage: (message) => dispatch(receiveMessage(message))
})

export default connect(mSTP, mDTP)(Chat);