import { connect } from "react-redux";


const mSTP = (state, ownProps) => ({
    post: {
        content: "",
        author_id: state.session.currentUserId,
        profile_id: null
    }
})

const mDTP = (dispatch, ownProps) => ({
    
})