import React, { useState, useEffect } from "react";
import searchIcon from "../assets/search-icon.png";
function HeaderSearch(props) {
  let [showState, setShowState] = useState(false);
  function changeShowState() {
    setShowState((showState) => !showState);
  }

  let [count, setCount] = useState(0);
  function upCounter() {
    setCount((count) => count + 1);
  }
  useEffect(() => {
    document.title = `Count ${count}`;
    return () => {
      console.log(
        "Компонент був створений, компонент був прихований або видалений"
      );
    };
  });
  
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={upCounter} className="btn btn-primary">
        Add +1
      </button>




      {showState ? (
        <input className="header-container__right__input" type="text" />
      ) : (
        <div></div>
      )}
      <button onClick={changeShowState} className="search">
        <img
          className="header-container__right__search"
          src={searchIcon}
          alt="search"
        ></img>
      </button>
    </>
  );
}

export default HeaderSearch;
