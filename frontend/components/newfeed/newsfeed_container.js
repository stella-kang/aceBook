import { connect } from 'react-redux';
import { fetchNewsfeedPosts } from '../../actions/post_action';
import { logout } from "../../actions/session_actions"
import Newsfeed from "./newsfeed"

const mSTP = (state, ownProps) => ({
    posts: Object.values(state.entities.posts)
})

const mDTP = (dispatch, ownProps) => ({
    fetchNewsfeedPosts: () => dispatch(fetchNewsfeedPosts()),
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(Newsfeed);