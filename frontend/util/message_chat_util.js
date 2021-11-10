export const fetchMessages = (chatId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/chats/${chatId}/messages`
    })
}

export const createChat = (chat) => {
    return $.ajax({
        method: 'POST',
        url: "api/chats",
        data: { chat }
    })
}

export const fetchChats = () => {
    return $.ajax({
        method: 'GET',
        url: `api/chats`
    })
}