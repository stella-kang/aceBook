import React from "react";
import PostIndexItem from "../posts/post_index_item"

export default class Newsfeed extends React.Component {
    componentDidMount() {
        this.props.fetchNewsfeedPosts();
    }

    render() {
        return <div>
            {this.props.posts.map(post => (
                <PostIndexItem post={post} key={`${post.id}-${post.author_id}`}/>
            )
            )}
        </div>
    }
}