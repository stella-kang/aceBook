import React from "react";
import PostItem from "../posts/post_item";
import NewsfeedFriendItem from './newsfeed_friend_item';
import { Redirect } from "react-router";
import CreatePostFormContainer from "../posts/create_post_form_container";

export default class Newsfeed extends React.Component {
    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchNewsfeedContent();
        this.props.fetchLikes();
        // this.props.fetchNewsfeedComments();
        // this.props.fetchNewsfeedPosts();

        let createPostFormButton = document.getElementById("create-post-form-button")
        createPostFormButton.innerText = `What's on your mind, ${this.props.currentUser.first_name}?`
    }

    componentWillUnmount() {
        this.props.clearPosts();
    }
    render() {
        return <div className="newsfeed">
            <div className="newsfeed-links">
                <a onClick={() => this.props.history.push(`/${this.props.currentUser.id}/profile`)}>
                    {this.props.currentUser.profile_picture ? <img src={this.props.currentUser.profile_picture} /> : <img src={window.defaultProfile} />}
                    <span>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</span>
                </a>
                <a href="https://github.com/stella-kang/aceBook">
                    <img src={window.githubLogo} />
                    <span>Github</span>
                </a>
                <a href="https://www.linkedin.com/in/stella-kang-33302b127/">
                    <img src={window.linkedinLogo} />
                    <span>LinkedIn</span>
                </a>
            </div>

            <div className="newsfeed-scroll">
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
                            currentUser={this.props.currentUser}
                            author={this.props.users[post.author_id]}
                            profile={post.profile_id ? this.props.users[post.profile_id] : null}
                            comments={this.props.comments.filter(comment => comment.post_id === post.id)}
                            likes={this.props.likes.filter(like => like.likeable_type === "Post" && like.likeable_id === post.id)}
                            createLike={this.props.createLike}
                            deleteLike={this.props.deleteLike}
                        />
                    )
                    )}
                </ul>
            </div>

            {Object.values(this.props.users).length < 2 ? null :
                <div className="newsfeed-friends-list">
                    <div>Friends</div>
                    {this.props.friends.length !== 0 ?
                        <ul>
                            {this.props.friends.map(friend => (
                                <NewsfeedFriendItem friend={this.props.users[friend.friend_id]} key={friend.id} />
                            ))}
                        </ul> : <div id="newsfeed-no-friends">No friends.</div>}
                </div>
            }
        </div>
    }
}