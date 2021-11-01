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

        if (this.state.profile_id) {
            this.props.action(this.state)
                .then(() => this.props.fetchProfilePosts(this.state.profile_id))
        } else {
            this.props.action(this.state)
                .then(() => this.props.fetchNewfeedPosts())
        }

        this.setState( { content: "" })
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