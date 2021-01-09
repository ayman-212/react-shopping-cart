import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./ProductsList.module.css";
import ProductsItems from "../../Components/ProductsItems/ProductsItems";
import Filter from "../../Components/Filter/Filter";
import Modal from "../../Components/UI/Modal/Modal";
import ProductDetails from "../../Components/ProductsItems/ProductDetails/ProductDetails";
import * as action from "../../store/actions/index";
import Spinner from "../../Components/UI/Spinner/Spinner";
import Aux from "../../hoc/Auxiliry/Auxiliry";

class ProductsList extends Component {
    state = {
        product: null,
        showModal: false,
    }

    componentDidMount() {
        this.props.onFetchProducts();
        console.log(this.props)
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
        let products = this.props.err && !this.props.loading ? <p>Products can't be loaded!!</p> : <Spinner />

        if (this.props.prod) {
            products = <Aux>
                <Filter
                    count={this.props.prod.length}
                    size={this.props.siz}
                    sort={this.props.sor}
                    filterProducts={(event) => this.props.onFilterProducts(event.target.value)}
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
            </Aux>
        }
        return (
            <div className={classes.ProductsList}>
                {this.props.loading ? <Spinner /> : products}
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        prod: state.productsList.products,
        siz: state.productsList.size,
        sor: state.productsList.sort,
        err: state.productsList.error,
        loading: state.productsList.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFilterProducts: (eventValue) => dispatch(action.filterProducts(eventValue)),
        onSortProducts: (event) => dispatch(action.sortProducts(event)),
        onAddToCart: (product) => dispatch(action.addToCart(product)),
        onFetchProducts: () => dispatch(action.fetchProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);