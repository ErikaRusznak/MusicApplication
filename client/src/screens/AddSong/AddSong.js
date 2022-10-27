import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./AddSong.css";
import axios from "axios";
import Loading from "../../component/Loading";
import MainScreen from "../../component/MainScreen/MainScreen.js";
import ErrorMessage from "../../component/ErrorMessage";
import SuccessMessage from "../../component/SuccessMessage";
import { useNavigate } from "react-router-dom";
import { Genres } from "../../component/Menu/Genres.js";

function AddSong() {
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [musicGenre, setMusicGenre] = useState("");
  const [isUsers, setIsUsers] = useState(true);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(null);
  // redirect to the wanted page
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/home");
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!name || !artist || !album || !imageURL || !musicGenre) {
      setMessage("Please complete all fields!");
      setSuccess(null);
    } else {
      setIsUsers(true);
      setMessage(null);
      setSuccess(null);
      try {
        // here we are making the post request on localhost:5000/api/users/login
        const config = {
          headers: {
            // "Content-type" : "application/json"
          },
        };
        setIsUsers(true);

        const { data } = await axios.post(
          "/api/userSongs/save",
          {
            name,
            artist,
            album,
            imageURL,
            musicGenre,
            isUsers,
          },
          config
        );

        console.log(data);
        setSuccess("Song added!");
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
                <Form.Label className="formLabelAdd">Song name</Form.Label>

                <Form.Control
                  type="text"
                  value={name}
                  placeholder="Enter song's name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="formLabelAdd">Artist name</Form.Label>
                <Form.Control
                  type="text"
                  value={artist}
                  placeholder="Enter artist's name"
                  onChange={(e) => setArtist(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="formLabelAdd">Album name</Form.Label>
                <Form.Control
                  type="text"
                  value={album}
                  placeholder="Enter album's name"
                  onChange={(e) => setAlbum(e.target.value)}
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

              <div>
                <Form.Label className="formLabelAdd">
                  Choose music genre{" "}
                </Form.Label>
                <select
                  className="selectGenre"
                  onChange={(e) => setMusicGenre(e.target.value)}
                >
                  {Genres.map((option) => (
                    <option value={option.genre}>{option.genre}</option>
                  ))}
                </select>
              </div>

              <div className="d-flex justify-content-center buttonsAddSong">
                <button
                  type="submit"
                  className="buttonAddSong"
                  // onClick={goLogin}
                >
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
