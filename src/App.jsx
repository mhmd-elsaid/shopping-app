import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import CheckOut from "./components/checkOut";
import ProductsList from "./components/productsList";

const App = () => {
  return (
    <BrowserRouter>
        <div>
            <Route path="/" exact component={Login}  />
            <Route path="/home" exact component={Home} />
            <Route path="/checkout" exact component={CheckOut} />
            <Route path="/products" exact component={ProductsList} />
        </div>
    </BrowserRouter>
  );
};
export default App;
