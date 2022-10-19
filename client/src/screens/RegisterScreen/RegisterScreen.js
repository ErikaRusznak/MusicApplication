import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
//axios.defaults.baseURL = "http://localhost:5000";
import Loading from "../../component/Loading";
import MainScreen from "../../component/MainScreen";
import "./RegisterScreen.css";
import ErrorMessage from "../../component/ErrorMessage";

const RegisterScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [bankCode, setBankCode] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  //If someone is logged, when the login icon is pressed, we will be redirected to HomePage
  //we will move this to the landing page
  /*const navigate = useNavigate();
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    
    if(userInfo){
      navigate("/");
    }
  }, [navigate]);*/

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
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
          "/api/users/register",
          {
            firstName,
            lastName,
            email,
            password,
            bankCode,
          },
          config
        );

        console.log(data);
        localStorage.setItem("userInfo", JSON.stringify(data));
        setLoading(false);
        setError(false);

      } catch (error) {
        setError(error.response.data.message);
        setLoading(false);
        // setError(true);
      }
    }
  };

  return (
    <MainScreen title="Register">
      <div className="registerContainer">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
        {loading && <Loading />}

        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              value={firstName}
              placeholder="Enter first name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              value={lastName}
              placeholder="Enter last name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control
              type="password"
              value={confirmPassword}
              placeholder="Type the password again"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Bank Code</Form.Label>
            <Form.Control
              type="text"
              value={bankCode}
              placeholder="Enter bank code"
              onChange={(e) => setBankCode(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <Row className="py-3">
          <Col>
            Already have an account? <Link to="/login">Login Here!</Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
};

export default RegisterScreen;
