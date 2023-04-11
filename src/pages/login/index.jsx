import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import "./style.css";

const Login = () => {
  return (
    <div className="main-container">
      <div className="login-container">
        <h1 className="mb-5">Sign In</h1>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mt-3 mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        <Button className="mt-3 mb-3">Sign In</Button>
        <div className="d-flex">
          <h6>Don't have an account yet?</h6>
          <a className="signupBtn">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
