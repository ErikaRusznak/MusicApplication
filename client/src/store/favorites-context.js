import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteSong) => {},
  removeFavorite: (songId) => {},
  itemIsFavorite: (songId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteSong) {
    setUserFavorites((prevUserFav) => {
      return prevUserFav.concat(favoriteSong);
    });
  }

  function removeFavoriteHandler(songId) {
    setUserFavorites((prevUserFav) => {
      return prevUserFav.filter((song) => song.id !== songId);
    });
  }

  function itemIsFavoriteHandler(songId) {
    return userFavorites.some((song) => song.id === songId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
