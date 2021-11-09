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
        if (this.author !== this.props.currentUser)
        document.getElementById(`comment-dropdown-menu-${this.props.comment.id}`).style.display = "none";
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

    updateLike(e) {
        let currentUserLike = this.props.likes.find(like => like.likeable_id === this.props.comment.id && like.author_id === this.props.currentUser.id)
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
        this.author = this.props.users[this.props.comment.author_id];
        const likes = this.props.likes.filter(like => like.likeable_id === this.props.comment.id && like.likeable_type === "Comment");

        if (this.author) {
            return <li className="comment-item">
                <div className="comment-summary" id={`comment-${this.props.comment.id}`}>
                    {this.author.profile_picture ? <img src={this.author.profile_picture} /> : <img src={window.defaultProfile} />}

                    <div className="comment-body">
                        <div id="comment-content">
                            <p onClick={() => this.props.history.push(`/${this.author.id}/profile`)}>{this.author.first_name} {this.author.last_name}</p>
                            <p>{this.props.comment.content}</p>
                        </div>
                        <div id="likes-anchor">
                            {likes.length !== 0 ?
                                <div className="comment-likes">
                                    <i className="fas fa-thumbs-up fa-1x"></i>
                                    <span>{likes.length}</span>
                                </div> : null
                            }
                        </div>

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
                        </div>
                    </div>
                </div>

                <div className="comment-menu">
                    <div id={`comment-like-button-${this.props.comment.id}`} 
                    className={this.props.likes.some(like => like.likeable_id === this.props.comment.id && like.author_id === this.props.currentUser.id) ? 'comment-liked' : null} 
                    onClick={this.updateLike}>
                        Like
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

export default withRouter(Comment);