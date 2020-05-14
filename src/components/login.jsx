import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Login extends Component {
  state = {};
  onSubmit = (event)=>{
    event.preventDefault();

    this.formValidation();
  }
  formValidation () {
    // this.formValidation()
    let emailValid , passwordValid ;
    if (/^\w+@[a-z]+\.com$/i.test(document.getElementById('email').value)) {        
        document.getElementById('email').style.border = '1px solid #ced4da'; 
        emailValid= true;

    } else {
        document.getElementById('email').style.border = '1px solid red';
    }
    // password validation   
    if (/^[0-9a-zA-Z\W]{0,8}$/g.test(document.getElementById('password').value)) {
        document.getElementById('email').style.border = '1px solid #ced4da';
        passwordValid = true;
    } else {
        document.getElementById('password').style.border = '1px solid red';
    }
    if (emailValid && passwordValid) {
        
    }
  }
  render() {
    return (
      <div className="container text-center pb-5">
        <form action="./home" className="col-6 m-auto pt-5" onSubmit={this.onSubmit}>
          <div className="form-control my-5">
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter email"
              required
              onBlur={this.formValidation}
            />
          </div>
          <div className="form-control my-5">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              onBlur={this.formValidation}
              required
            />
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
