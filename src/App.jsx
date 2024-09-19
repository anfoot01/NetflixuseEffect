import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Genre from "./components/Genre";
import FilmDesc from "./components/FilmDesc";
import Rating from "./components/Rating";
import ButtonBlock from "./components/ButtonBlock";
import Popular from "./components/Popular";
import AgeMark from "./components/AgeMark";
import HeaderSearch from "./components/HeaderSearch";
import searchIcon from "../src/assets/search-icon.png";
function App() {
  let [showCounter, setShowCounter] = useState(true);
  let filmTitle = "Stranger Things";
  let filmDesc =
    "In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.";
  let countOfStars = "5";
  let genres = [
    {
      value: "Drama │",
    },
    {
      value: "Thriller │",
    },
    {
      value: "Supernatural",
    },
  ];
  return (
    <div className="container">
      <Header>
        <button className="logBtn" onClick={() => setShowCounter(!showCounter)}>
          <img
            className="header-container__right__search"
            src={searchIcon}
            alt="search"
          ></img>
        </button>
        {showCounter && <HeaderSearch></HeaderSearch>}
      </Header>

      <div className="main-content">
        <Genre genreValue={genres}></Genre>
        <FilmDesc title={filmTitle} desc={filmDesc}></FilmDesc>
        <Rating rating={countOfStars}></Rating>
        <ButtonBlock></ButtonBlock>
        <Popular></Popular>
      </div>
      <AgeMark></AgeMark>
    </div>
  );
}

export default App;
