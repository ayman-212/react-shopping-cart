import React from "react";

import Button from "../../UI/Button/Button";
import classes from "./CartFooter.module.css"

const cartFooter = (props) => {
    let cart = null;
    if (props.length > 0) {
        cart = (
            <div className={classes.CartFooter}>
                <p>Total ${props.cartItems.reduce((a, b) => {
                    return a + b.price * b.count
                }, 0).toFixed(2)}</p>
                <Button btnType="Success">Procced</Button>
            </div>
        )
    }
    return cart
};

export default cartFooter;