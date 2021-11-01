import React from "react";
import PostItem from "../posts/post_item";
import CreatePostFormContainer from "../posts/create_post_form_container";
import EditProfileForm from "../session/edit_form_container"

export default class Profile extends React.Component {
    componentDidMount() {
        this.props.fetchProfilePosts()
    }


    render() {
        return <div>
            <EditProfileForm />
            <CreatePostFormContainer />
            <ul>
                {this.props.posts.map(post => (
                    <PostItem post={post} removePost={this.props.removePost} key={`${post.id}-${post.author_id}`} />
                ))}
            </ul>
        </div>
    }
}