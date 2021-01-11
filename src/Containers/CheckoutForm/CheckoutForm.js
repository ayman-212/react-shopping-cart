import React, { Component } from 'react';
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Button from "../../Components/UI/Button/Button";
import classes from "./CheckoutForm.module.css";
import * as actions from "../../store/actions/index";
import Spinner from "../../Components/UI/Spinner/Spinner";
import Aux from "../../hoc/Auxiliry/Auxiliry";
import Modal from "../../Components/UI/Modal/Modal";
import OrderDetails from "../../Components/Orders/OrderDetails/OrderDetails";


class CheckoutForm extends Component {
    state = {
        name: "",
        email: "",
        address: "",
        showModal: false
    }

    openModalHandler = () => {
        this.setState({
            showModal: true
        })
    }

    closeModalHandler = () => {
        this.setState({
            showModal: false
        })
    }

    onChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    NotifyHandler = () => {
        toast.success("Your Order sent successfully", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        })
    }
    onSubmitHandler = (event) => {
        event.preventDefault();
        const order = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            orderItem: this.props.cartIt
        }
        this.props.onPurchaseOrderHandler(order);
        setTimeout(() => {
            this.openModalHandler();
        }, 400);
        setTimeout(() => {
            this.NotifyHandler();
        }, 500);
    }
    render() {
        return (
            <div className={classes.CheckoutForm}>
                {this.props.showCheckout ?
                    <Aux>
                        <Fade right big>
                            <form className={classes.Form} onSubmit={this.onSubmitHandler}>
                                <label>Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter Your Email"
                                    value={this.state.email}
                                    onChange={this.onChangeHandler}
                                    name="email"
                                    required
                                ></input>
                                <label>Name</label>
                                <input
                                    type="text"
                                    placeholder=" Your Name:"
                                    value={this.state.name}
                                    onChange={this.onChangeHandler}
                                    name="name"
                                    required
                                ></input>
                                <label>Address</label>
                                <input
                                    type="text"
                                    placeholder="Enter Your Address"
                                    value={this.state.address}
                                    onChange={this.onChangeHandler}
                                    name="address"
                                    required
                                ></input>
                                <Button btnType="Success">Checkout</Button>
                            </form>
                        </Fade>
                        {this.props.loading ? <Spinner /> : null}
                        <Modal
                            modalIsOpen={this.state.showModal}
                            requestToClose={this.closeModalHandler} >
                            <OrderDetails
                                order={this.props.order}
                                totalPrice={this.props.totalPrice}
                                closeModal={this.closeModalHandler} />
                        </Modal>
                        <ToastContainer
                            position="bottom-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick={false}
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover={false}
                        />
                    </Aux>
                    :
                    null}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        showCheckout: state.cart.showingCheckout,
        cartIt: state.cart.cartItems,
        loading: state.cart.loading,
        order: state.cart.order,
        totalPrice: state.cart.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPurchaseOrderHandler: (orderData) => dispatch(actions.purchaseOrder(orderData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutForm);