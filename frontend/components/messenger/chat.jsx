import React from "react";
import MessageForm from "./message_form";

class Chat extends React.Component {
    constructor(props) {
        super(props);

        this.bottom = React.createRef();
    }

    componentDidMount() {
        this.props.fetchMessages(this.props.chat.id);

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
            <div className="chatroom-container">
                <div>{this.props.friend.id}</div>
                <ul className="message-list">
                    {messages.map(message => {
                        return <li key={message.id}>
                            {message.body}
                        </li>;
                    })}
                    <div ref={this.bottom} />
                </ul>
                <MessageForm chat={this.props.chat} currentUser={this.props.currentUser} />
            </div>
        );
    }
}

export default Chat;