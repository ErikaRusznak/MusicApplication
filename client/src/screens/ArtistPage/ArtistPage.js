import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../../component/Header/Header.js";
import SongCard from "../../component/SongCard/SongCard.js";
import UndoIcon from "@mui/icons-material/Undo";
import axios from "axios";
import SearchBar from "../../component/SearchBar/SearchBar.js";
import "./Artist.css";
import ArtistCard from "../../component/ArtistCard/ArtistCard.js";

const ArtistPage = () => {
  const navigate = useNavigate();
  const [artists, setArtists] = useState([]);
  const [copyArtists, setCopyArtists] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/artists/getAll")
      .then((res) => {
        // console.log(res.data);
        setArtists(res.data.data);
        setCopyArtists(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleBack = () => {
    navigate("/home");
  };

  return (
    <>
      <Header />

      <div className="d-flex allBox">
        <div className="undoIcon">
          <UndoIcon className="literallyIcon" onClick={handleBack} />{" "}
          <span className="backText">Back</span>
        </div>
        <div className="allTitle">Artists</div>
      </div>
      <div className="searchBox">
        <div>
          <SearchBar
            placeholder="Enter the title... "
            handleChange={(e) => {
              const field = e.target.value;
              console.log(field);
              if (field === "") {
                setArtists(copyArtists);
              } else {
                let filteredSearch = [];
                filteredSearch = artists.filter((artist) => {
                  return artist.name
                    .toLowerCase()
                    .includes(field.toLowerCase());
                });
                setArtists(filteredSearch);
              }
            }}
          />
        </div>
      </div>
      <div className="allArtist">
        <div className="artistDisplay">
          {artists.map((artist) => (
            <ArtistCard
              key={artist._id}
              id={artist._id}
              name={artist.name}
              imageURL={artist.imageURL}
              description={artist.description}
              className="songcarrd"
              
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ArtistPage;
