import React from "react";
import { Link } from "react-router-dom";

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
        let signupLink;

        if (this.props.formType === "Sign Up") {
            email =  <label>Email:
            <input type="text" value={this.state.email} onChange={this.update("email")} />
            </label>
        } else {
            email = null;
        }

        if (this.props.formType === "Log In") {
            signupLink = <Link to="/signup">Create a new account</Link>;
        } else {
            signupLink = null;
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
            <br />
            {signupLink}
            <br />
            <button onClick={this.props.loginGuest}>Login as guest</button>
        </form>
    }
}