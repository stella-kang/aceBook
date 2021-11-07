import { connect } from 'react-redux';
import Search from './search';

const mSTP = (state, ownProps) => ({
    users: Object.values(state.entities.users),
    search: state.ui.search
})

const mDTP = (dispatch, ownProps) => ({

})

export default connect(mSTP, mDTP)(Search)