export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (modal, postId = null) => ({
    type: OPEN_MODAL,
    modal,
    postId
});

export const closeModal = () => ({
    type: CLOSE_MODAL
});