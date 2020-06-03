import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./header";
import Product from "./product";
import { addItem , removeItem }from "../redux/actions";

class Home extends Component {
  state = {products : []};
  /* handle product increment */
  handleIncrement = (item) => {
    this.props.addItem(item);
    this.setState({products: [...this.props.items] })
  };
  /* handle product decrement */
  handleDecrement = (item) => {
    this.props.removeItem(item);
    this.setState({products: [...this.props.items] })
  };
  render() {
    if (this.state.products.length === 0) {
      this.setState({products: [...this.props.items] })
    }
    return (
      <section className='container-fluid px-0'>
        <Header totalProducts={this.state.products.filter((p) => p.num > 0)} />
        <section className='container'>
          <div className='row'>
            {this.state.products.map((productDetails) => {
              return (
                <Product
                  key={productDetails.id}
                  className='product-wrapper col-4 mb-4 card'
                  product={productDetails}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                />
              );
            })}
          </div>
        </section>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};
const mapDispatchToProps= (dispatch)=>{  
  return{
      addItem: (item)=>{dispatch(addItem(item))},
      removeItem: (item)=>{dispatch(removeItem(item))}
  }
}
export default connect(mapStateToProps , mapDispatchToProps)(Home);
