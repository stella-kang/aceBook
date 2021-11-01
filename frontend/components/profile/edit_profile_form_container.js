import { connect } from "react-redux";

const mSTP = (state, ownProps) => ({
    user: state.entitites.users[state.session.currentUserId]
})

const mDTP = (dispatch, ownProps) => ({
    
})