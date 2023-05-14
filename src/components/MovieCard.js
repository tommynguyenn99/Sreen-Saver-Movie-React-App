import React, { useEffect, useState } from "react";
import { API_IMG } from "../components/globals/globals";
import { Link } from "react-router-dom";
import "../styles/styles.scss";

const MovieCard = ({ movie, isFavorite = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMovieFavorite, setIsMovieFavorite] = useState(isFavorite);

  useEffect(() => {
    setIsMovieFavorite(localStorage.getItem(movie.id) ? true : false);
  }, [movie.id]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleLinkClick = (e) => {
    e.stopPropagation();
  };

  const handleFavClick = (e) => {
    const newIsFavorite = !isMovieFavorite;
    setIsMovieFavorite(newIsFavorite);
    if (newIsFavorite) {
      localStorage.setItem(movie.id, JSON.stringify(movie));
    } else {
      localStorage.removeItem(movie.id);
    }
  };

  return (
    
    <div className="movie-card">
      <Link onClick={handleLinkClick} to={`/movie/${movie.id}`}>
        <div
          className={`card ${isHovered ? "hovered" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="backdrop"
            style={{
              backgroundImage: `url(${API_IMG + movie.backdrop_path})`,
            }}
          ></div>

          <div className="poster">
            {isHovered && (
              <div className="overlay">
                <p className="title">{movie.title}</p>
                <p className="rating">{movie.vote_average * 10}%</p>
              </div>
            )}
            <img
              src={API_IMG + movie.poster_path}
              alt=""
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </Link>
      <div className="fav-button" onClick={handleFavClick}>
        {isMovieFavorite ? "remove from favorites" : "add to favorites"}
      </div>
    </div>
  );
};

export default MovieCard;
