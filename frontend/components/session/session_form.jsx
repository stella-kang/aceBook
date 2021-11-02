import React from "react";
import { Link } from "react-router-dom";

export default class SessionFrom extends React.Component {
    componentWillUnmount() {
        this.props.clearErrors();
    }

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
        this.setState({profile_picture: e.target.files[0]})
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.props.formType === "Log In") {
            this.props.action(this.state);
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
        }

        this.setState({
            password: ""
        })
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
            errors = <ul>
                {this.props.errors.map((el) => (
                    <li key={el}>{el}</li>
                ))}
            </ul>
        }

        return <form onSubmit={this.handleSubmit} encType="multipart/form-data">
            {errors}
            {this.props.formType === "Log In" ? null : <label> First Name: <input 
                type="text" 
                value={this.state.first_name} 
                onChange={this.update("first_name")} />
                </label> }
            {this.props.formType === "Log In" ? null : <label> Last Name: <input 
                type="text" 
                value={this.state.last_name} 
                onChange={this.update("last_name")} />
                </label> }
            {this.props.formType === "Log In" ? null : <label>Profile Picture <input 
                type="file" 
                onChange={this.handleProfilePictureChange} 
                // value={this.state.profile_picture.filename}
                accept="image/png, image/jpeg" />
                </label>}
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
            {this.props.formType === "Log In" ? <Link to="/signup">Create a new account</Link> : null}
            <br />
            {this.props.formType === "Log In" ? null : this.props.formType === "Save Changes" ? null : <Link to="/">Already have an account? Log in</Link> }
            <br />
            {this.props.formType === "Log In" ? <button onClick={this.handleGuestLogin}>Login as guest</button> : null}
        </form>
    }
}