import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

class CheckOut extends Component {
  state = {};
  render() {
      const selectedProducts = [...this.props.items]
    return (
        <section className="container-fluid px-0">
        <nav className="container-fluid text-white bg-dark navbar-dark p-3 mb-4 d-flex justify-content-between">
            <h4>CheckOut</h4>
            <Link className="btn btn-dark" to={{pathname:`/home`}}>store</Link>
        </nav>
        {selectedProducts.map((p) => {
          return (
            <div className="container mb-4" key={p.id}>
              <h4 className="row">{p.name}</h4>
              <ul>
                <li>quantity : {p.num}</li>
                <li>price : {p.price}</li>
                <li>total Coust : {p.cost}</li>
              </ul>
            </div>
          );
        })}
        <div className="container bg-secondary p-3 text-white">total : {this.props.total}</div>
      </section>
    );
  }
}

const mapStateToProps = (state)=>{
  return{
      items: state.addedItems,
      total: state.total
  }
}
export default connect(mapStateToProps)(CheckOut);
