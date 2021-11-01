import { connect } from 'react-redux';
import SessionForm from "./session_form";
import { withRouter } from "react-router";
import { edit, clearErrors } from "../../actions/session_actions"

const mSTP = (state, ownProps) => {
    let user = state.entities.users[ownProps.match.params.userId];
    return {
        errors: state.errors.session,
        formType: "Save Changes",
        user: {
            email: user.email,
            password: "",
            first_name: user.first_name,
            last_name: user.last_name,
            id: user.id
        }
    }
}

const mDTP = (dispatch, ownProps) => ({
    action: (user) => dispatch(edit(user)),
    clearErrors: () => dispatch(clearErrors())
})

export default withRouter(connect(mSTP, mDTP)(SessionForm));