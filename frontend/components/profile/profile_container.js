import { connect } from 'react-redux';
import { fetchProfilePosts, removePost } from '../../actions/post_actions';
import Profile from "./profile"

const mSTP = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    posts: Object.values(state.entities.posts)
})

const mDTP = (dispatch, ownProps) => ({
    fetchProfilePosts: () => dispatch(fetchProfilePosts(ownProps.match.params.userId)),
    removePost: (postId) => dispatch(removePost(postId))
})

export default connect(mSTP, mDTP)(Profile)