import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ArtistCard.css";
import ArtistPage from "../../screens/ArtistPage/ArtistPage.js";
import Menu from "../../component/Menu/Menu.js";
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

export default function ArtistCard(props) {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  const goArtist = () => {
    navigate("/artist");
    localStorage.setItem("songInfo", JSON.stringify(props));
    // const x = JSON.parse(localStorage.getItem("songInfo"));
    // console.log(x.name);
    console.log("HEi");
  };
  return (
    <Card className="entirecard rounded shadow">
      <CardMedia
        className="pozaArtist"
        component="img"
        height="140"
        image={props.imageURL}
        alt="poza artist"
      />
      <div className="belowPhoto">
        <CardContent>
          <div
            component="div"
            className="songName d-inline-block text-truncate"
            onClick={goArtist}
          >
            {props.name}
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
