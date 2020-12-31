import React from "react";

import ProductsList from "../../Containers/ProductsList/ProductsList";
import Sidebar from "../Sidebar/Sidebar";
import classes from "./HomePage.module.css";

const homePage = (props) => (
    <div className={classes.HomePage}>
        <ProductsList />
        <Sidebar />
    </div>
);

export default homePage