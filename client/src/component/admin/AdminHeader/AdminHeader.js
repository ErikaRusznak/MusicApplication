import React from "react";
import { BsBook } from "react-icons/bs";
import { Logo } from "./images";
import { NavLink } from "react-router-dom";

function AdminHeader() {
  return (
    <header className="allHeader">
      <img src={Logo} alt="Logo" className="logoPic" />

      <div>
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
