import SongCard from "../../component/SongCard/SongCard.js";
import "./FavoritesList.css";
import React from "react";

function FavoritesList(props) {
  return (
    <ul className="favoritesDisplay">
      {props.songs.map((song) => (
        <SongCard
          key={song._id}
          id={song.id}
          name={song.name}
          artist={song.artist}
          album={song.album}
          imageURL={song.imageURL}
          musicGenre={song.musicGenre}
          isFavorite={song.isFavorite}
          isBought={song.isBought}
          className="songcarrd"
        />
      ))}
    </ul>
  );
}

export default FavoritesList;
