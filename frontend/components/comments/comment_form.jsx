import React from "react";

export default class CommentForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.comment;

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(e) {
        this.setState({ "content": e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ "content": "" });

        this.props.action(this.state)
            .then(() => {
                if (this.props.match.params.userId) {
                    this.props.fetchProfileComments();
                } else {
                    this.props.fetchNewsfeedComments();
                }
            })
    }

    render() {
        return <form>
            <input type="text" onChange={this.update} placeholder="Write a comment..." value={this.state.content}/>
            <button id="create-comment-button" onClick={this.handleSubmit}></button>
        </form>
    }
}