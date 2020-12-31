import React, { Component } from "react";

import data from "../../data.json";
import classes from "./ProductsList.module.css";
import ProductsItems from "../../Components/ProductsItems/ProductsItems"

class ProductsList extends Component {
    state = {
        products: data.products,
        size: "",
        sort: ""
    }

    render() {
        return (
            <div className={classes.ProductsList}>
                <ProductsItems items={this.state.products} />
            </div>
        )
    }
};

export default ProductsList