import { connect } from 'react-redux';
import React from 'react';
import SessionForm from "./session_form";
import { openModal, closeModal } from '../../actions/modal_actions';
import { login, clearErrors} from "../../actions/session_actions"

const mSTP = (state, ownProps) => ({
    errors: state.errors.session,
    formType: "Log In",
    user: {
        email: "",
        password: "",
        first_name: "",
        last_name: ""
    }
})

const mDTP = (dispatch, ownProps) => ({
    action: (user) => dispatch(login(user)),
    signupModal: ( <button onClick={() => dispatch(openModal("signup"))}>
        Create New Account
    </button>),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mSTP, mDTP)(SessionForm);