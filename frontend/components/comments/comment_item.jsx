import React from "react";
import EditCommentContainer from "./edit_comment_container"
import {withRouter} from "react-router-dom"

class Comment extends React.Component {
    constructor(props) {
        super(props);

        this.showEditForm = this.showEditForm.bind(this);
        this.handleDropDownClick = this.handleDropDownClick.bind(this);
        this.updateLike = this.updateLike.bind(this);
    }

    componentDidMount() {
        if (this.author !== this.props.currentUser) {
            let menu = document.getElementById(`comment-dropdown-menu-${this.props.comment.id}`);
            if (menu) menu.style.display = "none";
        }
    }

    handleDropDownClick(e) {
        e.stopPropagation();

        const commentMenus = document.querySelectorAll(".comment-dropdown-content");
        if (commentMenus) {
            commentMenus.forEach(el => {
                if (el.style.display === "block") el.style.display = "";
            })
        }

        let commentMenu;
        if (this.props.commentType === "last-comment") {
            commentMenu = document.querySelectorAll(`#comment-dropdown-content-${this.props.comment.id}`).item(1);
        } else {
            commentMenu = document.getElementById(`comment-dropdown-content-${this.props.comment.id}`);
        }

        if (commentMenu.style.display === "") {
            commentMenu.style.display = "block";
        } else {
            commentMenu.style.display = "";
        }
    }

    updateLike(e) {
        let currentUserLike = this.props.likes.find(like => like.likeable_id === this.props.comment.id && like.author_id === this.props.currentUser.id && like.likeable_type === "Comment")
        if (currentUserLike) {
            this.props.deleteLike(currentUserLike.id);
            document.getElementById(`comment-like-button-${this.props.comment.id}`).classList.remove("comment-liked")
        } else {
            this.props.createLike({
                author_id: this.props.currentUser.id,
                likeable_id: this.props.comment.id,
                likeable_type: "Comment"
            })
            document.getElementById(`comment-like-button-${this.props.comment.id}`).classList.add("comment-liked")
        }
    }

    showEditForm(e) {
        e.stopPropagation();

        let editForm;
        let commentMenu;
        let commentItem;
        let commentInput;
        let commentDetails;
    
        if (this.props.commentType === 'last-comment') {
            editForm = document.querySelectorAll(`#comment-edit-form-${this.props.comment.id}`).item(1);
            commentMenu = document.querySelectorAll(`#comment-dropdown-content-${this.props.comment.id}`).item(1);
            commentItem = document.querySelectorAll(`#comment-${this.props.comment.id}`).item(1);
            commentInput = document.querySelectorAll(`#comment-input-${this.props.comment.post_id}-${this.props.comment.id}`).item(1);
            commentDetails = document.querySelectorAll(`#comment-menu-${this.props.comment.id}`).item(1);
        } else {
            editForm = document.getElementById(`comment-edit-form-${this.props.comment.id}`);
            commentMenu = document.getElementById(`comment-dropdown-content-${this.props.comment.id}`);
            commentItem = document.getElementById(`comment-${this.props.comment.id}`);
            commentInput = document.getElementById(`comment-input-${this.props.comment.post_id}-${this.props.comment.id}`);
            commentDetails = document.getElementById(`comment-menu-${this.props.comment.id}`)
        }

        editForm.style.display = "flex";
        commentMenu.style.display = "";
        commentItem.style.display = "none";
        commentInput.focus();
        commentDetails.style.display = "none";
    }

    render () {
        this.author = this.props.users[this.props.comment.author_id];
        const likes = this.props.likes.filter(like => like.likeable_id === this.props.comment.id && like.likeable_type === "Comment");

        if (this.author) {
            return <li className="comment-item">
                <div className="comment-summary" id={`comment-${this.props.comment.id}`}>
                    {this.author.profile_picture ? <img src={this.author.profile_picture} /> : <img src={window.defaultProfile} />}

                    <div className="comment-body">
                        <div id="comment-content">
                            <span onClick={() => this.props.history.push(`/${this.author.id}/profile`)}>{this.author.first_name} {this.author.last_name}</span>
                            <span>{this.props.comment.content}</span>
                        </div>
                        <div id="likes-anchor">
                            {likes.length !== 0 ?
                                <div className="comment-likes">
                                    <i className="fas fa-thumbs-up fa-1x"></i>
                                    <span>{likes.length}</span>
                                </div> : null
                            }
                        </div>

                        {this.author === this.props.currentUser ? 
                        <div id="comment-dropdown-anchor">
                            <div className={`comment-dropdown-menu`} id={`comment-dropdown-menu-${this.props.comment.id}`}>
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
                    </div> : null}
                    </div>
                </div>

                <div className="comment-menu" id={`comment-menu-${this.props.comment.id}`}>
                    <div id={`comment-like-button-${this.props.comment.id}`} 
                    className={`comment-button ${this.props.likes.some(like => like.likeable_id === this.props.comment.id && like.author_id === this.props.currentUser.id && like.likeable_type === "Comment") ? 'comment-liked' : null}`} 
                    onClick={this.updateLike}>
                        Like
                    </div>

                    <div id="comment-menu-dot">
                        &#183;
                    </div>

                    <div id="comment-timestamp">{this.props.comment.created_at}</div>
                </div>

                <div className="comment-edit-form" id={`comment-edit-form-${this.props.comment.id}`}>
                    <div className="comment-form">
                        {this.props.currentUser.profile_picture ? <img src={this.props.currentUser.profile_picture} /> : <img src={window.defaultProfile} />}
                        <EditCommentContainer lastComment={this.props.commentType === "last-comment" ? true : false} comment={this.props.comment} />
                    </div>
                    <div id="comment-cancel">Press Esc to cancel.</div>
                </div> 

            </li>
        } else {
            return null;
        }
    }
}

export default withRouter(Comment);