import React from "react";
import MessageForm from "./message_form";
import MessageItem from "./message_item"

class Chat extends React.Component {
    constructor(props) {
        super(props);

        this.closeChat = this.closeChat.bind(this);
        this.addCurrentChatStyling = this.addCurrentChatStyling.bind(this);

        this.bottom = React.createRef();
    }

    componentDidMount() {
        App.cable.subscriptions.create(
            { channel: "ChatChannel", chat_id: this.props.chat.id},
            {
                received: data => {
                    this.props.receiveMessage(data.message)
                },
                speak: function(data) {
                    return this.perform("speak", data)
                }
            }
        );
    }

    componentDidUpdate() {
        if(this.bottom.current) this.bottom.current.scrollIntoView();
    }

    closeChat(e) {
        document.getElementById(`chatroom-${this.props.chat.id}`).style.display = "none";
    }

    addCurrentChatStyling(e) {
        const currentChat = document.querySelector(".current-chat");
        if (currentChat) currentChat.classList.remove("current-chat");
        document.getElementById(`chat-close-button-${this.props.chat.id}`).classList.add("current-chat");
    }

    render() {
        let messages = this.props.messages.filter(message => message.chat_id === this.props.chat.id)

        return (
            <div className="chatroom-container" onClick={this.addCurrentChatStyling} id={`chatroom-${this.props.chat.id}`}>
                <div className="chat-header">
                    <div id="chat-friend-info" onClick={() => this.props.history.push(`/${this.props.friend.id}/profile`)}>
                        {this.props.friend.profile_picture ? <img src={this.props.friend.profile_picture} /> : <img src={window.defaultProfile} />}
                        <span id="chat-friend-name">{this.props.friend.first_name} {this.props.friend.last_name}</span>
                    </div>

                    <i className="fas fa-times" id={`chat-close-button-${this.props.chat.id}`} onClick={this.closeChat}></i>
                </div>

                <div className="chat-body">
                    <ul className="message-list">
                        {messages.map(message => {
                            return <MessageItem 
                                author={this.props.users[message.author_id]}
                                message={message}
                                key={message.id}
                                currentUser={this.props.currentUser}
                            />
                        })}
                        <div ref={this.bottom}/>
                    </ul>
                    <MessageForm chat={this.props.chat} currentUser={this.props.currentUser} />
                </div>
            </div>
        );
    }
}

export default Chat;