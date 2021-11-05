import { connect } from 'react-redux';
import SessionForm from "./session_form";
import { withRouter } from "react-router";
import { edit, clearErrors } from "../../actions/user&session_actions"

const mSTP = (state, ownProps) => {
    let user = state.entities.users[state.session.currentUserId];
    
    return {
        errors: state.errors.session,
        formType: "Save Changes",
        user: {
            email: user.email,
            password: "",
            first_name: user.first_name,
            last_name: user.last_name,
            profile_picture: "",
            id: user.id
        }
    }
}

const mDTP = (dispatch, ownProps) => ({
    action: (formData) => dispatch(edit(formData)),
    clearErrors: () => dispatch(clearErrors())
})

export default withRouter(connect(mSTP, mDTP)(SessionForm));