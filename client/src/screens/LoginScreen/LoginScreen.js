import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000";
import Loading from "../../component/Loading";
import MainScreen from "../../component/MainScreen/MainScreen.js";
import ErrorMessage from "../../component/ErrorMessage";
import "./LoginScreen.css";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // redirect to the wanted page
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(email);

    if (!password || !email) {
      setMesssage("Please enter all fields");
    } else {
      setMessage(null);
      try {
        const config = {
          headers: {
            // "Content-type": "application/json",
          },
        };

        setLoading(true);

        // here we are making the post request on localhost:5000/api/users/login
        const { data } = await axios.post(
          "/api/users/login",
          {
            email,
            password,
          },
          config
        );

        console.log(data);
        localStorage.setItem("userInfo", JSON.stringify(data));
        setLoading(false);
        setError(false);
        const userInfo = localStorage.getItem("userInfo");

        if (userInfo) {
          navigate("/home");
        }
      } catch (error) {
        setError(error.response.data.message);
        setLoading(false);
        //setError(true);
      }
    }
  };

  return (
    <div className="allLogin">
      <MainScreen title="Login" className="titleLogin">
        <div className="loginContainer">
          {loading && <Loading />}
          {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3">
              <Form.Label className="formLabelLogin">Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="formLabelLogin">Password</Form.Label>
              <Form.Control
                className="formControlLogin"
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className="d-flex justify-content-center">
              <button type="submit" className="buttonLogin">
                Submit
              </button>

              <button
                type="submit"
                className="buttonBackLogin"
                onClick={goBack}
              >
                Go back
              </button>
            </div>
          </Form>

          <Row className="py-3">
            <Col className="colLogin">
              Are you new here?{" "}
              <Link to="/register" className="colLoginLink">
                Register here!
              </Link>
            </Col>
          </Row>
        </div>
      </MainScreen>
    </div>
  );
};

export default LoginScreen;
