import React from 'react';

const MessageItem = (props) => {
        let image;

        if (props.author !== props.currentUser) {
            image = props.author.profile_picture ? <img src={props.author.profile_picture} /> : <img src={window.defaultProfile} />
        }

        return <li className="message-item" id={props.author === props.currentUser ? "current-user-message-item" : null }>
            <div className="message-content" id={props.author === props.currentUser ? "current-user-message" : "friend-message"}>
                {image}
                <div>{props.message.body}</div>
            </div>
        </li>
}

export default MessageItem;