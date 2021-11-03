import { connect } from 'react-redux';
import SessionForm from "./session_form";
import { signup, clearErrors } from "../../actions/session_actions"

const mSTP = (state, ownProps) => ({
    errors: state.errors.session,
    formType: "Sign Up",
    user: {
        email: "",
        password: "",
        first_name: "",
        last_name: ""
    }
})

const mDTP = (dispatch, ownProps) => ({
    action: (formData) => dispatch(signup(formData))
})

export default connect(mSTP, mDTP)(SessionForm);