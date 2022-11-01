import React from "react";
import Header from "../../component/Header/Header.js";
import "./ArtistDisplay.css";
import UndoIcon from "@mui/icons-material/Undo";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ArtistDisplay() {
  // const { name, imageURL, description } = props;
  // console.log(props.name);
  const [songs, setSongs] = useState([]);
  const [songsForArtist, setSongsForArtist] = useState(songs);
  const [allSongsDisplayed, setAllSongsDisplayed] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/songs/getAll")
      .then((res) => {
        // console.log(res.data);
        setSongs(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/artists");
  };

  const x = JSON.parse(localStorage.getItem("songInfo"));
  // console.log(x.name);
  const name = x.name;
  const imageURL = x.imageURL;
  const description = x.description;

  const filterSongsForArtist = (artistName) => {
    console.log(songs);
    const songsSet = songs.filter((data) => {
      // console.log(data);
      return data.artist === artistName;
    });
    console.log(songsSet);
    setAllSongsDisplayed(true);
    setSongsForArtist(songsSet);
    console.log(songsForArtist);
  };
  return (
    <div>
      <Header />
      <div className="pageDisplayArtist">
        <div className="undoIconArtist">
          <UndoIcon className="literallyIcon" onClick={handleBack} />
        </div>
        <div className="allDisplayArtist">
          <img src={imageURL} alt="artist pic" className="imageArtistDisplay" />
        </div>
        <div className="rightSide">
          <div className="artistNameDisplay">{name}</div>
          <div className="artistDescription">{description}</div>
          <button
            className="buttonForSongs"
            onClick={() => filterSongsForArtist(name)}
          >
            Check songs
          </button>
        </div>
      </div>
      <div className="pageDisplayArtist">
        <div className="songArtists">
          {allSongsDisplayed ? (
            <div className="topMenu">
              <div className="picture">Picture</div>
              <div>Song</div>
              <div>Album</div>
            </div>
          ) : null}

          {songsForArtist.map((song) => (
            <>
              <div className="songArtist" key={song._id}>
                <div className="pictureForSong">
                  <img
                    src={song.imageURL}
                    alt=""
                    style={{ width: 30, height: 30, borderRadius: 50 }}
                  />
                </div>
                <div className="nameForSong">{song.name}</div>
                <div className="nameForAlbum">{song.album}</div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArtistDisplay;
