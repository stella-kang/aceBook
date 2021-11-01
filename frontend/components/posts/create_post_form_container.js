import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createPost, fetchNewsfeedPosts, fetchProfilePosts } from "../../actions/post_actions";
import PostForm from "./post_form";


const mSTP = (state, ownProps) => {
    let profileId;

    if (ownProps.match.params.userId) {
        profileId = ownProps.match.params.userId
    } else {
        profileId = null;
    }

    return { post: {
            content: "",
            author_id: state.session.currentUserId,
            profile_id: profileId
            }
        }
}


const mDTP = (dispatch, ownProps) => ({
    action: (post) => dispatch(createPost(post)),
    fetchNewsfeedPosts: () => dispatch(fetchNewsfeedPosts()),
    fetchProfilePosts: (userId) => dispatch(fetchProfilePosts(userId))
})

export default withRouter(connect(mSTP, mDTP)(PostForm));