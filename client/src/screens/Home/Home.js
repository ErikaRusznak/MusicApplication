import React from "react";
import "./Home.css";
import Header from "../../component/Header/Header.js";
import SearchBar from "../../component/SearchBar/SearchBar.js";
import Menu from "../../component/Menu/Menu.js";
import SongCard from "../../component/SongCard/SongCard.js";

const Home = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <Header />
      {/* <SearchBar /> */}
      <Menu />
      {/* <SongCard /> */}
    </div>
  );
};

export default Home;
