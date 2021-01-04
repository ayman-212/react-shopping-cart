import React, { Component } from "react";

import data from "../../data.json";
import classes from "./ProductsList.module.css";
import ProductsItems from "../../Components/ProductsItems/ProductsItems";
import Filter from "../../Components/Filter/Filter"

class ProductsList extends Component {
    state = {
        products: data.products,
        size: "",
        sort: ""
    }

    filterProductsHandler = (event) => {
        if (event.target.value === "ALL") {
            this.setState({
                products: data.products,
                size: event.target.value
            })
        } else {
            const updatedProducts = data.products.filter(product => {
                return product.availableSizes.indexOf(event.target.value) >= 0;
            })
            this.setState({
                products: updatedProducts,
                size: event.target.value
            })
        }
    }

    sortProductsHandler = (event) => {
        const updatedState = this.state.products;
        updatedState.sort((a, b) => {
            switch (event.target.value) {
                case "lowest": return a.price - b.price;
                case "highest": return b.price - a.price;
                default: return (a._id > b._id) ? 1 : -1;
            }
        });

        this.setState({
            sort: event.target.value,
            products: updatedState
        })
    }

    render() {
        return (
            <div className={classes.ProductsList}>
                <Filter
                    count={this.state.products.length}
                    size={this.state.size}
                    sort={this.state.sort}
                    filterProducts={this.filterProductsHandler}
                    sortProducts={this.sortProductsHandler} />
                <ProductsItems items={this.state.products} />
            </div>
        )
    }
};

export default ProductsList