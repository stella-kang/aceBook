import React from "react";
import PostItem from "../posts/post_item";
import NewsfeedFriendItem from './newsfeed_friend_item';

export default class Newsfeed extends React.Component {
    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchNewsfeedContent();
        this.props.fetchLikes();

        let createPostFormButton = document.getElementById("create-post-form-button");
        createPostFormButton.innerText = `What's on your mind, ${this.props.currentUser.first_name}?`;
    }

    componentWillUnmount() {
        this.props.clearPosts();
    }

    openChat(friendId) {
        return (e) => {
            let chat = this.props.chats.find(chat => chat.user1_id === friendId || chat.user2_id === friendId)
            if (chat) {
                this.props.fetchMessages(chat.id);
                document.getElementById(`chatroom-${chat.id}`).style.display = "block";
                const currentChat = document.querySelector(".current-chat");
                if (currentChat) currentChat.classList.remove("current-chat");
                document.getElementById(`chat-close-button-${chat.id}`).classList.add("current-chat");
            } else {
                this.props.createChat({
                    user1_id: this.props.currentUser.id,
                    user2_id: friendId
                })
            }
        }
    }

    render() {
        let friends = this.props.friends.map(friend => this.props.users[friend.friend_id]).sort((f1, f2) => f1.first_name > f2.first_name ? 1 : -1);

        return <div className="newsfeed">
            <div className="newsfeed-links">
                <a onClick={() => this.props.history.push(`/${this.props.currentUser.id}/profile`)}>
                    {this.props.currentUser.profile_picture ? <img src={this.props.currentUser.profile_picture} /> : <img src={window.defaultProfile} />}
                    <span>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</span>
                </a>
                <a href="https://github.com/stella-kang/aceBook" target="_blank">
                    <img src={window.githubLogo} />
                    <span>Github</span>
                </a>
                <a href="https://www.linkedin.com/in/stella-kang-33302b127/" target="_blank">
                    <img src={window.linkedinLogo} />
                    <span>LinkedIn</span>
                </a>

                <a href="https://angel.co/u/stella-kang-2" target="_blank">
                    <img src={window.angelLogo} />
                    <span>Angel</span>
                </a>

                <a href="https://stellakang.dev/" target="_blank">
                    <i id="portfolio-icon" class="fas fa-user-alt fa-2x"></i>
                    <span id="portfolio-link">Portfolio</span>
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
                    <div>Contacts</div>
                    {this.props.friends.length !== 0 ?
                        <ul>
                            {friends.map(friend => (
                                <li onClick={this.openChat(friend.id)} key={`${friend.id}`}>
                                    <NewsfeedFriendItem friend={friend} />
                                </li>
                            ))}
                        </ul> : <div id="newsfeed-no-friends">No friends.</div>}
                </div>
            }
        </div>
    }
}
