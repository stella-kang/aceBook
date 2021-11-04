import React from "react";
import EditCommentContainer from "./edit_comment_container"

const Comment = (props) => {
    let author = props.users[props.comment.author_id];
    
    return <li className="comment-item">
                {author.profile_picture ? <img src={author.profile_picture} /> : <img src={window.defaultProfile} />} 

                <div id="comment-content">
                    <p>{author.first_name} {author.last_name}</p>
                    <p>{props.comment.content}</p>
                </div>

                <div className="comment-dropdown-menu">
                    <div id="comment-dropdown-button">
                        <i className="fas fa-ellipsis-h fa-2x"></i>
                    </div>

                    <div id="comment-dropdown-content">
                        <button onClick={() => props.removeComment(props.comment.id)}>Delete</button>
                        <button>Edit</button>
                    </div>
                </div>

                <div className="comment-edit-form">
                    <EditCommentContainer comment={props.comment}/>
                </div>
            </li>
}

export default Comment