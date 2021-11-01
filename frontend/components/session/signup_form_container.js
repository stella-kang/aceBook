import { connect } from 'react-redux';
import SessionForm from "./session_form";
import { signup, login } from "../../actions/session_actions"

const mSTP = (state, ownProps) => ({
    errors: state.errors.session,
    formType: "Sign Up"
})

const mDTP = (dispatch, ownProps) => ({
    action: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user))
})

export default connect(mSTP, mDTP)(SessionForm);