import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createPost, fetchNewsfeedPosts, fetchProfilePosts } from "../../actions/post_actions";
import PostForm from "./post_form";


const mSTP = (state, ownProps) => {
    let profileId;

    if (ownProps.match.params.userId && ownProps.match.params.userId !== state.session.currentUserId) {
        profileId = ownProps.match.params.userId
    } else {
        profileId = null;
    }

    return { post: {
                content: "",
                author_id: state.session.currentUserId,
                profile_id: profileId,
                photo: ""
                },
            user: state.entities.users[state.session.currentUserId],
            formType: "Create post"
            }
}


const mDTP = (dispatch, ownProps) => ({
    action: (formData) => dispatch(createPost(formData)),
})

export default withRouter(connect(mSTP, mDTP)(PostForm));