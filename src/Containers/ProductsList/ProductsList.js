import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./ProductsList.module.css";
import ProductsItems from "../../Components/ProductsItems/ProductsItems";
import Filter from "../../Components/Filter/Filter";
import Modal from "../../Components/UI/Modal/Modal";
import ProductDetails from "../../Components/ProductsItems/ProductDetails/ProductDetails";
import * as action from "../../store/actions/index";
import axios from "../../axios-orders";

class ProductsList extends Component {
    state = {
        product: null,
        showModal: false,
        data: null,
    }

    componentDidMount() {
        console.log("A");
    }

    openMoadalHandler = (item) => {
        this.setState({
            product: item,
            showModal: true
        })
    }

    closeModalHandler = () => {
        this.setState({
            showModal: false
        })
    }

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
                    addToCart={this.props.onAddToCart}
                    openModal={this.openMoadalHandler} />
                <Modal
                    modalIsOpen={this.state.showModal}
                    requestToClose={this.closeModalHandler}>
                    <ProductDetails
                        closeModal={this.closeModalHandler}
                        details={this.state.product}
                        addToCart={this.props.onAddToCart} />
                </Modal>

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