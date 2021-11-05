import React from "react";
import PostItem from "../posts/post_item";

export default class Profile extends React.Component {
    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchProfilePosts();
        this.props.fetchProfileComments();

        if (this.props.user) {
            document.getElementById("create-post-form-button").innerText = `What's on your mind, ${this.props.user.first_name}?`
        }
    }

    render() {
        if (this.props.user) {
            return <div className="profile-wall">

                <div className="profile-header">
                    <div id="white-rectangle">
                        {this.props.user.profile_picture ? <img id="profile-picture" src={this.props.user.profile_picture} /> : <img id="profile-picture" src={window.defaultProfile} />}
                    </div>

                    <div id="profile-summary">
                        <h1>{this.props.user.first_name} {this.props.user.last_name}</h1>
                        {this.props.user === this.props.currentUser ? this.props.editUserModal() : null }
                        {/* {this.props.user === this.props.currentUser ? null :  } */}
                    </div>
                </div>

                <div className="create-post-form">
                    {this.props.user.profile_picture ? <img src={this.props.user.profile_picture} /> : <img src={window.defaultProfile} />}
                    {this.props.createPostFormModal}
                </div>

                <ul className="post-list">
                    {this.props.posts.map(post => (
                        <PostItem 
                            post={post} 
                            removePost={this.props.removePost} 
                            key={`${post.id}-${post.author_id}`} 
                            currentUser={this.props.currentUser}
                            editPostFormModal={this.props.editPostFormModal} 
                            author={this.props.users[post.author_id]}
                            comments={this.props.comments.filter(comment => comment.post_id === post.id)}
                            />
                    ))}
                </ul>
            </div>
        } else {
            return null;
        }
    }
}