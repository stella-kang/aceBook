import React from "react";

export default class PostForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.post

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePhotoChange = this.handlePhotoChange.bind(this);
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

    handlePhotoChange(e) {
        this.setState({ photo: e.target.files[0] })
        document.getElementById("photo-input-icon").classList.add("green-icon")
    }

    handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('post[content]', this.state.content)
        formData.append('post[profile_id]', this.state.profile_id)
        formData.append('post[author_id]', this.state.author_id)
        if (this.state.photo) {
            formData.append('post[photo]', this.state.photo)
        }

        if (this.props.match.params.userId) {
            this.props.action(formData)
                .then(() => this.props.fetchProfilePosts(this.props.match.params.userId))
        } else {
            this.props.action(formData)
                .then(() => this.props.fetchNewsfeedPosts())
        }

        this.props.closeModal();
    }

    render() {
        return <div>
            <form className="post-form" onSubmit={this.handleSubmit}>
                <div className="post-form-heading">
                    <h1>{this.props.formType}</h1>
                    <i className="fas fa-times fa-2x" onClick={this.props.closeModal}></i>
                </div>

                <div id="current-user-info">
                    {this.props.user.profile_picture ? <img src={this.props.user.profile_picture} /> : <img src={window.defaultProfile} />}
                    {this.props.user.first_name}
                </div>

                <textarea id="content" value={this.state.content} onChange={this.update("content")} placeholder={`What's on your mind, ${this.props.user.first_name}?`} />
                
                <div id="picture-input">
                    <span>Add a picture to your post</span>
                    <input id="post-photo-input" type="file" accept="image/png, image/jpeg" onChange={this.handlePhotoChange}/>
                    <i id="photo-input-icon" className="far fa-images fa-2x" onClick={() => document.getElementById("post-photo-input").click()}></i>
                </div>
                
                <button id="post-save-button" disabled>{this.props.formType === "Create post" ? "Post" : "Save"}</button>
            </form>
        </div>
    }
}