import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user&session_actions';
import Search from './search';

const mSTP = (state, ownProps) => ({
    users: Object.values(state.entities.users),
    search: state.ui.search
})

const mDTP = (dispatch, ownProps) => ({
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mSTP, mDTP)(Search)