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
    <Card className="mx-auto entirecard rounded shadow">
      <CardMedia
        className="poza"
        component="img"
        height="140"
        image="https://i1.sndcdn.com/avatars-000743065870-nr3wm8-t500x500.jpg"
        alt="poza piesa"
      />
      <div className="belowPhoto">
        <CardContent>
          <div component="div" className="songName">
            Nume piesa
          </div>
          <div color="text.secondary" className="artistName">
            Nume artist
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
