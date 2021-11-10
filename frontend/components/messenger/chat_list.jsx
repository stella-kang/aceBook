import React from 'react';
import ChatContainer from './chat_container';

class ChatList extends React.Component {
    componentDidMount() {
        this.props.fetchChats();
    }

    render() {
        return <div className="chat-section">
            {Object.values(this.props.users).length > 1 ? this.props.chats.map(chat => (
                <ChatContainer key={chat.id} chat={chat} friend={this.props.users[(chat.user1_id !== this.props.currentUser.id ? chat.user1_id : chat.user2_id)]} />
            )
            ) : null}
        </div>
    }
}

export default ChatList;