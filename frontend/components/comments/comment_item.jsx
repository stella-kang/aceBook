import React from "react";
import EditCommentContainer from "./edit_comment_container"

class Comment extends React.Component {
    constructor(props) {
        super(props);

        this.showEditForm = this.showEditForm.bind(this);
        this.handleDropDownClick = this.handleDropDownClick.bind(this);
    }


    handleDropDownClick(e) {
        e.stopPropagation();

        const commentMenus = document.querySelectorAll(".comment-dropdown-content");
        if (commentMenus) {
            commentMenus.forEach(el => {
                if (el.style.display === "block") el.style.display = "";
            })
        }

        const commentMenu = document.getElementById(`comment-dropdown-content-${this.props.comment.id}`);
        if (commentMenu.style.display === "") {
            commentMenu.style.display = "block";
        } else {
            commentMenu.style.display = "";
        }
    }

    showEditForm(e) {
        e.stopPropagation();
    
        const editForm = document.getElementById(`comment-edit-form-${this.props.comment.id}`);
        editForm.style.display = "flex";

        const commentMenu = document.getElementById(`comment-dropdown-content-${this.props.comment.id}`);
        commentMenu.style.display = "";

        const commentItem = document.getElementById(`comment-${this.props.comment.id}`);
        commentItem.style.display = "none";

        const commentInput = document.getElementById(`comment-input-${this.props.comment.post_id}-${this.props.comment.id}`)
        commentInput.focus();
    }

    render () {
        let author = this.props.users[this.props.comment.author_id];

        if (author) {
            return <li className="comment-item">
                <div className="comment-summary" id={`comment-${this.props.comment.id}`}>
                    {author.profile_picture ? <img src={author.profile_picture} /> : <img src={window.defaultProfile} />}

                    <div className="comment-body">
                        <div id="comment-content">
                            <p>{author.first_name} {author.last_name}</p>
                            <p>{this.props.comment.content}</p>
                        </div>

                        <div id={`comment-dropdown-menu`}>
                            <button id="comment-dropdown-button" onClick={this.handleDropDownClick}>
                                <i className="fas fa-ellipsis-h fa-1x"></i>
                            </button>

                            <div className="comment-dropdown-content" id={`comment-dropdown-content-${this.props.comment.id}`}>
                                <div>
                                    <button onClick={() => this.props.removeComment(this.props.comment.id)}>Delete</button>
                                    <button onClick={this.showEditForm}>Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="comment-form comment-edit-form" id={`comment-edit-form-${this.props.comment.id}`}>
                    {this.props.currentUser.profile_picture ? <img src={this.props.currentUser.profile_picture} /> : <img src={window.defaultProfile} />}
                    <EditCommentContainer comment={this.props.comment} />
                </div>

            </li>
        } else {
            return null;
        }
    }
}

export default Comment