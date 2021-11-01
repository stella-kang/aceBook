import React from "react";
import PostItem from "../posts/post_item"
import { Redirect } from "react-router";

export default class Newsfeed extends React.Component {
    componentDidMount() {
        this.props.fetchNewsfeedPosts();
    }

    render() {
        return <div>
            <button onClick={() => this.props.logout()}>Logout</button>
            <button onClick={() => this.props.history.push(`/${this.props.currentUserId}/profile`)}>View Profile</button>
            <ul>
                {this.props.posts.map(post => (
                    <PostItem post={post} removePost={this.props.removePost} key={`${post.id}-${post.author_id}`}/>
                )
                )}
            </ul>
        </div>
    }
}