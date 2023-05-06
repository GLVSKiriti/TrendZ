import React from "react";
import "./Authentication.css";

function Login() {
  return (
    <div className="loginContainer">
      <div className="registerWrapper">
        <h1 className="title">Sign In</h1>
        <form action="">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button className="registerButton">LOGIN</button>
          <a href="" className="forgetPassword">
            Forget Password?
          </a>
          <a href="" className="signupViaLogin">
            Create A New Account
          </a>
        </form>
      </div>
    </div>
  );
}

export default Login;
