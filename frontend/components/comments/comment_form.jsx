import React from "react";

export default class CommentForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.comment;

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.formType === 'edit') {
            const commentForms = document.querySelectorAll(".comment-edit-form")
            commentForms.forEach(form => {
                form.addEventListener("keydown", (e) => {
                    if (e.key === 'Escape') {
                        form.style.display = '';

                        const commentItem = document.querySelectorAll(`#comment-${this.props.comment.id}`);
                        const commentDetails = document.querySelectorAll(`#comment-menu-${this.props.comment.id}`);
                        
                        if (commentItem && commentDetails) {
                            commentItem.forEach(comment => comment.style.display = "");
                            commentDetails.forEach(comment => comment.style.display = "");
                        }
                    }
                })
            })
        }
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
                el.style.display = "";
            }
            );
        }

        let commentItem;
        let commentMenu;

        if (this.props.lastComment) {
            commentItem = document.querySelectorAll(`#comment-${this.props.comment.id}`).item(1);
            commentMenu = document.querySelectorAll(`#comment-menu-${this.props.comment.id}`).item(1)
        } else {
            commentItem = document.getElementById(`comment-${this.props.comment.id}`);
            commentMenu = document.getElementById(`comment-menu-${this.props.comment.id}`)
        }

        commentItem.style.display = "";
        commentMenu.style.display = "";
    }

    render() {
        return <form>
            <div className="create-comment-form">
                <input id={`comment-input-${this.props.comment.post_id}-${this.props.comment.id}`} type="text" onChange={this.update} placeholder="Write a comment..." value={this.state.content}/>
                <button className="create-comment-button" onClick={this.handleSubmit}></button>
            </div>
        </form>
    }
}