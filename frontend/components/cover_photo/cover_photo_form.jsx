import React from 'react';

class CoverPhotoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cover_photo: ""
        }

        this.submitForm = this.submitForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    submitForm(e) {
        this.setState(
            { cover_photo: e.target.files[0] },
            () => document.getElementById("cover-photo-submit-button").click()
            );
    }

    handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('user[cover_photo]', this.state.cover_photo)
        formData.append('user[id]', this.props.currentUserId)

        this.props.editUser(formData);

        this.setState({
            cover_photo: "",
        })
    }

    render() {
        return <form id="cover-photo-form" onSubmit={this.handleSubmit}>
            <input id="cover-photo-input" type="file" accept="image/png, image/jpeg" onChange={this.submitForm} />
            <div id="cover-photo-button" onClick={() => document.getElementById("cover-photo-input").click()}>
                <i className="fas fa-camera"></i>
                <span>Edit Cover Photo</span>
            </div>
            <button id="cover-photo-submit-button"></button>
        </form>
    }
}

export default CoverPhotoForm;