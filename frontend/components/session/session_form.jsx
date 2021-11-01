import React from "react";
import { Link } from "react-router-dom";

export default class SessionFrom extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            first_name: "",
            last_name: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGuestLogin = this.handleGuestLogin.bind(this);
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

    handleGuestLogin(e) {
        e.preventDefault()

        this.props.action({
            email: "stella@email.com",
            password: "password"
        })
    }

    render() {
        let signupLink;
        let guestLogin;
        let firstNameField;
        let lastNameField;
        let loginLink;

        if (this.props.formType === "Log In") {
            signupLink = <Link to="/signup">Create a new account</Link>;
            guestLogin = <button onClick={this.handleGuestLogin}>Login as guest</button>;
            firstNameField = null;
            lastNameField = null;
            loginLink = null;
        } else {
            signupLink = null;
            guestLogin = null;
            firstNameField = <label> First Name: <input type="text" value={this.state.first_name} onChange={this.update("first_name")} /></label>
            lastNameField = <label> Last Name: <input type="text" value={this.state.last_name} onChange={this.update("last_name")} /></label>
            loginLink = <Link to="/">Already have an account? Log in</Link>;
        }

        return <form onSubmit={this.handleSubmit}>
            {firstNameField}
            {lastNameField}
            <label>Email:
            <input type="text" value={this.state.email} onChange={this.update("email")} />
            </label>
            <br />
            <label>Password:
            <input type="password" value={this.state.password} onChange={this.update("password")} />
            </label>
            <br />
            <button>{this.props.formType}</button>
            <br />
            {signupLink}
            <br />
            {loginLink}
            <br />
            {guestLogin}
        </form>
    }
}