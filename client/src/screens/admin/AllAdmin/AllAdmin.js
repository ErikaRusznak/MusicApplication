import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import AdminHeader from "../../../component/admin/AdminHeader/AdminHeader.js";
import SongCardCreatedAdmin from "../../../component/admin/SongCardCreatedAdmin/SongCardCreatedAdmin.js";
import UndoIcon from "@mui/icons-material/Undo";
import axios from "axios";
import SearchBar from "../../../component/SearchBar/SearchBar.js";

const All = () => {
  const navigate = useNavigate();
  const [songs, setSongs] = useState([]);
  const [copySongs, setCopySongs] = useState([]);

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

  const handleBack = () => {
    navigate("/homeAdmin");
  };

  return (
    <>
      <AdminHeader />
      <div className="d-flex allBox">
        <div className="undoIcon">
          <UndoIcon className="literallyIcon" onClick={handleBack} />{" "}
          <span className="backText">Back</span>
        </div>
        <div className="allTitle">All Songs</div>
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
      <div className="pageAll">
        <div className="allDisplay">
          {songs.map((data) => (
            <SongCardCreatedAdmin
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
};

export default All;
