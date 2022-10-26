import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
//axios.defaults.baseURL = "http://localhost:5000";
import Loading from "../../component/Loading";
import MainScreen from "../../component/MainScreen/MainScreen.js";
import "./RegisterScreen.css";
import ErrorMessage from "../../component/ErrorMessage";
import { useNavigate } from "react-router-dom";

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

  // redirect to the wanted page
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };
  // const goLogin = () => {
  //   navigate("/login");
  // };
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
        if (error) {
          navigate("/login");
        }
      } catch (error) {
        setError(error.response.data.message);
        setLoading(false);
        // setError(true);
      }
    }
  };

  return (
    <div className="allRegister">
      <MainScreen title="Register">
        <div className="registerContainer">
          {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
          {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          {loading && <Loading />}

          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3">
              <Form.Label className="formLabelRegister">First Name</Form.Label>

              <Form.Control
                type="text"
                value={firstName}
                placeholder="Enter first name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="formLabelRegister">Last name</Form.Label>
              <Form.Control
                type="text"
                value={lastName}
                placeholder="Enter last name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="formLabelRegister">
                Email address
              </Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="formLabelRegister">Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="formLabelRegister">
                Confirm password
              </Form.Label>
              <Form.Control
                type="password"
                value={confirmPassword}
                placeholder="Type the password again"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="formLabelRegister">Bank Code</Form.Label>
              <Form.Control
                type="text"
                value={bankCode}
                placeholder="Enter bank code"
                onChange={(e) => setBankCode(e.target.value)}
              />
            </Form.Group>

            <div className="d-flex justify-content-center buttonsRegister">
              <button
                type="submit"
                className="buttonRegister"
                // onClick={goLogin}
              >
                Submit
              </button>

              <button
                type="button"
                className="buttonBackRegister"
                onClick={goBack}
              >
                Go back
              </button>
            </div>
          </Form>

          <Row className="py-3">
            <Col className="colRegister">
              Already have an account?{" "}
              <Link to="/login" className="colRegisterLink">
                Login Here!
              </Link>
            </Col>
          </Row>
        </div>
      </MainScreen>
    </div>
  );
};

export default RegisterScreen;
