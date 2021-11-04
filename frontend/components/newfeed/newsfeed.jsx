import React from "react";
import PostItem from "../posts/post_item"
import { Redirect } from "react-router";
import CreatePostFormContainer from "../posts/create_post_form_container";

export default class Newsfeed extends React.Component {
    componentDidMount() {
        this.props.fetchNewsfeedPosts();
        this.props.fetchNewsfeedComments();

        document.getElementById("create-post-form-button").innerText = `What's on your mind, ${this.props.currentUser.first_name}?`
    }

    render() {
        return <div className="newsfeed">
            <div className="create-post-form">
                {this.props.currentUser.profile_picture ? <img src={this.props.currentUser.profile_picture} /> : <img src={window.defaultProfile} />}
                {this.props.createPostFormModal}
            </div>
            <ul className="post-list">
                {this.props.posts.map(post => (
                    <PostItem 
                        post={post} 
                        removePost={this.props.removePost} 
                        key={`${post.id}-${post.author_id}`} 
                        editPostFormModal={this.props.editPostFormModal} 
                        author={this.props.users[post.author_id]}
                        comments={this.props.comments.filter(comment => comment.post_id === post.id)}
                        />
                )
                )}
            </ul>
        </div>
    }
}