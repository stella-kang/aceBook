import { connect } from "react-redux";
import { withRouter } from "react-router";
import { updatePost, fetchNewsfeedPosts, fetchProfilePosts } from "../../actions/post_actions";
import PostForm from "./post_form";


const mSTP = (state, ownProps) => {
    let post = state.entities.posts[ownProps.postId]

    return {
        post: {
            id: post.id,
            content: post.content,
            author_id: post.author_id,
            photo: "",
            profile_id: post.profile_id
        },
        user: state.entities.users[state.session.currentUserId],
        formType: "Edit post"}
}


const mDTP = (dispatch, ownProps) => ({
    action: (formData) => dispatch(updatePost(formData))
})

export default withRouter(connect(mSTP, mDTP)(PostForm));