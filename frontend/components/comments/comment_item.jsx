import React from "react";

const Comment = (props) => {
    let author = props.users[props.comment.author_id];
    
    return <li className="comment-item">
        <div id="comment-content">
            <p>{author.first_name}</p>
            <p>{props.comment.content}</p>
        </div>
    </li>
}

export default Comment