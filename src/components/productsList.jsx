import React, { Component } from 'react';
import Product from './product'
class ProductsList extends Component {
    state = {  }
    render() { 
    this.state.products =this.props.products;    
        return ( <div className="row">
        {this.state.products.map((productDetails) => {
          return (
            <Product 
            key={productDetails.id} 
            className="product-wrapper col-4 mb-4 card" 
            product={productDetails} 
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            />
          );
        })} 
      </div> );
    }
}
 
export default ProductsList;