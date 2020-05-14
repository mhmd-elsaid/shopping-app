import React, { Component } from "react";
class CheckOut extends Component {
  state = {};
  render() {
      const selectedProducts = [...this.props.location.query]
      const total = selectedProducts.map(p =>{
        let coust = 0;
        coust = parseInt(coust) + (parseInt(p.num) * parseInt(p.price));
        return coust
      })
    return (
        <section className="container-fluid">
        <nav className="container-fluid bg-light p-3 mb-4 d-flex justify-content-between">
            <h4>CheckOut</h4>
            <button className="btn btn-light">Checkout</button>
        </nav>
        {selectedProducts.map((p) => {
          return (
            <div className="container mb-4" key={p.id}>
              <h4 className="row">{p.name}</h4>
              <ul>
                <li>quantity : {p.num}</li>
                <li>price : {p.price}</li>
                <li>total Coust : {p.num * p.price}</li>
              </ul>
            </div>
          );
        })}
        <div className="row">total : {total}</div>
      </section>
    );
  }
}

export default CheckOut;
