import React, { useState, useEffect } from "react";
import "../styles/styles.scss";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      <button onClick={toggleNav} className="btn">
        <div className={`burger ${toggleMenu ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      {(toggleMenu || screenWidth > 500) && (
        <ul className="list">
          <li className="items">
            <a href="/">Home</a>
          </li>
          <li className="items">
            <a href="/favourites">Favourites</a>
          </li>
          <li className="items">
            <a href="/about">About</a>
          </li>
        </ul>
      )}

      <div
        className={`overlay ${toggleMenu ? "open" : ""}`}
        onClick={toggleNav}
      />
    </nav>
  );
}
