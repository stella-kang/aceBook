import React from "react";

export default class PostForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.post

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(type) {
        return (e) => {
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
                .then(() => this.props.fetchNewsfeedPosts())
        }
    }

    render() {
        return <div>
            <form onSubmit={this.handleSubmit}>
                <textarea value={this.state.content} onChange={this.update("content")} />
                <button>Save</button>
            </form>
        </div>
    }
}