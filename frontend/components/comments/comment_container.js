import { connect } from 'react-redux';
import { removeComment } from '../../actions/comment_actions';
import Comment from "./comment_item"

const mSTP = (state, ownProps) => ({
    users: state.entities.users
})

const mDTP = (dispatch) => ({
    removeComment: (commentId) => dispatch(removeComment(commentId))
})

export default connect(mSTP, mDTP)(Comment);
