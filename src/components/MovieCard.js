import React, { useState } from "react";
import { API_IMG } from "../components/globals/globals";
import { Link } from "react-router-dom";
import "../styles/styles.scss";

const MovieCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link to={`/movie/${props.movie.id}`}>
      <div
        className={`card ${isHovered ? "hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="backdrop"
          style={{
            backgroundImage: `url(${API_IMG + props.movie.backdrop_path})`,
          }}
        ></div>

        <div className="poster">
          <img src={API_IMG + props.movie.poster_path} alt="" />
        </div>
        <div className="info">
          <p className="title">{props.movie.title}</p>
          <p className="rating">{props.movie.vote_average * 10}%</p>
          <p className="release">{props.movie.release_date}</p>

        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
