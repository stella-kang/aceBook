import React from "react";
import { Link } from "react-router-dom";

export default class SessionFrom extends React.Component {

    constructor(props) {
        super(props);

        this.state = this.props.user

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGuestLogin = this.handleGuestLogin.bind(this);
        this.handleProfilePictureChange = this.handleProfilePictureChange.bind(this);
    }

    update(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    handleProfilePictureChange(e) {
        this.setState({ profile_picture: e.target.files[0] })
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.props.formType === "Log In" || this.props.formType === "Sign Up") {
            this.props.action(this.state)
                .then( () => this.props.closeModal());
        } else {
            const formData = new FormData();
            formData.append('user[email]', this.state.email);
            formData.append('user[first_name]', this.state.first_name);
            formData.append('user[last_name]', this.state.last_name);
            if (this.props.formType === "Sign Up" || this.state.password !== "") {
                formData.append('user[password]', this.state.password);
            }
            if (this.state.id) {
                formData.append('user[id]', this.state.id)
            }
            if (this.state.profile_picture) {
                formData.append('user[profile_picture]', this.state.profile_picture);
            }

            this.props.action(formData)
                .then(() => this.props.closeModal());
        }

        this.setState({ password: "" })
    }

    handleGuestLogin(e) {
        e.preventDefault()

        this.props.action({
            email: "stella@email.com",
            password: "password"
        })
    }

    render() {
        let errors;

        if (this.props.errors !== []) {
            if (!(this.props.modal && this.props.formType === "Log In")) {
                document.querySelectorAll(".error-field").forEach(el => el.classList.remove("error-field"));
                this.props.errors.forEach(el => {
                    if (el.includes("Email")) {
                        document.getElementById("email").classList.add("error-field")
                    } else if (el.includes("Password")) {
                        document.getElementById("password").classList.add("error-field")
                    } else if (el.includes("First")) {
                        document.getElementById("first-name").classList.add("error-field")
                    } else if (el.includes("Last")) {
                        document.getElementById("last-name").classList.add("error-field")
                    } else if (el.includes("credentials")) {
                        document.getElementById("password").classList.add("error-field")
                        document.getElementById("email").classList.add("error-field")
                    }
                })

                debugger

                errors = <ul className="errors">
                    {this.props.errors.map((el) => (
                        <li key={el}>{el}</li>
                    ))}
                </ul>
            }
        }

        return <div id="form-content">
            <form id="session-form" encType="multipart/form-data">
                {errors}

                {this.props.formType === "Sign Up" ? <div id="signup-header">
                    <div>
                    <h1>Sign Up</h1>
                    <p>It's quick and easy.</p>
                    </div>
                    <i className="fas fa-times fa-2x" onClick={this.props.closeModal}></i>
                </div> : null}

                <div id="names-form">
                {this.props.formType === "Log In" ? null : <input
                    type="text"
                    value={this.state.first_name}
                    placeholder="First Name"
                    id="first-name"
                    onChange={this.update("first_name")} />}

                {this.props.formType === "Log In" ? null : <input
                    type="text"
                    value={this.state.last_name}
                    placeholder="Last Name"
                    id="last-name"
                    onChange={this.update("last_name")} />}
                </div>

                {this.props.formType === "Save Changes" ? <label>Profile Picture <input
                    type="file"
                    onChange={this.handleProfilePictureChange}
                    // value={this.state.profile_picture.filename}
                    accept="image/png, image/jpeg" />
                </label> : null}

                <input type="text" value={this.state.email} placeholder="Email" id="email" onChange={this.update("email")} />

                <input type="password" value={this.state.password} placeholder="Password" id="password" onChange={this.update("password")} />

                <button onClick={this.handleSubmit} id="submit-button">{this.props.formType}</button>

                {this.props.formType === "Log In" ? <button id="guest-login" onClick={this.handleGuestLogin}>Log In as Guest</button> : null}
               
                {this.props.formType === "Log In" ? <div id="login-separator"></div> : null}
                {this.props.formType === "Log In" ? this.props.signupModal : null}

            </form>
        </div>
    }
}