import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import "./Header.css";
import requests from "../Helpers/requests";

function Header({ setSelectedOption }) {
  return (
    <div className="header">
      <div className="header__icons">
        <div className="header__icon ">
          <HomeIcon />
          <p>Home</p>
        </div>
        <div
          className="header__icon "
          onClick={() => setSelectedOption(requests.fetchTrending)}
        >
          <FlashOnIcon />
          <p>Trending</p>
        </div>
        <div className="header__icon ">
          <LiveTvIcon />
          <p>Verified</p>
        </div>
        <div className="header__icon ">
          <VideoLibraryIcon />
          <p>Collection</p>
        </div>
        <div className="header__icon ">
          <SearchIcon />
          <p>Search</p>
        </div>
        <div className="header__icon ">
          <PersonOutlineIcon />
          <p>Account</p>
        </div>
      </div>
      <img
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
        alt="Hulu Logo"
      ></img>
    </div>
  );
}

export default Header;
