import React from "react";

export default class PostForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.post

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        document.getElementById("content").focus();
    }

    update(type) {
        return (e) => {
            let button = document.getElementById("post-save-button");
            button.disabled = false;
            this.setState({ [type]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.props.match.params.userId) {
            this.props.action(this.state)
                .then(() => this.props.fetchProfilePosts(this.props.match.params.userId))
        } else {
            this.props.action(this.state)
                .then(() => { this.props.fetchNewsfeedPosts() })
        }

        this.props.closeModal();
    }

    render() {
        return <div>
            <form className="post-form" onSubmit={this.handleSubmit}>
                <h1>{this.props.formType}</h1>
                <div id="current-user-info">
                    {this.props.user.profile_picture ? <img src={this.props.user.profile_picture} /> : <img src={window.defaultProfile} />}
                    {this.props.user.first_name}
                </div>
                <textarea id="content" value={this.state.content} onChange={this.update("content")} placeholder={`What's on your mind, ${this.props.user.first_name}?`} />
                <div id="picture-input">
                    <span>Add a picture to your post</span>
                    <input id="post-photo-input" type="file" accept="image/png, image/jpeg" />
                    <i className="far fa-images fa-2x" onClick={() => document.getElementById("post-photo-input").click()}></i>
                </div>
                <button id="post-save-button" disabled>{this.props.formType === "Create post" ? "Post" : "Save"}</button>
            </form>
        </div>
    }
}