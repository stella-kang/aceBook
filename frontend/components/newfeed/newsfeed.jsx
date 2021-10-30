import React from "react";
import PostItem from "../posts/post_item"

export default class Newsfeed extends React.Component {
    componentDidMount() {
        this.props.fetchNewsfeedPosts();
    }

    render() {
        return <div>
            <button onClick={() => this.props.logout()}>Logout</button>
            <ul>
                {this.props.posts.map(post => (
                    <PostItem post={post} key={`${post.id}-${post.author_id}`}/>
                )
                )}
            </ul>
        </div>
    }
}