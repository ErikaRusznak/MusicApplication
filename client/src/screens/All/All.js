import React from "react";
import "./All.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../../component/Header/Header.js";
import SongCard from "../../component/SongCard/SongCard.js";
import UndoIcon from "@mui/icons-material/Undo";
import axios from "axios";

const All = () => {
  const navigate = useNavigate();
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/songs/getAll")
      .then((res) => {
        console.log(res.data);
        setSongs(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleBack = () => {
    navigate("/home");
  };

  return (
    <>
      <Header />
      <div className=" d-flex allBox">
        <div className="undoIcon">
          <UndoIcon className="literallyIcon" onClick={handleBack} />{" "}
          <span className="backText">Back</span>
        </div>
        <div className="allTitle">All Songs</div>
      </div>
      <div className="pageAll">
        <div className="allDisplay">
          {songs.map((data) => (
            <SongCard
              key={data._id}
              id={data._id}
              name={data.name}
              artist={data.artist}
              album={data.album}
              imageURL={data.imageURL}
              musicGenre={data.musicGenre}
              isFavorite={data.isFavorite}
              isBought={data.isBought}
              className="songcarrd"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default All;
