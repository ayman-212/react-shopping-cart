import React, { Component } from "react";
import { connect } from "react-redux"

import classes from "./ProductsList.module.css";
import ProductsItems from "../../Components/ProductsItems/ProductsItems";
import Filter from "../../Components/Filter/Filter";
import * as action from "../../store/actions/index";

class ProductsList extends Component {

    render() {
        return (
            <div className={classes.ProductsList}>
                <Filter
                    count={this.props.prod.length}
                    size={this.props.siz}
                    sort={this.props.sor}
                    filterProducts={(event) => this.props.onFilterProducts(event)}
                    sortProducts={(event) => this.props.onSortProducts(event)} />
                <ProductsItems
                    items={this.props.prod}
                    addToCart={this.props.onAddToCart} />
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        prod: state.productList.products,
        siz: state.productList.size,
        sor: state.productList.sort,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFilterProducts: (event) => dispatch(action.filterProducts(event)),
        onSortProducts: (event) => dispatch(action.sortProducts(event)),
        onAddToCart: (product) => dispatch(action.addToCart(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);