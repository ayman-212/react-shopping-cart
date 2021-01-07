import React from "react";
import Modal from "react-modal";


const modal = (props) => (
    <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={props.requestToClose}
        ariaHideApp={false}>
        {props.children}
    </Modal>
);

export default modal;