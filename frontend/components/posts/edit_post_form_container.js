import { connect } from "react-redux";
import { withRouter } from "react-router";
import { updatePost, fetchNewsfeedPosts, fetchProfilePosts } from "../../actions/post_actions";
import PostForm from "./post_form";


const mSTP = (state, ownProps) => ({
    post: state.entities.posts[ownProps.postId],
    user: state.entities.users[state.session.currentUserId],
    formType: "Edit post"
})


const mDTP = (dispatch, ownProps) => ({
    action: (post) => dispatch(updatePost(post)),
    fetchNewsfeedPosts: () => dispatch(fetchNewsfeedPosts()),
    fetchProfilePosts: (userId) => dispatch(fetchProfilePosts(userId))
})

export default withRouter(connect(mSTP, mDTP)(PostForm));