import { connect } from 'react-redux';
import { fetchProfilePosts } from '../../actions/post_action';
import ProfileWall from "./profile_wall"

const mSTP = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    posts: Object.values(state.entities.posts)
})

const mDTP = (dispatch, ownProps) => ({
    fetchProfilePosts: () => dispatch(fetchProfilePosts(ownProps.match.params.userId))
})

export default connect(mSTP, mDTP)(ProfileWall)