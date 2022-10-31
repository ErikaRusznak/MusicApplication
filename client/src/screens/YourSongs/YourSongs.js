import React from "react";
import "./YourSongs.css";
import SongCardCreated from "../../component/SongCardCreated/SongCardCreated.js";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../../component/Header/Header.js";
import UndoIcon from "@mui/icons-material/Undo";
import axios from "axios";
import SearchBar from "../../component/SearchBar/SearchBar.js";

function YourSongs() {
  const navigate = useNavigate();
  const [songs, setSongs] = useState([]);
  const [copySongs, setCopySongs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/userSongs")
      .then((res) => {
        // console.log(res.data);
        setSongs(res.data.data);
        setCopySongs(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleBack = () => {
    navigate("/home");
  };

  return (
    <>
      <Header />

      <div className="d-flex yoursBox">
        <div className="undoIcon">
          <UndoIcon className="literallyIcon" onClick={handleBack} />{" "}
          <span className="backText">Back</span>
        </div>
        <div className="yoursTitle">Your Songs</div>
      </div>
      <div className="searchBox">
        <div>
          <SearchBar
            placeholder="Enter the title... "
            handleChange={(e) => {
              const field = e.target.value;
              console.log(field);
              if (field === "") {
                setSongs(copySongs);
              } else {
                let filteredSearch = [];
                filteredSearch = songs.filter((song) => {
                  return song.name.toLowerCase().includes(field.toLowerCase());
                });
                setSongs(filteredSearch);
              }
            }}
          />
        </div>
      </div>
      <div className="pageUsers">
        <div className="usersDisplay">
          {songs.map((data) => (
            <SongCardCreated
              key={data._id}
              id={data._id}
              name={data.name}
              artist={data.artist}
              album={data.album}
              imageURL={data.imageURL}
              musicGenre={data.musicGenre}
              className="songcarrd"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default YourSongs;
