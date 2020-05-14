import React, { Component } from "react";

class Product extends Component {
  state = {};
  render() {
    return (
      <section className="text-center product col-4">
        <div className="card">
          {/* product header */}
          <div className="product-header d-flex justify-content-around card-header">
            <h5 className="text-capitalize">
              {this.props.product.name}
              <span className="text-muted">
                ( {this.props.product.quantity} )
              </span>
            </h5>
            <div>
              <button
                className="plus btn p-1"
                onClick={() => this.props.onIncrement(this.props.product)}
              >
                &#10010;
              </button>
              <span className="p-1 text-success">{this.props.product.num}</span>
              <button
                className="minus btn p-1"
                onClick={() => this.props.onDecrement(this.props.product)}
              >
                &#9866;
              </button>
            </div>
          </div>
          {/* product Image */}
          <img
            style={{
              display: "block",
              height: "10rem",
              backgroundColor: "#333",
            }}
            className="card-body"
            src={this.props.product.image}
            alt=""
          />
          <div className="row d-flex justify-content-center card-footer bg-white">
            <p>{this.props.product.price} &#36;</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Product;
