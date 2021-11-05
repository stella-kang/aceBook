import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createComment } from "../../actions/comment_actions";
import { fetchNewsfeedComments, fetchProfileComments } from "../../actions/comment_actions";
import CommentForm from "./comment_form";

const mSTP = (state, ownProps) => ({
    comment: {
        content: "",
        author_id: state.session.currentUserId,
        post_id: ownProps.postId
    },
    formType: "create"
})

const mDTP = (dispatch, ownProps) => ({
    action: (comment) => dispatch(createComment(comment)),
})

export default withRouter(connect(mSTP, mDTP)(CommentForm));