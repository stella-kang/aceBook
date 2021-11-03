import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import SignupFormContainer from '../session/signup_form_container';
import EditProfileFormContainer from "../session/edit_form_container"
import CreatePostForm from "../posts/create_post_form_container"
import EditPostForm from "../posts/edit_post_form_container"

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
    switch (typeof props.modal === "string") {
        case true:
            switch(props.modal) {
                case 'signup':
                    component = <SignupFormContainer closeModal={props.closeModal} />;
                    break;
                case 'profile_form':
                    component = <EditProfileFormContainer closeModal={props.closeModal} />
                    break;
                case 'create_post':
                    component = <CreatePostForm closeModal={props.closeModal} />
                    break;
                default:
                    return null;
            }
        case false:
            component = <EditPostForm closeModal={props.closeModal} postId={props.modal}/>
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={props.closeModal}>
            <div className="modal-component" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}


export default connect(mSTP, mDTP)(Modal);