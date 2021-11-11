import {connect} from 'react-redux';
import { edit } from '../../actions/user&session_actions';
import CoverPhotoForm from './cover_photo_form';

const mSTP = (state, ownProps) => ({
    currentUserId: state.session.currentUserId
})

const mDTP = (dispatch, ownProps) => ({
    editUser: (formData) => dispatch(edit(formData))
})

export default connect(mSTP, mDTP)(CoverPhotoForm);