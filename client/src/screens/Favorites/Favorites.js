import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import "./Favorites.css";
import FavoritesList from "./FavoritesList";

function Favorites() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  const favoritesCtx = useContext(FavoritesContext);
  let display;
  if (favoritesCtx.totalFavorites === 0) {
    display = (
      <p className="textPosition">No favorites here. Maybe add some.</p>
    );
  } else {
    display = <FavoritesList songs={favoritesCtx.favorites} />;
  }
  return (
    <div className="backgroundFav">
      <div className="pageFavorites">
        <div className="navbarFavorites"></div>
        <div className="contentFavorites">{display}</div>
      </div>
    </div>
  );
}

export default Favorites;
