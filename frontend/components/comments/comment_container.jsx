import { connect } from 'react-redux';
import { removeComment } from '../../actions/comment_actions';
import Comment from "./comment_item"

const mSTP = (state, ownProps) => ({
    users: state.entities.users,
    currentUser: state.entities.users[state.session.currentUserId]
})

const mDTP = (dispatch) => ({
    removeComment: (commentId) => dispatch(removeComment(commentId))
})

export default connect(mSTP, mDTP)(Comment);
