import React from "react";

import classes from "./Sidebar.module.css";
import Cart from "../../Containers/Cart/Cart";
import CheckoutForm from "../../Containers/CheckoutForm/CheckoutForm";


const sidebar = (props) => (
    <div className={classes.Sidebar}>
        <Cart />
        <CheckoutForm />
    </div>
);

export default sidebar;