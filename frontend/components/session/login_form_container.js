import { connect } from 'react-redux';
import SessionForm from "./session_form";
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
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mSTP, mDTP)(SessionForm);