import { RECEIVE_CHAT, RECEIVE_CHATS } from "../actions/message_chat_actions"

const chatReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)

    switch(action.type) {
        case RECEIVE_CHATS:
            return action.chats;
        case RECEIVE_CHAT:
            nextState[action.chat.id] = action.chat;
            return nextState;
        default:
            return state;
    }
}

export default chatReducer;