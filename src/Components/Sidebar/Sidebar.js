import React from "react";

import classes from "./Sidebar.module.css";
import Cart from "../../Containers/Cart/Cart";

const sidebar = (props) => (
    <div className={classes.Sidebar}>
        <Cart />
    </div>
);

export default sidebar;