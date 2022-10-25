import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import BoughtContext from "../../store/bought-context";
import "./Bought.css";
import BoughtList from "./BoughtList";
import Header from "../../component/Header/Header.js";
import UndoIcon from "@mui/icons-material/Undo";

function Bought() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/home");
  };

  const boughtCtx = useContext(BoughtContext);
  let display;
  if (boughtCtx.totalBought === 0) {
    display = (
      <p className="textPosition" style={{ color: "white" }}>
        No buyed songs here. Maybe add some.
      </p>
    );
  } else {
    display = <BoughtList songs={boughtCtx.bought} />;
  }
  return (
    <>
      <Header />
      <div className=" d-flex boughtBox">
        <div className="undoIcon">
          <UndoIcon className="literallyIcon" onClick={handleBack} />{" "}
          <span className="backText">Back</span>
        </div>
        <div className="boughtTitle">Bought</div>
      </div>
      <div className="pageBought">
        <div className="boughtDisplay">{display}</div>
      </div>
    </>
  );
}

export default Bought;
