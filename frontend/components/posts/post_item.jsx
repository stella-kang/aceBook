import React from 'react';
import CommentContainer from '../comments/comment_container';
import CreateCommentForm from "../comments/create_comment_container"
import { withRouter, Redirect} from 'react-router-dom'

class PostItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleDropDownClick = this.handleDropDownClick.bind(this);
    }

    componentDidMount() {
        if (this.props.author !== this.props.currentUser) {
            let dropdown = document.getElementById(`post-dropdown-${this.props.post.id}`);
            if (dropdown) dropdown.style.display = "none";
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

    render() {
        if (this.props.author) {
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
                    </div>
                </div>

                <span>{this.props.post.content}</span>

                <div className="post-likes">
                    
                </div>

                {this.props.post.photo ? <img src={this.props.post.photo} /> : null}

                <div className="post-icons-outer-div">
                    <div className="post-icons">
                        <div id="comment" onClick={() => document.getElementById(`comment-input-${this.props.post.id}-undefined`).focus()}>
                            <i className="far fa-comment fa-1x"></i>
                            <span>Comment</span>
                        </div>
                    </div>
                </div>

                <div className="comment-section">


                    {/* <ul className="comments-list">
                        {this.props.comments.length < 2 ? 
                            this.props.comments.map(el => (
                            <CommentContainer comment={el} key={el.id} />
                            )) : <CommentContainer comment={this.props.comments[-1]} key={this.props.comments[-1].id} />
                        } 
                    </ul> */}
                    
                    <ul className="comments-list">
                        {this.props.comments.map(el => (
                            <CommentContainer comment={el} key={el.id} />
                        ))}
                    </ul>

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

// const PostItem = (props) => {

//     let profile; 

//     if (props.post.profile) {
//         profile = <span>{props.post.profile.first_name} {props.post.profile.last_name}</span>
//     } else {
//         profile = null;
//     }

//     const handleDropdownClick = (e) => {
//         e.stopPropagation();
//         const postMenu = document.getElementById("post-dropdown-content");
//         if (postMenu.style.display === "") {
//             postMenu.style.display = "block";
//         } else {
//             postMenu.style.display = "";
//         }
//     }

//     return <li className="post-item">
//         <div className="post-header">
//             <div id="post-details">
//                 {props.author.profile_picture ? <img src={props.author.profile_picture} /> : <img src={window.defaultProfile} />}
//                 <span>{props.author.first_name} {props.author.last_name}</span>
//             </div>
            
//             <div id="post-dropdown-menu" >
//                 <button id="post-dropdown-button" onClick={handleDropdownClick}>
//                     <i className="fas fa-ellipsis-h fa-2x"></i>
//                 </button>

//                 <div id="post-dropdown-content">
//                     <div>
//                         <div className="post-dropdown-button">
//                             {props.editPostFormModal(props.post.id)}
                            
//                             <button onClick={() => props.removePost(props.post.id)}>
//                                 <i className="far fa-trash-alt"></i>
//                                 Delete post
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         {profile}

//         <span>{props.post.content}</span>

//         {props.post.photo ? <img src={props.post.photo} /> : null}

//         <div className="comment-section">
//             <ul className="comments-list">
//                 {props.comments.map(el => (
//                     <CommentContainer comment={el} key={el.id}/>
//                 ))}
//             </ul>

//             <CreateCommentForm postId={props.post.id}/>
//         </div>
//     </li>
// }

export default withRouter(PostItem);
