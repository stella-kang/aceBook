import React from "react";
import PostItem from "../posts/post_item";
import CreatePostFormContainer from "../posts/create_post_form_container";
import EditProfileForm from "../session/edit_form_container"
import { closeModal } from '../../actions/modal_actions';

export default class Profile extends React.Component {
    componentDidMount() {
        this.props.fetchProfilePosts()

        document.getElementById("create-post-form-button").innerText = `What's on your mind, ${this.props.user.first_name}?`
    }

    render() {
        return <div className="profile-wall">

            <div className="profile-header">
                <div id="white-rectangle">
                    {this.props.user.profile_picture ? <img id="profile-picture" src={this.props.user.profile_picture} /> : <img id="profile-picture" src={window.defaultProfile} />}
                </div>

                <div id="profile-summary">
                    <h1>{this.props.user.first_name} {this.props.user.last_name}</h1>
                    {this.props.editUserModal()}
                </div>
            </div>

            <div className="create-post-form">
                {this.props.user.profile_picture ? <img src={this.props.user.profile_picture} /> : <img src={window.defaultProfile} />}
                {this.props.createPostFormModal}
            </div>

            <ul className="post-list">
                {this.props.posts.map(post => (
                    <PostItem post={post} removePost={this.props.removePost} key={`${post.id}-${post.author_id}`} editPostFormModal={this.props.editPostFormModal} author={this.props.users[post.author_id]}/>
                ))}
            </ul>
        </div>
    }
}