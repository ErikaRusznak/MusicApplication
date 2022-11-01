import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import MainScreen from "../../../component/MainScreen/MainScreen.js";
import ErrorMessage from "../../../component/ErrorMessage";
import SuccessMessage from "../../../component/SuccessMessage";
import { useNavigate } from "react-router-dom";
import { Genres } from "../../../component/Menu/Genres.js";

function AddSong() {
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(null);
  // redirect to the wanted page
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/homeAdmin");
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!name || !imageURL || !description) {
      setMessage("Please complete all fields!");
      setSuccess(null);
    } else {
      setMessage(null);
      setSuccess(null);
      try {
        // here we are making the post request on localhost:5000/api/users/login
        const config = {
          headers: {
            // "Content-type" : "application/json"
          },
        };

        const { data } = await axios.post(
          "/api/artists/save",
          {
            name,
            imageURL,
            description,
          },
          config
        );

        console.log(data);
        setSuccess("Artist added!");
        setError(false);
      } catch (error) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="allAddSong">
      <div>
        <MainScreen title="Add Song">
          {message && (
            <ErrorMessage variant="danger" className="w-50">
              {message}
            </ErrorMessage>
          )}
          {error && (
            <ErrorMessage variant="danger" className="w-50">
              {error}
            </ErrorMessage>
          )}
          {success && (
            <SuccessMessage variant="success">{success}</SuccessMessage>
          )}
          <div className="addSongContainer">
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3">
                <Form.Label className="formLabelAdd">Aritst name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  placeholder="Enter song's name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="formLabelAdd">Image</Form.Label>
                <Form.Control
                  type="text"
                  value={imageURL}
                  placeholder="Enter image URL"
                  onChange={(e) => setImageURL(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="formLabelAdd">Description</Form.Label>
                <Form.Control
                  type="text"
                  value={description}
                  placeholder="Enter description"
                  onChange={(e) => setDescription(e.target.value)}
                  style={{ height: 100 }}
                />
              </Form.Group>

              <div className="d-flex justify-content-center buttonsAddSong">
                <button type="submit" className="buttonAddSong">
                  Add
                </button>

                <button
                  type="button"
                  className="buttonAddSong"
                  onClick={goBack}
                >
                  Go back
                </button>
              </div>
            </Form>
          </div>
        </MainScreen>
      </div>
    </div>
  );
}

export default AddSong;
