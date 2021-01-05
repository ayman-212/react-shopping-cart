import React from "react";

import Button from "../../UI/Button/Button";
import classes from "./CartFooter.module.css"

const cartFooter = (props) => {
    let cart = null;
    if (props.length > 0) {
        cart = (
            <div className={classes.CartFooter}>
                <p>Total ${props.totalPrice}</p>
                <Button
                    btnType="Success"
                    clicked={props.showCheckout}>Procced</Button>
            </div>
        )
    }
    return cart
};

export default cartFooter;