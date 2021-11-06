import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createPost, fetchNewsfeedPosts, fetchProfilePosts } from "../../actions/post_actions";
import PostForm from "./post_form";


const mSTP = (state, ownProps) => {
    let urlArray = ownProps.location.pathname.split("/")
    let profileId;

    debugger
    
    if (urlArray.includes("profile") && ownProps.match.params.userId !== state.session.currentUserId) {
        debugger
        const currentProfileId = parseInt(urlArray[1]);
        if (currentProfileId !== state.session.currentUserId) profileId = currentProfileId;
    } else {
        debugger
        profileId = null;
    }

    debugger

    return { post: {
                content: "",
                author_id: state.session.currentUserId,
                profile_id: profileId,
                photo: ""
                },
            user: state.entities.users[state.session.currentUserId],
            profile: state.entities.users[profileId],
            formType: "Create post"
            }
}


const mDTP = (dispatch, ownProps) => ({
    action: (formData) => dispatch(createPost(formData))
})

export default withRouter(connect(mSTP, mDTP)(PostForm));