import React, { Component } from 'react';
import { connect } from "react-redux";
import Fade from "react-reveal/Fade"

import Button from "../../Components/UI/Button/Button";
import classes from "./CheckoutForm.module.css";


class CheckoutForm extends Component {
    state = {
        name: "",
        email: "",
        address: ""
    }

    onChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
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
        console.log(order);
        alert("you need to save form for " + order.name)
    }
    render() {
        let form = null;
        if (this.props.showCheckout) {
            form = (<form>
            </form>)
        }
        return (
            <div className={classes.CheckoutForm}>
                {this.props.showCheckout ?
                    <Fade right big>
                        <form className={classes.Form} onSubmit={this.onSubmitHandler}>
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                value={this.state.email}
                                onChange={this.onChangeHandler}
                                name="email"
                            ></input>
                            <label>Name</label>
                            <input
                                type="text"
                                placeholder=" Your Name:"
                                value={this.state.name}
                                onChange={this.onChangeHandler}
                                name="name"
                            ></input>
                            <label>Address</label>
                            <input
                                type="text"
                                placeholder="Enter Your Address"
                                value={this.state.address}
                                onChange={this.onChangeHandler}
                                name="address"
                            ></input>
                            <Button btnType="Success">Checkout</Button>
                        </form>
                    </Fade>
                    :
                    null}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        showCheckout: state.checkout.showingCheckout,
        cartIt: state.cart.cartItems
    }
}

export default connect(mapStateToProps)(CheckoutForm);