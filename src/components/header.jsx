import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

class Header extends Component {
  state = {totalProducts:[]};
  render() {
    const selectedProducts = this.props.totalProducts
    return (
      <nav className="navbar navbar-light bg-light container-fluid mb-4" >
        <Link className="navbar-brand" to={{pathname:`/checkout` , query:selectedProducts}}  >
          <FaShoppingCart className="text-primary h2"/>
          <span className="badge badge-pill badge-secondary m-2">
            {this.props.totalProducts.length}
          </span>
        </Link>
      </nav>
    );
  }
}

export default Header;
