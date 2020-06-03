import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/login";
import CheckOut from "./components/checkOut";
import Home from './components/home'

const App = () => {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Login} />
      <Route path='/home' exact component={Home} />
      <Route path='/checkout' exact component={CheckOut} />
    </BrowserRouter>
  );
};
export default App;
