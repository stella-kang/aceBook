import React from "react";

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
        document.getElementById("photo-input-icon").classList.add("green-icon")
        this.setState({ profile_picture: e.target.files[0] })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.clearErrors();

        if (this.props.formType === "Log In" || this.props.formType === "Sign Up") {
            this.props.action(this.state)
                .then(() => { if (this.props.closeModal) this.props.closeModal() });
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
        this.props.clearErrors();

        this.props.action({
            email: "demo@email.com",
            password: "password"
        })
    }

    render() {
        let emailError;
        let passwordError;
        let firstNameError;
        let lastNameError;
        let loginError;

        if (this.props.errors !== []) {
            if (!(this.props.modal && this.props.formType === "Log In")) {
                document.querySelectorAll(".error-field").forEach(el => el.classList.remove("error-field"));
                this.props.errors.forEach(el => {
                    if (el.includes("Email")) {
                        document.getElementById("email").classList.add("error-field");
                        document.getElementById("email-error").style.display = "flex";
                        emailError = el
                    } else if (el.includes("Password")) {
                        document.getElementById("password").classList.add("error-field");
                        document.getElementById("password-error").style.display = "flex";
                        passwordError = el;
                    } else if (el.includes("First")) {
                        document.getElementById("first-name").classList.add("error-field");
                        document.getElementById("first-name-error").style.display = "flex";
                        firstNameError = el;
                    } else if (el.includes("Last")) {
                        document.getElementById("last-name").classList.add("error-field");
                        document.getElementById("last-name-error").style.display = "flex";
                        lastNameError = el;
                    } else if (el.includes("credentials")) {
                        document.getElementById("password").classList.add("error-field");
                        document.getElementById("email").classList.add("error-field");
                        document.getElementById("login-error").style.display = "flex";
                        loginError = el;
                    }
                })
            }
        }

        return <div className="form-content">
            <form className="session-form" encType="multipart/form-data">
                {this.props.formType === "Sign Up" ? <div id="signup-header">
                    <div>
                    <h1>Sign Up</h1>
                    <p>It's quick and easy.</p>
                    </div>
                    <i className="fas fa-times fa-2x" onClick={this.props.closeModal}></i>
                </div> : this.props.formType === "Save Changes" ? <div id="edit-profile-header">
                    <div>
                        <h1>Edit Profile</h1>
                        <button onClick={this.props.closeModal}>
                            <i className="fas fa-times fa-1x"></i>
                        </button>
                    </div>
                    <div></div>
                </div> : null}

                <div id="names-form">
                    <div className="input-field" id="first-name-input">
                        {this.props.formType === "Log In" ? null : <input
                            type="text"
                            value={this.state.first_name}
                            placeholder="First Name"
                            id="first-name"
                            onChange={this.update("first_name")} />}
                        <div className="errors" id="first-name-error">{firstNameError}</div>
                    </div>

                    <div className="input-field" id="last-name-input">
                        {this.props.formType === "Log In" ? null : <input
                            type="text"
                            value={this.state.last_name}
                            placeholder="Last Name"
                            id="last-name"
                            onChange={this.update("last_name")} />}
                        <div className="errors" id="last-name-error">{lastNameError}</div>
                    </div>
                </div>

                    {this.props.formType === "Save Changes" ? <div className="picture-input" onClick={() => document.getElementById("photo-input").click()}>
                    <span>Edit profile picture</span>
                    <input id="photo-input" type="file" accept="image/png, image/jpeg" onChange={this.handleProfilePictureChange} />
                    <i id="photo-input-icon" className="far fa-images fa-2x"></i>
                    </div> : null}

                <div className="input-field" id="email-input">
                    <input type="text" value={this.state.email} placeholder="Email" id="email" onChange={this.update("email")} />
                    <div className="errors" id="email-error">{emailError}</div>
                </div>

                <div className="input-field" id="password-input">
                    <input type="password" value={this.state.password} placeholder="Password" id="password" onChange={this.update("password")} />
                    <div className= "errors" id="password-error">{passwordError}</div>
                </div>
                
                <div className="errors" id="login-error">{loginError}</div>

                <button onClick={this.handleSubmit} id="submit-button">{this.props.formType}</button>

                {this.props.formType === "Log In" ? <button id="guest-login" onClick={this.handleGuestLogin}>Log In as Guest</button> : null}
               
                {this.props.formType === "Log In" ? <div id="login-separator"></div> : null}
                {this.props.formType === "Log In" ? this.props.signupModal : null}

            </form>
        </div>
    }
}