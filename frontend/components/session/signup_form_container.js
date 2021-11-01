import { connect } from 'react-redux';
import SessionForm from "./session_form";
import { signup, clearErrors } from "../../actions/session_actions"

const mSTP = (state, ownProps) => ({
    errors: state.errors.session,
    formType: "Sign Up"
})

const mDTP = (dispatch, ownProps) => ({
    action: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mSTP, mDTP)(SessionForm);