import React from "react";
import PostItem from "../posts/post_item";
import CreatePostFormContainer from "../posts/create_post_form_container";

export default class Profile extends React.Component {
    componentDidMount() {
        this.props.fetchProfilePosts()
    }

    render() {
        return <div>
            <CreatePostFormContainer />
            <ul>
                {this.props.posts.map(post => (
                    <PostItem post={post} key={`${post.id}-${post.author_id}`} />
                ))}
            </ul>
        </div>
    }
}