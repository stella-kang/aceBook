import React from "react";

class MessageForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            body: "" 
        };

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(e) {
        this.setState({ ["body"]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        App.cable.subscriptions.subscriptions[0].speak({ message: this.state.body});
        this.setState({ body: "" });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.body} onChange={this.update} placeholder="Type message here" />
                    <button></button>
                </form>
            </div>
        );
    }
}

export default MessageForm;