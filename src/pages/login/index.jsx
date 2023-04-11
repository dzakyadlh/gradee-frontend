import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Alert, Button, FloatingLabel, Form } from "react-bootstrap";
import axios from "axios";
import "./style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  };

  const handleLogin = () => {
    setError("");
    const payload = { email, password };
    axios
      .post("http://localhost:5000/auth/login", payload)
      .then((res) => {
        localStorage.setItem("username", res.data.data.username);
        localStorage.setItem("token", res.data.data.token);
        console.log(res.data.status);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data.status);
        setError(err.response.data.msg);
      });
  };

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      handleLogin();
    }
  };

  return (
    <div className="main-container">
      <div className="login-container">
        <h1 className="mb-3">Sign In</h1>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mt-3 mb-3"
        >
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            onKeyUp={handleEnter}
          />
        </FloatingLabel>
        <Button className="mt-3 mb-3 signinBtn" onClick={handleLogin}>
          Sign In
        </Button>
        <div className="d-flex">
          <h6>Don't have an account yet?</h6>
          <a className="signupBtn" href="/register">
            Sign Up
          </a>
        </div>
        {error && (
          <Alert className="mt-4 errorAlert" variant="danger">
            {error}
          </Alert>
        )}
      </div>
    </div>
  );
};

export default Login;
