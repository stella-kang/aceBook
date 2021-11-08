import React from "react";
import { createPost } from "../../util/posts_util";
import PostItem from "../posts/post_item";
import FriendsSectionContainer from "../friends/friends_section_container";
import FriendButtonContainer from "../friends/friend_button_container";

export default class Profile extends React.Component {
    constructor(props) {
        super(props);

        // this.handleCreateFriendRequest = this.handleCreateFriendRequest.bind(this);
        // this.handleDeleteFriendRequest = this.handleDeleteFriendRequest.bind(this);
        // this.handleUpdateFriendRequest = this.handleUpdateFriendRequest.bind(this);
    }

    componentDidMount() {
        this.props.fetchUsers();
        // this.props.fetchFriends();
        this.props.fetchProfilePosts();
        this.props.fetchProfileComments();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.props.clearPosts();
            this.props.fetchUsers();
            this.props.fetchFriends();
            this.props.fetchProfilePosts();
            this.props.fetchProfileComments();
        }
    }

    componentWillUnmount() {
        this.props.clearPosts();
    }

    // handleCreateFriendRequest(e) {
    //     this.props.createFriendRequest({
    //         user_id: this.props.currentUser.id,
    //         friend_id: this.props.user.id
    //     })
    // }

    // handleDeleteFriendRequest(e) {
    //     const requests = Object.values(this.props.friends).filter(friend => {
    //         return (friend.user_id === this.props.user.id && friend.friend_id === this.props.currentUser.id) || (friend.user_id === this.props.currentUser.id && friend.friend_id === this.props.user.id)
    //     })

    //     requests.forEach(request => {
    //         this.props.deleteFriendRequest(request.id)
    //     })
    // }

    // handleUpdateFriendRequest(e) {
    //     let originalRequest = this.props.userFriends.find(friend => friend.friend_id === this.props.currentUser.id)

    //     this.props.updateFriendRequest({
    //         user_id: originalRequest.user_id,
    //         friend_id: originalRequest.friend_id,
    //         status: true,
    //         id: originalRequest.id
    //     })

    //     this.props.createFriendRequest({
    //         user_id: this.props.currentUser.id,
    //         friend_id: this.props.user.id,
    //         status: true
    //     })
    // }

    // handleDropDownClick(e) {
    //     e.stopPropagation()

    //     const friendRequestMenu = document.getElementById("friend-request-content");
    //     if (friendRequestMenu.style.display === "") {
    //         friendRequestMenu.style.display = "block"
    //     } else {
    //         friendRequestMenu.style.display = ""
    //     }
    // }

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

    render() {
        if (this.props.user) {
            // let friendButton;
            // let friendButtonDropdown;

            // if (this.props.currentUserFriends.some(friend => friend.friend_id === this.props.user.id && friend.status === true)) {
            //     friendButton = <button id="friends-approved" onClick={this.handleDropDownClick}>
            //         <i className="fas fa-user-check"></i>
            //         <span>Friends</span>
            //     </button>

            //     friendButtonDropdown = <div id="friend-request-content">
            //         <div>
            //             <button onClick={this.handleDeleteFriendRequest}>
            //                 <i className="fas fa-user-minus"></i>
            //                 <span>Unfriend</span>
            //             </button>
            //         </div>
            //     </div>
            // } else if (this.props.currentUserFriends.some(friend => friend.friend_id === this.props.user.id && friend.status === false)) {
            //     friendButton = <button onClick={this.handleDeleteFriendRequest}>
            //         <i className="fas fa-user-minus"></i>
            //         <span>Cancel Request</span>
            //     </button>
            // } else if (this.props.userFriends.some(friend => friend.friend_id === this.props.currentUser.id && friend.status === false)) {
            //     friendButton = <button onClick={this.handleDropDownClick}>
            //         <i className="fas fa-user-plus"></i>
            //         <span>Respond</span>
            //     </button>

            //     friendButtonDropdown = <div id="friend-request-content">
            //         <div>
            //             <button onClick={this.handleUpdateFriendRequest}>Confirm</button>
            //             <button onClick={this.handleDeleteFriendRequest}>Delete request</button>
            //         </div>
            //     </div>
            // } else if (!(this.props.currentUserFriends.some(friend => friend.friend_id === this.props.user.id && friend.status === true))) {
            //     friendButton = <button onClick={this.handleCreateFriendRequest}>
            //         <i className="fas fa-user-plus"></i>
            //         <span>Add Friend</span>
            //     </button>
            // }

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

                <div className="profile-header">
                    <div id="white-rectangle">
                        {this.props.user.profile_picture ? <img id="profile-picture" src={this.props.user.profile_picture} /> : <img id="profile-picture" src={window.defaultProfile} />}
                    </div>

                    <div id="profile-summary">
                        <h1>{this.props.user.first_name} {this.props.user.last_name}</h1>

                        <div className="profile-buttons">
                            <div className="profile-links">
                                <a id="show-posts-link" onClick={this.showPostsSection} className="displayed">
                                    Posts
                                    <div></div>
                                </a>

                                <a id="show-friends-link" onClick={this.showFriendsSection}>
                                    Friends
                                    <div></div>
                                </a>
                            </div>

                            <div className="friend-request-dropdown">
                                {this.props.user === this.props.currentUser ? this.props.editUserModal() : null}
                                {this.props.user === this.props.currentUser ? null : <FriendButtonContainer user={this.props.user} buttonType="profile"/>}
                                {/* {this.props.user === this.props.currentUser ? null : friendButton}
                                {this.props.user === this.props.currentUser ? null : friendButtonDropdown} */}
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
                        {this.props.posts.map(post => (
                            <PostItem
                                post={post}
                                removePost={this.props.removePost}
                                key={`${post.id}-${post.author_id}`}
                                currentUser={this.props.currentUser}
                                editPostFormModal={this.props.editPostFormModal}
                                author={this.props.users[post.author_id]}
                                comments={this.props.comments.filter(comment => comment.post_id === post.id)}
                            />
                        ))}
                    </ul>
                </div>

                <FriendsSectionContainer />
            </div>
        } else {
            return null;
        }
    }
}