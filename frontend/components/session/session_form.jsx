import { thistle } from "color-name";
import React from "react";

export default class SessionFrom extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            email: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.action(this.state);
    }

    render() {
        let email;

        if (this.props.formType === "Sign Up") {
            email =  <label>Email:
            <input type="text" value={this.state.email} onChange={this.update("email")} />
            </label>
        } else {
            email = null;
        }

        return <form onSubmit={this.handleSubmit}>
            <label>Username:
            <input type="text" value={this.state.username} onChange={this.update("username")} />
            </label>
            <br />
            <label>Password:
            <input type="password" value={this.state.password} onChange={this.update("password")} />
            </label>
            <br />
            {email}
            <br />
            <button>{this.props.formType}</button>
        </form>
    }
}