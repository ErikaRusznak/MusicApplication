import React from "react";
import { useState, useEffect } from "react";
import { Genres } from "./Genres.js";
import "./AdminMenu.css";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SongCardCreatedAdmin from "../SongCardCreatedAdmin/SongCardCreatedAdmin.js";
import SearchBar from "../../../component/SearchBar/SearchBar.js";

function Menu() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [songs, setSongs] = useState([]);
  const [genreSongs, setGenreSongs] = useState(songs);
  const [allSongsDisplayed, setAllSongsDisplayed] = useState(true);
  const [genre, setGenre] = useState("");
  const [copySongs, setCopySongs] = useState([]);

  const handleOpen = () => {
    setOpen(!open);
  };

  const addSongAdmin = () => {
    navigate("/addSongAdmin");
  };
  const addArtistAdmin = () => {
    navigate("/addArtistAdmin");
  };
  const goAll = () => {
    navigate("/allAdmin");
  };
  const allArtists = () => {
    navigate("/adminArtist");
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/songs/getAll")
      .then((res) => {
        console.log(res.data);
        setSongs(res.data.data);
        setCopySongs(res.data.data);
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
          <button className="menuButton" onClick={goAll}>
            All Songs
          </button>
        </div>
        <div className="menuItem">
          <button className="menuButton" onClick={allArtists}>
            All Artists
          </button>
        </div>
        <div className="menuItem">
          <button className="menuButton" onClick={addSongAdmin}>
            Add Song
          </button>
        </div>
        <div className="menuItem">
          <button className="menuButton" onClick={addArtistAdmin}>
            Add Artist
          </button>
        </div>
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
      <div className="songContainer">
        <div className="songsDisplayAdmin">
          {allSongsDisplayed
            ? songs.map((song) => (
                <SongCardCreatedAdmin
                  key={song._id}
                  id={song._id}
                  name={song.name}
                  artist={song.artist}
                  album={song.album}
                  imageURL={song.imageURL}
                  musicGenre={song.musicGenre}
                  isUsers={song.isUsers}
                  className="songcarrd"
                />
              ))
            : genreSongs.map((song) => (
                <SongCardCreatedAdmin
                  key={song._id}
                  id={song._id}
                  name={song.name}
                  artist={song.artist}
                  album={song.album}
                  imageURL={song.imageURL}
                  musicGenre={song.musicGenre}
                  className="songcarrd"
                />
              ))}
        </div>
      </div>
    </>
  );
}

export default Menu;
