import { connect } from "react-redux";
import { withRouter } from "react-router";
import { editComment } from "../../actions/comment_actions";
import { fetchNewsfeedComments, fetchProfileComments } from "../../actions/comment_actions";
import CommentForm from "./comment_form";

const mSTP = (state, ownProps) => ({
    comment: ownProps.comment
})

const mDTP = (dispatch, ownProps) => ({
    action: (comment) => dispatch(editComment(comment)),
    fetchNewsfeedComments: () => dispatch(fetchNewsfeedComments()),
    fetchProfileComments: () => dispatch(fetchProfileComments())
})

export default withRouter(connect(mSTP, mDTP)(CommentForm));