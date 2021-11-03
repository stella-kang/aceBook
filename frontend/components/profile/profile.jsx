import React from "react";
import PostItem from "../posts/post_item";
import CreatePostFormContainer from "../posts/create_post_form_container";
import EditProfileForm from "../session/edit_form_container"
import { closeModal } from '../../actions/modal_actions';

export default class Profile extends React.Component {
    componentDidMount() {
        this.props.fetchProfilePosts()
    }

    render() {
        return <div>
            <EditProfileForm  closeModal={closeModal}/>
            <CreatePostFormContainer />
            {this.props.user.profile_picture ? <img src={this.props.user.profile_picture} /> : <img src={window.defaultProfile} />}
            <ul>
                {this.props.posts.map(post => (
                    <PostItem post={post} removePost={this.props.removePost} key={`${post.id}-${post.author_id}`} />
                ))}
            </ul>
        </div>
    }
}