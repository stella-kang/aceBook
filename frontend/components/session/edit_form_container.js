import { connect } from 'react-redux';
import SessionForm from "./session_form";
import { withRouter } from "react-router";
import { edit, clearErrors } from "../../actions/session_actions"

const mSTP = (state, ownProps) => ({
    errors: state.errors.session,
    formType: "Save Changes",
    user: state.entities.users[ownProps.match.params.userId]
})

const mDTP = (dispatch, ownProps) => ({
    action: (user) => dispatch(edit(user)),
    clearErrors: () => dispatch(clearErrors())
})

export default withRouter(connect(mSTP, mDTP)(SessionForm));