import { connect } from 'react-redux';
import SessionForm from "./session_form";
import { withRouter } from "react-router";
import { edit, clearErrors } from "../../actions/session_actions"

const mSTP = (state, ownProps) => {
    let user = state.entities.users[ownProps.match.params.userId];
    return {
        errors: state.errors.session,
        formType: "Save Changes",
        user: user
    }
}

const mDTP = (dispatch, ownProps) => ({
    action: (formData) => dispatch(edit(formData)),
    clearErrors: () => dispatch(clearErrors())
})

export default withRouter(connect(mSTP, mDTP)(SessionForm));