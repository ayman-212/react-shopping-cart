import React from "react";

import CartItem from "./CartItem/CartItem";
import classes from "./CartItems.module.css"

const cartItems = (props) => (
    <ul className={classes.CartItems}>
        {props.cartItems.map((cartItem) => {
            return <CartItem
                title={cartItem.title}
                image={cartItem.image}
                price={cartItem.price}
                key={cartItem._id}
                count={cartItem.count}
                removeItem={() => props.removeItem(cartItem)}
            />
        })}
    </ul>
);

export default cartItems