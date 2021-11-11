import React from "react";
import { createPost } from "../../util/posts_util";
import PostItem from "../posts/post_item";
import FriendsSectionContainer from "../friends/friends_section_container";
import FriendButtonContainer from "../friends/friend_button_container";
import CoverPhotoFormContainer from "../cover_photo/cover_photo_form_container";

export default class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.openChat = this.openChat.bind(this);
    }

    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchLikes();
        this.props.fetchProfileContent();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.props.clearPosts();
            this.props.fetchFriends();
            this.props.fetchProfileContent();
        }
    }

    componentWillUnmount() {
        this.props.clearPosts();
    }

    showPostsSection(e) {
        let postsSection = document.getElementById("profile-post-section")
        let friendsSection = document.getElementById("profile-friend-section")

        if (postsSection.style.display === 'none') {
            postsSection.style.display = "block"
        }

        if (friendsSection.style.display === "block") {
            friendsSection.style.display = "";
        }

        let postsLink = document.getElementById("show-posts-link");
        postsLink.classList.add("displayed");
        let friendLink = document.getElementById("show-friends-link");
        friendLink.classList.remove("displayed");
    }

    showFriendsSection(e) {
        let postsSection = document.getElementById("profile-post-section")
        let friendsSection = document.getElementById("profile-friend-section")

        postsSection.style.display = 'none';
        friendsSection.style.display = "block";

        let postsLink = document.getElementById("show-posts-link");
        postsLink.classList.remove("displayed");
        let friendLink = document.getElementById("show-friends-link");
        friendLink.classList.add("displayed");
    }

    openChat(e) {
        let chat = this.props.chats.find(chat => chat.user1_id === this.props.user.id || chat.user2_id === this.props.user.id)
        if (chat) {
            this.props.fetchMessages(chat.id);
            document.getElementById(`chatroom-${chat.id}`).style.display = "block";
            const currentChat = document.querySelector(".current-chat");
            if (currentChat) currentChat.classList.remove("current-chat");
            document.getElementById(`chat-close-button-${chat.id}`).classList.add("current-chat");
        } else {
            this.props.createChat({
                user1_id: this.props.currentUser.id,
                user2_id: this.props.user.id
            })
        }
    } 

    render() {
        if (this.props.user) {
            let createPostButton = document.getElementById("create-post-form-button")
            if (createPostButton) {
                let text;
                if (this.props.user.id === this.props.currentUser.id) {
                    text = `What's on your mind, ${this.props.user.first_name}?`
                }
                else {
                    text = `Write something to ${this.props.user.first_name}...`
                }
                createPostButton.innerText = text;
            }

            return <div className="profile-wall">
                <div id="white-background">
                    <div className="profile-cover-photo">
                        {this.props.user.cover_photo ? <img id="cover-photo" src={this.props.user.cover_photo} /> : <div id="cover-photo-default"></div>}
                        {this.props.user === this.props.currentUser ? <CoverPhotoFormContainer /> : null}
                    </div>

                    <div className="profile-header">
                        <div id="profile-summary">
                            {this.props.user.profile_picture ? <img id="profile-picture" src={this.props.user.profile_picture} /> : <img id="profile-picture" src={window.defaultProfile} />}
                            <h1>{this.props.user.first_name} {this.props.user.last_name}</h1>

                            <div className="profile-buttons-and-links">
                                <div className="profile-links">
                                    <a id="show-posts-link" onClick={this.showPostsSection} className="displayed">
                                        Posts
                                    </a>

                                    <a id="show-friends-link" onClick={this.showFriendsSection}>
                                        Friends
                                    </a>
                                </div>

                                <div className="profile-buttons">
                                    {this.props.user === this.props.currentUser ? this.props.editUserModal() : null}
                                    {this.props.user === this.props.currentUser ? null : <FriendButtonContainer user={this.props.user} buttonType="profile"/>}
                                    {this.props.user === this.props.currentUser ? null : <button id="profile-message-button" onClick={this.openChat}className="profile-button">
                                            <i className="fas fa-comment"></i>
                                            <span>Message</span>
                                        </button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="profile-post-section">
                    {this.props.friends.some(friend => friend.friend_id === this.props.currentUser.id && friend.user_id === this.props.user.id && friend.status === true) || this.props.user.id === this.props.currentUser.id ?
                        <div className="create-post-form">
                            {this.props.currentUser.profile_picture ? <img src={this.props.currentUser.profile_picture} /> : <img src={window.defaultProfile} />}
                            {this.props.createPostFormModal}
                        </div> : null
                    }

                    <ul className="post-list">
                        {this.props.posts.length !== 0 ? this.props.posts.map(post => (
                            <PostItem
                                post={post}
                                removePost={this.props.removePost}
                                key={`${post.id}-${post.author_id}`}
                                currentUser={this.props.currentUser}
                                editPostFormModal={this.props.editPostFormModal}
                                author={this.props.users[post.author_id]}
                                comments={this.props.comments.filter(comment => comment.post_id === post.id)}
                                likes={this.props.likes.filter(like => like.likeable_type === "Post" && like.likeable_id === post.id)}
                                createLike={this.props.createLike}
                                deleteLike={this.props.deleteLike}
                            />
                        )) : <div id="no-posts">This user has no posts.</div>}
                    </ul>
                </div>

                <FriendsSectionContainer />
            </div>
        } else {
            return null;
        }
    }
}