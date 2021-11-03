import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import SignupFormContainer from '../session/signup_form_container';
import EditFormContainer from "../session/edit_form_container"

const mSTP = (state, ownProps) => ({
    modal: state.ui.modal
})

const mDTP = (dispatch, ownProps) => ({
    closeModal: () => {
        dispatch(closeModal());
        dispatch(clearErrors());
    },
})

const Modal = (props) => {
    if (!props.modal) {
        return null;
    }

    let component;
    switch (props.modal) {
        case 'signup':
            component = <SignupFormContainer closeModal={props.closeModal}/>;
            break;
        case 'edit_profile':
            component = <EditFormContainer closeModal={props.closeModal}/>
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background">
            <div className="modal-component" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}


export default connect(mSTP, mDTP)(Modal);