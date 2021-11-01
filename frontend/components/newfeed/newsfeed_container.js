import { connect } from 'react-redux';
import { fetchNewsfeedPosts, removePost } from '../../actions/post_actions';
import { logout } from "../../actions/session_actions"
import Newsfeed from "./newsfeed"

const mSTP = (state, ownProps) => ({
    posts: Object.values(state.entities.posts),
    // currentUserId: state.session.currentUserId
})

const mDTP = (dispatch, ownProps) => ({
    fetchNewsfeedPosts: () => dispatch(fetchNewsfeedPosts()),
    // logout: () => dispatch(logout()),
    removePost: (postId) => dispatch(removePost(postId))
})

export default connect(mSTP, mDTP)(Newsfeed);