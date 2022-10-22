import React from "react";
import "./Header.css";
import { BsBook } from "react-icons/bs";
import { Logo } from "./images";
import { NavLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

function Header() {

  return (
    <header className="allHeader">
      <img src={Logo} alt="Logo" className="logoPic" />

      <div>
        <ul className="headerInstructions">
          <li className="headerInstruction">
            <NavLink to={"/home"} className="headerInstruction">
              Home
            </NavLink>
          </li>
          <li className="headerInstruction">
            <NavLink to={"/favorites"} className="headerInstruction">
              Favorites
            </NavLink>
          </li>
          <li className="headerInstruction">
            <NavLink to={"/yourSongs"} className="headerInstruction">
              Your Songs
            </NavLink>
          </li>
          <li className="headerInstruction">
            <NavLink to={"/addSong"} className="headerInstruction">
              Add Song
            </NavLink>
          </li>
         
        </ul>
      </div>

      <button className="buttonLogOut">
        <a
          href="/"
          onClick={() => {
            localStorage.removeItem("userInfo");
          }}
        >
          Log out
        </a>
      </button>
    </header>
  );
}

export default Header;
