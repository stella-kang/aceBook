import { RECEIVE_MESSAGES, RECEIVE_MESSAGE, CLEAR_MESSAGES } from "../actions/message_chat_actions"

const messagesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)

    switch(action.type) {
        case RECEIVE_MESSAGES:
            Object.values(action.messages).forEach(message => {
                nextState[message.id] = message
            })
            return nextState;
        case RECEIVE_MESSAGE:
            nextState[action.message.id] = action.message;
            return nextState;
        case CLEAR_MESSAGES:
            return {};
        default:
            return state;
    }
}

export default messagesReducer;