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

        this.props.action(this.state)

        if (this.props.formType === "create") {
            this.setState({ "content": "" });
        }

        const editForm = document.querySelectorAll(".comment-edit-form");
        if (editForm) {
            editForm.forEach(el => {
                el.style.display = ""
            }
            );
        }

        const commentItem = document.getElementById(`comment-${this.props.comment.id}`);
        if (commentItem) {
            commentItem.style.display = "flex";
        }
    }

    render() {
        return <form>
            <input id={`comment-input-${this.props.comment.post_id}-${this.props.comment.id}`} type="text" onChange={this.update} placeholder="Write a comment..." value={this.state.content}/>
            <button id="create-comment-button" onClick={this.handleSubmit}></button>
        </form>
    }
}