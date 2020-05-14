import React, { Component } from "react";
import Header from "./header";
import ProductData from "../data/products.json";
import ProductsList from "./productsList";

class Home extends Component {
  state = {};
  /* handle product increment */
  handleIncrement = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    if (products[index].quantity > 0) {
      products[index].num++;
      products[index].quantity--;
      this.setState({ products });
    }
  };
  /* handle product decrement */
  handleDecrement = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    if (products[index].num > 0) {
      products[index].num--;
      products[index].quantity++;
      this.setState({ products });
    }
  };
  render() {
    if (!this.state.products) {
      this.state.products = [...ProductData];
    }
    return (
      <section className="container-fluid">
        <Header totalProducts={this.state.products.filter((p) => p.num > 0)} />
        <section className="container">
          <ProductsList
            className="container"
            products={this.state.products}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </section>
      </section>
    );
  }
}

export default Home;
