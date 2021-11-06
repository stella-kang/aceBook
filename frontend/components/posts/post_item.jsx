import React from 'react';
import CommentContainer from '../comments/comment_container';
import CreateCommentForm from "../comments/create_comment_container"

class PostItem extends React.Component {
    handleDropDownClick(e) {
        e.stopPropagation();
        const postMenu = document.getElementById("post-dropdown-content");
        if (postMenu.style.display === "") {
            postMenu.style.display = "block";
        } else {
            postMenu.style.display = "";
        }
    }

    render() {
        let profile;

        if (this.props.post.profile) {
            profile = <span>{this.props.post.profile.first_name} {this.props.post.profile.last_name}</span>
        }

        if (this.props.post) {
            return <li className="post-item">
                <div className="post-header">
                    <div id="post-details">
                        {this.props.author.profile_picture ? <img src={this.props.author.profile_picture} /> : <img src={window.defaultProfile} />}
                        <span>{this.props.author.first_name} {this.props.author.last_name}</span>
                    </div>

                    <div className="post-dropdown-menu">
                        <button id="post-dropdown-button" onClick={this.handleDropDownClick}>
                            <i className="fas fa-ellipsis-h fa-2x"></i>
                        </button>

                        <div id="post-dropdown-content">
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

                {profile}

                <span>{this.props.post.content}</span>

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

export default PostItem;
