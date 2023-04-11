import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Alert, Button, FloatingLabel, Form } from "react-bootstrap";
import axios from "axios";
import "./register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  const handleRegister = () => {
    setError("");
    if (!agree) {
      setError("Please be agree to the terms and conditions.");
      return;
    }
    const payload = { email, username, password };
    axios
      .post("http://localhost:5000/auth/register", payload)
      .then((res) => {
        console.log(res.data.status);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.response.data.status);
        setError(err.response.data.msg);
      });
  };

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      handleRegister();
    }
  };

  const handleAgree = () => {
    setAgree(!agree);
    setError("");
  };

  return (
    <div id="firstPage" className="main-container">
      <div className="register-container">
        <h1 className="mb-4">Sign Up</h1>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="w-100 mb-3 mt-3"
        >
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Username"
          className="w-100 mb-3"
        >
          <Form.Control
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Password"
          className="w-100"
        >
          <Form.Control
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            onKeyUp={handleEnter}
          />
        </FloatingLabel>
        <div className="d-flex align-items-center mt-3 mb-3">
          <label className="checkbox-control">
            <input type="checkbox" name="checkbox" onChange={handleAgree} />
            Agree to Terms & Conditions.
          </label>
          <a className="agreements mx-1">Read more</a>
        </div>
        <Button className="mt-3 mb-3 signupBtn" onClick={handleRegister}>
          Sign Up
        </Button>
        {error && (
          <Alert className="mt-4 errorAlert" variant="danger">
            {error}
          </Alert>
        )}
      </div>
    </div>
  );
};

export default Register;
