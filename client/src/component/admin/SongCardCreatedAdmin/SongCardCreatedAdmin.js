import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Row, Col } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import axios from "axios";
import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import SuccessMessage from "../../../component/SuccessMessage";
import { useNavigate } from "react-router-dom";
import { Genres } from "../../../component/Menu/Genres.js";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 700,
  bgcolor: "#bcbcbc5e",
  border: "2px solid #1ed760",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px!important",
};

const styleDelete = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 400,
  bgcolor: "#bcbcbc5e",
  border: "2px solid #1ed760",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px!important",
};
export default function SongCardCreated(props) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [message, setMessage] = useState(null);

  const goBack = () => {
    navigate("/homeAdmin");
  };

  const getSongDetails = async () => {
    let result = await axios.get(`/api/songs/getOne/${props.id}`);
    console.log(props.id);
    console.log(result.data.song);
    const songData = result.data.song;
    setName(songData.name);
    setArtist(songData.artist);
    setAlbum(songData.album);
    setImageURL(songData.imageURL);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [openAgain, setOpenAgain] = useState(false);
  const handleOpenAgain = () => {
    setOpenAgain(true);
    getSongDetails();
  };
  const handleCloseAgain = () => {
    setOpenAgain(false);
    navigate("/homeAdmin");
  };

  const deleteSong = async (e) => {
    e.preventDefault();
    const { data } = await axios.delete(`/api/songs/delete/${props.id}`);
    setMessage("Song deleted!");
    window.location.reload(false);
  };

  const doUpdate = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        // "Content-type": "application/json",
      },
    };
    await axios
      .put(
        `http://localhost:5000/api/songs/update/${props.id}`,
        { name, artist, album, imageURL },
        config
      )
      .then((res) => {
        console.log(res.data);
      });
    window.location.reload(false);
  };

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
          <div
            component="div"
            className="songName d-inline-block text-truncate"
          >
            {props.name}
          </div>
          <div color="text.secondary" className="artistName">
            {props.artist}
          </div>
        </CardContent>

        <CardActions style={{ height: "2rem" }} className="cardActions">
          <IconButton aria-label="rename" onClick={handleOpenAgain}>
            <DriveFileRenameOutlineIcon className="renameButton" />
          </IconButton>
          <Modal
            open={openAgain}
            onClose={handleCloseAgain}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="modalDisplay d-grid">
                <div id="modal-modal-title" className="titleModal ">
                  Change the song
                </div>

                {message && (
                  <SuccessMessage variant="success">{message}</SuccessMessage>
                )}
              </div>
              <div className="renameSongContainer">
                <Form onSubmit={doUpdate}>
                  <Form.Group className="mb-3">
                    <Form.Label className="formLabelAdd">Song name</Form.Label>

                    <Form.Control
                      type="text"
                      value={name}
                      placeholder="Enter song's name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="formLabelAdd">
                      Artist name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      value={artist}
                      placeholder="Enter artist's name"
                      onChange={(e) => setArtist(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="formLabelAdd">Album name</Form.Label>
                    <Form.Control
                      type="text"
                      value={album}
                      placeholder="Enter album's name"
                      onChange={(e) => setAlbum(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="formLabelAdd">Image</Form.Label>
                    <Form.Control
                      type="text"
                      value={imageURL}
                      placeholder="Enter image URL"
                      onChange={(e) => setImageURL(e.target.value)}
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-center buttonsAddSong">
                    <button
                      type="submit"
                      className="buttonAddSong"
                      onClick={doUpdate}
                    >
                      Update
                    </button>

                    <button
                      type="button"
                      className="buttonAddSong"
                      onClick={handleCloseAgain}
                    >
                      Go back
                    </button>
                  </div>
                </Form>
              </div>
            </Box>
          </Modal>

          <React.Fragment>
            <Button aria-label="delete" onClick={handleOpen}>
              <DeleteIcon className="deleteButton" />
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={styleDelete}>
                <div className="modalDisplay d-grid">
                  <div id="modal-modal-title" className="titleModal ">
                    This will delete the song.
                  </div>
                  <div className="titleModal ">Are you sure?</div>
                  {message && (
                    <SuccessMessage variant="success">{message}</SuccessMessage>
                  )}

                  <div className="buttonsModal">
                    <button className="buttonModal" onClick={deleteSong}>
                      I'm sure!
                    </button>
                    <button onClick={handleClose} className="buttonModal">
                      Go back
                    </button>
                  </div>
                </div>
              </Box>
            </Modal>
          </React.Fragment>
        </CardActions>
      </div>
    </Card>
  );
}
