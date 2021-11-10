import React from "react";
import MessageForm from "./message_form";
import MessageItem from "./message_item"

class Chat extends React.Component {
    constructor(props) {
        super(props);

        this.bottom = React.createRef();
    }

    componentDidMount() {
        App.cable.subscriptions.create(
            { channel: "ChatChannel", chat_id: this.props.chat.id},
            {
                received: data => {
                    this.props.receiveMessage(data.message)
                    // switch (data.type) {
                    //     case "message":
                    //         debugger
                           
                    //         // this.setState({
                    //         //     messages: this.state.messages.concat(data.message)
                    //         // });
                    //         break;
                    //     // case "messages":
                    //     //     this.props.receiveMessages(data.messages)
                    //     //     // this.setState({ messages: data.messages });
                    //     //     break;
                    // }
                },
                speak: function(data) {
                    return this.perform("speak", data)
                }
                // load: function() {
                //     return this.perform("load")
                // }
            }
        );

        // App.cable.subscriptions.subscriptions[0].load();
    }

    componentDidUpdate() {
        if(this.bottom.current) this.bottom.current.scrollIntoView();
    }

    render() {
        let messages = this.props.messages.filter(message => message.chat_id === this.props.chat.id)
        // console.log(messages);
        // let messageList;
        
        // if (messages.length !==0) {
        //     messageList = messages.map(message => {
        //         return <li key={message.id}>
        //             {message}
        //             <div ref={this.bottom} />
        //         </li>;
        //     });
        // };

        return (
            <div className="chatroom-container" id={`chatroom-${this.props.chat.id}`}>
                <div className="chat-header">
                    <div id="chat-friend-info">
                        {this.props.friend.profile_picture ? <img src={this.props.friend.profile_picture} /> : <img src={window.defaultProfile} />}
                        <span>{this.props.friend.first_name} {this.props.friend.last_name}</span>
                    </div>

                    <i className="fas fa-times"></i>
                </div>

                <div className="chat-body">
                    <ul className="message-list">
                        {messages.map(message => {
                            // return <li key={message.id}>
                            //     <span>{message.body}</span>
                            // </li>;
                            return <MessageItem 
                                author={this.props.users[message.author_id]}
                                message={message}
                                key={message.id}
                                currentUser={this.props.currentUser}
                            />
                        })}
                        <div ref={this.bottom} />
                    </ul>
                    <MessageForm chat={this.props.chat} currentUser={this.props.currentUser} />
                </div>
            </div>
        );
    }
}

export default Chat;