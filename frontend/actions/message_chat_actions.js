import * as ChatAndMessagesApiUtil from "../util/message_chat_util"

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES"
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE"
export const RECEIVE_CHAT = "RECEIVE_CHAT"
export const RECEIVE_CHATS = "RECEIVE_CHATS"

export const receiveMessages = (messages) => ({
    type: RECEIVE_MESSAGES,
    messages
})

const receiveChats = (chats) => ({
    type: RECEIVE_CHATS,
    chats
})

const receiveChat = (chat) => ({
    type: RECEIVE_CHAT,
    chat
})

export const receiveMessage = (message) => ({
    type: RECEIVE_MESSAGE,
    message
})
export const fetchChats = (chatId) => dispatch => {
    return ChatAndMessagesApiUtil.fetchChat(chatId)
        .then(chats => dispatch(receiveChats(chats)));
}

export const createChat = (chat) => dispatch => {
    return ChatAndMessagesApiUtil.createChat(chat)  
        .then(chat => dispatch(receivechat(chat)));
}

export const fetchMessages = (chatId) => dispatch => {
    return ChatAndMessagesApiUtil.fetchMessages(chatId)
        .then(messages => dispatch(receiveMessages(messages)))
}
