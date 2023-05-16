import React, { useEffect, useState } from "react";
import { API_IMG } from "../components/globals/globals";
import { Link } from "react-router-dom";
import "../styles/styles.scss";
import { FaHeart, FaHeartBroken } from "react-icons/fa";

const MovieCard = ({ movie, isFavorite = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMovieFavorite, setIsMovieFavorite] = useState(isFavorite);

  useEffect(() => {
    setIsMovieFavorite(localStorage.getItem(movie.id) ? true : false);
  }, [movie.id]);

  const handleMouseEnter = () => {
    window.innerWidth >= 800 && setIsHovered(true);
  };

  const handleMouseLeave = () => {
    window.innerWidth >= 800 && setIsHovered(false);
  };

  const handleLinkClick = (e) => {
    e.stopPropagation();
  };

  const handleFavClick = (e) => {
    e.preventDefault();
    const newIsFavorite = !isMovieFavorite;
    setIsMovieFavorite(newIsFavorite);
    if (newIsFavorite) {
      localStorage.setItem(movie.id, JSON.stringify(movie));
    } else {
      localStorage.removeItem(movie.id);
    }
  };

  // const handleFavClick = (e) => {
  //   const newIsFavorite = !isMovieFavorite;
  //   setIsMovieFavorite(newIsFavorite);
  //   if (newIsFavorite) {
  //     localStorage.setItem(movie.id, JSON.stringify(movie));
  //   } else {
  //     localStorage.removeItem(movie.id);
  //   }
  // };

  // Rating colour
  function getRatingColor(voteAverage) {
    if (voteAverage <= 5) {
      return "red";
    } else if (voteAverage >= 6 && voteAverage <= 7) {
      return "yellow";
    } else {
      return "green";
    }
  }

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
                <p
                  className="rating"
                  style={{ color: getRatingColor(movie.vote_average) }}
                >
                  {movie.vote_average * 10}%
                </p>

                <p className="movie-overview">
                  {movie.overview.split(" ").slice(0, 35).join(" ")}...
                </p>
                <div className="fav-button" onClick={handleFavClick}>
                  {isMovieFavorite ? (
                    <FaHeart className="heart" />
                  ) : (
                    <FaHeartBroken className="unheart" />
                  )}
                </div>
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
        <div className="mobile-poster-content">
          <p className="title">{movie.title}</p>
          <p
            className="rating"
            style={{ color: getRatingColor(movie.vote_average) }}
          >
            {movie.vote_average * 10}%
          </p>

          <p className="movie-overview">
            {movie.overview.split(" ").slice(0, 35).join(" ")}...
          </p>
          <div className="fav-button" onClick={handleFavClick}>
            {isMovieFavorite ? (
              <FaHeart className="heart" />
            ) : (
              <FaHeartBroken className="unheart" />
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
