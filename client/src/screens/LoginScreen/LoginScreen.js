import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000";
import Loading from "../../component/Loading";
import MainScreen from "../../component/MainScreen";
import ErrorMessage from "../../component/ErrorMessage";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // redirect to the wanted page
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(email);

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
      setError(true);
    }
  };

  return (
    <MainScreen title="Login">
      <div className="loginContainer">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}

        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <Row className="py-3">
          <Col>
            Are you new here ? <Link to="/register">Register Here!</Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
};

export default LoginScreen;
