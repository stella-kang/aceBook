import { connect } from 'react-redux';
import { removeComment } from '../../actions/comment_actions';
import { createLike, removeLike } from '../../actions/like_actions';
import Comment from "./comment_item"

const mSTP = (state, ownProps) => ({
    users: state.entities.users,
    currentUser: state.entities.users[state.session.currentUserId],
    likes: Object.values(state.entities.likes)
})

const mDTP = (dispatch) => ({
    removeComment: (commentId) => dispatch(removeComment(commentId)),
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (likeId) => dispatch(removeLike(likeId))
})

export default connect(mSTP, mDTP)(Comment);
