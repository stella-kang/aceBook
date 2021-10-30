import { connect } from 'react-redux';
import SessionForm from "./session_form";
import { login, loginGuest} from "../../actions/session_actions"

const mSTP = (state, ownProps) => ({
    errors: state.errors.session,
    formType: "Log In"
})

const mDTP = (dispatch, ownProps) => ({
    action: (user) => dispatch(login(user))
})

export default connect(mSTP, mDTP)(SessionForm);