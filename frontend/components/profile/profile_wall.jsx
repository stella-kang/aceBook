import React from "react";
import PostItem from "../posts/post_item";

export default class ProfileWall extends React.Component {
    componentDidMount() {
        this.props.fetchProfilePosts()
    }

    render() {
        return <div>
            <ul>
                {this.props.posts.map(post => (
                    <PostItem post={post} key={`${post.id}-${post.author_id}`} />
                ))}
            </ul>
        </div>
    }
}