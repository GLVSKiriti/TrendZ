import React from "react";
import "./Authentication.css";

function Register() {
  return (
    <div className="registerContainer">
      <div className="registerWrapper">
        <h1 className="title">Create Your Account</h1>
        <form action="">
          <input type="text" placeholder="name" />
          <input type="text" placeholder="last name" />
          <input type="text" placeholder="username" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="password" placeholder="confirm password" />
          <span className="agreement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button className="registerButton">Create</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
