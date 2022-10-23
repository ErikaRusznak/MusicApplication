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
import Shop2Icon from "@mui/icons-material/Shop2";

import "./Card.css";

export default function SongCard(props) {
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
          <IconButton aria-label="add to favorites">
            {/* <FavoriteBorderOutlinedIcon color="success" /> */}
            <FavoriteIcon className="favoriteButton" />
          </IconButton>
          <IconButton>
            <Shop2Icon className="shoppingButton" />
          </IconButton>
        </CardActions>
      </div>
    </Card>
  );
}
