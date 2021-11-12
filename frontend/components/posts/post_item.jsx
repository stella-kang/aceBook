import React from 'react';
import CommentContainer from '../comments/comment_container';
import CreateCommentForm from "../comments/create_comment_container"
import { withRouter } from 'react-router-dom'

class PostItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleDropDownClick = this.handleDropDownClick.bind(this);
        this.updateLike = this.updateLike.bind(this);
        this.showMoreComments = this.showMoreComments.bind(this);

        this.state = {
            lastComments: this.props.comments.length > 0 ? [this.props.comments.at(-1)] : [],
            allComments: this.props.comments
        }
    }

    componentDidMount() {
        if (this.props.author !== this.props.currentUser) {
            let dropdown = document.getElementById(`post-dropdown-${this.props.post.id}`);
            if (dropdown) dropdown.style.display = "none";
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const prevCommentBodies = prevProps.comments.map(comment => comment.content)
        const currCommentBodies = this.props.comments.map(comment => comment.content)
        const currCommentIds = this.props.comments.map(comment => comment.id)

        if (prevProps.comments.length < this.props.comments.length) {
            let arr = [...this.state.lastComments];
            arr.push(this.props.comments.at(-1));

            this.setState({
                lastComments: arr,
                allComments: this.props.comments
            })
        } else if (prevProps.comments.length > this.props.comments.length) {
            let previousComments = [...prevState.lastComments];

            prevState.lastComments.forEach((comment, i) => {
                if (!currCommentIds.includes(comment.id)) previousComments.splice(i, 1)
            });

            this.setState({
                lastComments: previousComments,
                allComments: this.props.comments
            })
        } else if (prevCommentBodies.some(comment => !currCommentBodies.includes(comment))) {
            this.setState({
            lastComments: this.props.comments.slice(this.props.comments.length - prevState.lastComments.length),
                allComments: this.props.comments
            })
        }
    }

    handleDropDownClick(e) {
        e.stopPropagation();

        const postMenu = document.getElementById(`post-dropdown-content-${this.props.post.id}`);
        if (postMenu.style.display === "") {
            postMenu.style.display = "block";
        } else {
            postMenu.style.display = "";
        }
    }

    updateLike(e) {
        let currentUserLike = this.props.likes.find(like => like.author_id === this.props.currentUser.id)
        if (currentUserLike) {
            document.getElementById(`like-icon-${this.props.post.id}`).classList.remove("like-animation");
            this.props.deleteLike(currentUserLike.id);
            document.getElementById(`like-${this.props.post.id}`).classList.remove("post-liked");
        } else {
            document.getElementById(`like-icon-${this.props.post.id}`).classList.add("like-animation");
            this.props.createLike({
                likeable_type: "Post",
                likeable_id: this.props.post.id,
                author_id: this.props.currentUser.id
            })
            document.getElementById(`like-${this.props.post.id}`).classList.add("post-liked");
        }
    }

    showMoreComments(e) {
        let commentSection = document.getElementById(`comment-list-${this.props.post.id}`);
        let lastCommentPreview = document.getElementById(`last-comment-preview-${this.props.post.id}`);
        let showCommentButton = document.getElementById(`show-comment-button-${this.props.post.id}`);

        if (commentSection.style.display === 'none') {
            commentSection.style.display = 'block';
            showCommentButton.style.display = 'none';
            lastCommentPreview.style.display = 'none';
        }
    }

    render() {
        if (this.props.author) {
            let commentsList;
            let showCommentButton;
            let lastComment;

            if (this.props.comments.length < 2) {
                commentsList = <ul id={`comment-list-${this.props.post.id}`}>
                    {this.state.allComments.map(el => (
                        <CommentContainer commentType="regular-comment" comment={el} key={el.id} />
                    ))}
                </ul>
            } else {
                commentsList = <ul style={{ display: 'none' }} id={`comment-list-${this.props.post.id}`}>
                    {this.state.allComments.map(el => (
                        <CommentContainer commentType="regular-comment" comment={el} key={el.id} />
                    ))}
                </ul>
                
                if (this.state.allComments.length !== this.state.lastComments.length) {
                    this.props.comments.length < 3 ? showCommentButton = <div className="show-comment-button" id={`show-comment-button-${this.props.post.id}`} onClick={this.showMoreComments}>View {this.state.allComments.length - this.state.lastComments.length} more comment</div> :
                        showCommentButton = <div className="show-comment-button" id={`show-comment-button-${this.props.post.id}`} onClick={this.showMoreComments}>View {this.state.allComments.length - this.state.lastComments.length} more comments</div>
                }

                lastComment = <ul id={`last-comment-preview-${this.props.post.id}`}>
                    {this.state.lastComments.map(el => (
                        <CommentContainer commentType="last-comment" comment={el} key={el.id} />
                    ))}
                </ul>
            }

            return <li className="post-item">
                <div className="post-header">
                    <div id="post-details">
                        {this.props.author.profile_picture ? <img src={this.props.author.profile_picture} /> : <img src={window.defaultProfile} />}
                        <div>
                            <div id="post-author-details">
                                <span onClick={() => this.props.history.push(`/${this.props.author.id}/profile`)}>{this.props.author.first_name} {this.props.author.last_name}</span>

                                {this.props.profile ? <div id="post-profile-info">
                                    <i className="fas fa-caret-right"></i>
                                    <span onClick={(() => this.props.history.push(`/${this.props.profile.id}/profile`))}>{this.props.profile.first_name} {this.props.profile.last_name}</span> 
                                    </div>: null}
                            </div>

                            <div id="post-created-at">{this.props.post.created_at}</div>
                        </div>
                    </div>

                    {this.props.author === this.props.currentUser ? 
                    <div className="post-dropdown-menu" id={`post-dropdown-${this.props.post.id}`}>
                        <button id="post-dropdown-button" onClick={this.handleDropDownClick}>
                            <i className="fas fa-ellipsis-h fa-2x"></i>
                        </button>

                        <div className="post-dropdown-content" id={`post-dropdown-content-${this.props.post.id}`}>
                            <div>
                                <div className="post-dropdown-items">
                                    {this.props.editPostFormModal(this.props.post.id)}

                                    <button onClick={() => this.props.removePost(this.props.post.id)}>
                                        <i className="far fa-trash-alt"></i>
                                        Delete post
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> : null}
                </div>

                <span>{this.props.post.content}</span>

                {this.props.post.photo ? <img src={this.props.post.photo} /> : null}

                <div className="post-counts">
                    {this.props.likes.length !== 0 ?
                        <div className="post-likes">
                            {this.props.likes.length === 1 ? <div>{this.props.likes.length} Like</div> : <div>{this.props.likes.length} Likes</div>}
                        </div> : <div></div>
                    }

                    {this.props.comments.length !== 0 ? 
                        <div className="post-comments" onClick={this.toggleCommentSection}>
                            {this.props.comments.length === 1 ? <div>{(this.props.comments.length)} Comment</div> : <div>{(this.props.comments.length)} Comments</div>}
                        </div> : <div></div>
                    }
                </div>

                <div className="post-icons-outer-div">
                    <div className="post-icons">
                        <div className={`like ${this.props.likes.some(like => like.author_id === this.props.currentUser.id) ? 'post-liked' : null}`} id={`like-${this.props.post.id}`} onClick={this.updateLike}>
                            <i id={`like-icon-${this.props.post.id}`} className="far fa-thumbs-up"></i>
                            <span>Like</span>
                        </div>

                        <div id="comment" onClick={() => document.getElementById(`comment-input-${this.props.post.id}-undefined`).focus()}>
                            <i className="far fa-comment fa-1x"></i>
                            <span>Comment</span>
                        </div>
                    </div>
                </div>

                <div className="comment-section">
                    {showCommentButton}
                    {commentsList}
                    {lastComment}

                    <div className="comment-form">
                        {this.props.currentUser.profile_picture ? <img src={this.props.currentUser.profile_picture} /> : <img src={window.defaultProfile} />}
                        <CreateCommentForm postId={this.props.post.id} />
                    </div>
                </div>
            </li>
        } else {
            return null;
        }
    }
}

export default withRouter(PostItem);
