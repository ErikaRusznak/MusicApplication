import SongCard from "../../component/SongCard/SongCard.js";
import React from "react";

function BoughtList(props) {
  return (
    <ul className="boughtDisplay">
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

export default BoughtList;
