import React, { Component } from "react";
import Compare from "../Compare/Compare";
import ProductList from "../Products/ProductList";
import { connect } from "react-redux";
import { fetchProducts, compare } from "../../actions/product";
import classes from "./Home.css";

class Home extends Component {
  componentDidMount() {
    this.props.fetchProducts();
    this.props.compare();
  }

  render() {
    const { products } = this.props;
    const compareProducts = products.filter(product => product.compare);

    return (
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.col12}>
            <h1 className="mb-3">Compare Products</h1>
          </div>
        </div>
        <ProductList products={products} compare={this.props.compare} />
        {compareProducts.length >= 2 && <Compare products={compareProducts} />}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // onCompare: () => dispatch(actions.compare()),
    // onGetProducts: () => dispatch(actions.getProducts())
  };
};

const mapStateToProps = state => {
  return {
    products: state.product.products
  };
};

export default connect(
  mapStateToProps,
  { fetchProducts, compare }
)(Home);
