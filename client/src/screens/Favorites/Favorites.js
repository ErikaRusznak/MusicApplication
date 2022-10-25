import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import "./Favorites.css";
import FavoritesList from "./FavoritesList";
import Header from "../../component/Header/Header.js";
import UndoIcon from "@mui/icons-material/Undo";

function Favorites() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/home");
  };

  const favoritesCtx = useContext(FavoritesContext);
  let display;
  if (favoritesCtx.totalFavorites === 0) {
    display = (
      <p
        className="textPosition"
        style={{ color: "white"}}
        
      >
        No favorites here. Maybe add some.
      </p>
    );
  } else {
    display = <FavoritesList songs={favoritesCtx.favorites} />;
  }
  return (
    <>
      <Header />
      <div className=" d-flex favoriteBox">
        <div className="undoIcon">
          <UndoIcon className="literallyIcon" onClick={handleBack} />{" "}
          <span className="backText">Back</span>
        </div>
        <div className="favoriteTitle">Favorites</div>
      </div>
      <div className="pageFavorites">
        <div className="favoritesDisplay">{display}</div>
      </div>
    </>
  );
}

export default Favorites;
