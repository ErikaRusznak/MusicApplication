import React from "react";
import { useState, useEffect } from "react";
import { Genres } from "./Genres.js";
import "./Menu.css";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SongCard from "../SongCard/SongCard.js";

function Menu() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [songs, setSongs] = useState([]);
  const [genreSongs, setGenreSongs] = useState(songs);
  const [allSongsDisplayed, setAllSongsDisplayed] = useState(true);
  const [genre, setGenre] = useState("");

  const handleOpen = () => {
    setOpen(!open);
  };

  const goFavorite = () => {
    navigate("/favorites");
  };

  const goBoughtSongs = () => {
    navigate("/bought");
  };
  const goYourSongs = () => {
    navigate("/yours");
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/songs/getAll")
      .then((res) => {
        console.log(res.data);
        setSongs(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const filterSongs = (genre) => {
    const songsSet = songs.filter((data) => {
      // console.log(data);
      return data.musicGenre === genre;
    });
    setGenreSongs(songsSet);
    setAllSongsDisplayed(false);
    setGenre(genre);
    console.log(genreSongs);
  };

  return (
    <>
      <div className=" d-flex justify-content-evenly menubox">
        <Dropdown>
          <div className="dropdown" onClick={handleOpen}>
            <Dropdown.Toggle
              id="dropdown-basic"
              style={{
                color: "white",
                background: "#1ed760",
                border: "black",
                boxShadow: "3px 3px 3px #ffffff83",
              }}
            >
              Genres
            </Dropdown.Toggle>
            {open ? (
              <Dropdown.Menu>
                {Genres.map((value, key) => {
                  return (
                    <Dropdown.Item
                      key={key}
                      onClick={() => filterSongs(value.genre)}
                      className="categories"
                      style={{ color: "#1ed760" }}
                    >
                      <div>{value.genre}</div>
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            ) : null}
          </div>
        </Dropdown>
        <div className="menuItem">
          <button className="menuButton" onClick={goFavorite}>
            Favorites
          </button>
        </div>
        <div className="menuItem">
          <button className="menuButton" onClick={goBoughtSongs}>
            Bought Songs
          </button>
        </div>
        <div className="menuItem">
          <button className="menuButton" onClick={goYourSongs}>
            Your Songs
          </button>
        </div>
      </div>
      <div className="songContainer">
      
        <div className="songsDisplay">
          {allSongsDisplayed
            ? songs.map((song) => (
                <SongCard
                  key={song._id}
                  id={song._id}
                  name={song.name}
                  artist={song.artist}
                  album={song.album}
                  imageURL={song.imageURL}
                  musicGenre={song.musicGenre}
                  isFavorite={song.isFavorite}
                  isBought={song.isBought}
                  className="songcarrd"
                />
              ))
            : genreSongs.map((song) => (
                <SongCard
                  key={song._id}
                  id={song._id}
                  name={song.name}
                  artist={song.artist}
                  album={song.album}
                  imageURL={song.imageURL}
                  musicGenre={song.musicGenre}
                  isFavorite={song.isFavorite}
                  isBought={song.isBought}
                />
              ))}
        </div>
      </div>
    </>
  );
}

export default Menu;
