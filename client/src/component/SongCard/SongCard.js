import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import FavoriteContext from "../../store/favorites-context";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ErrorMessage from "../ErrorMessage.js";

import "./Card.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 300,
  bgcolor: "#bcbcbc5e",
  border: "2px solid #1ed760",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px!important",
};

export default function SongCard(props) {
  const [isBought, setisBought] = useState(false);
  const [isFavorite, setisFavorite] = useState(false);
  const [bankCode, setBankCode] = useState("");
  const [message, setMessage] = useState(null);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const favoritesCtx = useContext(FavoriteContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        name: props.name,
        artist: props.artist,
        album: props.album,
        musicGenre: props.musicGenre,
        imageURL: props.imageURL,
      });
    }
  }
  const buySong = () => {
    const codeFromStorage = JSON.parse(
      localStorage.getItem("userInfo")
    ).bankCode;
    console.log(codeFromStorage);

    if (bankCode === "") {
      setMessage("Enter a code");
    } else if (bankCode !== codeFromStorage) {
      setMessage("Enter the right code");
    } else {
      setMessage(null);
      setisBought(true);
    }
  };

  // const addFavorite = (id) => {
  //   const config = {
  //     headers: {
  //       // "Content-type": "application/json",
  //     },
  //   };
  //   axios
  //     .put(
  //       `http://localhost:5000/api/songs/update/${id}`,
  //       { isFavorite: true },
  //       config
  //     )
  //     .then((res) => {
  //       setisFavorite(true);
  //       console.log(res.data);
  //       localStorage.setItem("songInfo", JSON.stringify(res.data));
  //     });
  // };

  return (
    <Card className=" entirecard rounded shadow">
      <CardMedia
        className="poza"
        component="img"
        height="140"
        image={props.imageURL}
        alt="poza piesa"
      />
      <div className="belowPhoto">
        <CardContent>
          <div component="div" className="songName">
            {props.name}
          </div>
          <div color="text.secondary" className="artistName">
            {props.artist}
          </div>
        </CardContent>

        <CardActions style={{ height: "2rem" }} className="cardActions">
          {itemIsFavorite || isFavorite ? (
            <IconButton aria-label="add to favorites">
              <FavoriteIcon
                className="favoriteButton"
                onClick={toggleFavoriteStatusHandler}
              />
            </IconButton>
          ) : (
            <IconButton aria-label="add to favorites">
              <FavoriteBorderOutlinedIcon
                className="favoriteButton"
                onClick={toggleFavoriteStatusHandler}
              />
            </IconButton>
          )}

          {!isBought ? (
            <React.Fragment>
              <Button aria-label="add to favorites" onClick={handleOpen}>
                <AddShoppingCartIcon className="shoppingButton" />
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <div className="modalDisplay d-grid">
                    <div id="modal-modal-title" className="titleModal ">
                      Buy the song
                    </div>
                    {message && (
                      <ErrorMessage variant="danger">{message}</ErrorMessage>
                    )}

                    <div className="mx-auto">
                      <input
                        type="text"
                        className="inputModal"
                        value={bankCode}
                        placeholder="Please enter your bank code here"
                        onChange={(e) => setBankCode(e.target.value)}
                      />
                    </div>

                    <div className="buttonsModal">
                      <button onClick={handleClose} className="buttonModal">
                        Go back
                      </button>
                      <button onClick={buySong} className="buttonModal">
                        Submit
                      </button>
                    </div>
                  </div>
                </Box>
              </Modal>
            </React.Fragment>
          ) : (
            <IconButton aria-label="add to favorites">
              <ShoppingCartIcon className="shoppingButton" />
            </IconButton>
          )}
        </CardActions>
      </div>
    </Card>
  );
}
