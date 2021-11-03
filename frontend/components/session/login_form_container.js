import { connect } from 'react-redux';
import React from 'react';
import SessionForm from "./session_form";
import { openModal } from '../../actions/modal_actions';
import { login, clearErrors } from "../../actions/session_actions"

const mSTP = (state, ownProps) => ({
    errors: state.errors.session,
    formType: "Log In",
    user: {
        email: "",
        password: "",
        first_name: "",
        last_name: ""
    },
    modal: state.ui.modal
})

const mDTP = (dispatch, ownProps) => ({
    action: (user) => dispatch(login(user)),

    signupModal: <button id="signup-button" onClick={() => { 
        dispatch(openModal("signup"));
        dispatch(clearErrors());
        }}>
        Create New Account
    </button>
})

export default connect(mSTP, mDTP)(SessionForm);