import React, { Component } from "react";

class Login extends Component {
  state = {};
  onSubmit = (event)=>{
    event.preventDefault();

    this.formValidation();
  }
  formValidation () {
    let emailValid , passwordValid ;
    emailValid = /^\w+@[a-z]+\.com$/i.test(document.getElementById('email').value);
    passwordValid = /^[0-9a-zA-Z\W]{3,8}$/g.test(document.getElementById('password').value);
    if (emailValid) {        
        document.getElementById('email').style.border = '1px solid #ced4da'; 
    } else {
        document.getElementById('email').style.border = '1px solid red';
    }
    // password validation   
    if (passwordValid) {
        document.getElementById('password').style.border = '1px solid #ced4da';
    } else {
        document.getElementById('password').style.border = '1px solid red';
    }
    if (emailValid && passwordValid) {
        document.getElementById("submitBtn").disabled = false;
    }
  }
  render() {
    return (
      <div className="container text-center pb-5">
        <form action="./home" className="col-6 m-auto pt-5" >
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
          <button type="submit" id="submitBtn" disabled className="btn btn-success">Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
