import React from "react";
import Modal from "react-modal";

import ProductDetails from "../../ProductsItems/ProductDetails/ProductDetails";

const modal = (props) => (
    <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={props.requestToClose}
        ariaHideApp={false}>
        <ProductDetails
            closeModal={props.closeModal}
            details={props.ProductDetails}
            addToCart={props.addToCart} />
    </Modal>
);

export default modal;