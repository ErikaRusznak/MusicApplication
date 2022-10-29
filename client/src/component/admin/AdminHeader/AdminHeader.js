import React from "react";
import "./AdminHeader.css";
import { BsBook } from "react-icons/bs";
import { Logo } from "./images";
import { NavLink } from "react-router-dom";

function AdminHeader() {
  return (
    <header className="allHeader">
      <img src={Logo} alt="Logo" className="logoPic" />

      <div>
        {/* <ul className="headerInstructions">
          <li className="headerInstruction">
            <NavLink to={"/homeAdmin"} className="headerInstruction">
              Home
            </NavLink>
          </li>
          <li className="headerInstruction">
            <NavLink to={"/addSong"} className="headerInstruction">
              Add Song
            </NavLink>
          </li>
          
        </ul> */}
        <div>Welcome, admin!</div>
      </div>

      <button className="buttonLogOut">
        <a
          href="/"
          onClick={() => {
            localStorage.removeItem("userInfo");
            localStorage.removeItem("songInfo");
          }}
        >
          Log out
        </a>
      </button>
    </header>
  );
}

export default AdminHeader;
