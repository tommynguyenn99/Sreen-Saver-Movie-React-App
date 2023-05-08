import React, { useEffect, useState } from "react";
import { API_IMG } from "../components/globals/globals";
import { Link } from "react-router-dom";
import "../styles/styles.scss";
import { useFavorites } from "../hooks/useFavorites";

const MovieCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [favorites, setFavorites] = useFavorites();
  const isMovieInFavs = favorites.includes(props.movie.id);

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
    // e.stopPropagation();
    if (isMovieInFavs) {
      setFavorites(favorites.filter((fav) => fav !== props.movie.id));
    } else {
      setFavorites([...favorites, props.movie.id]);
    }
  };
  useEffect(() => {
    console.log(favorites);
  }, [favorites]);
  return (
    <div>
      <Link onClick={handleLinkClick} to={`/movie/${props.movie.id}`}>
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
      <button className="fav-button" onClick={handleFavClick}>
        {isMovieInFavs ? "remove from favourites" : "add to favourites"}
      </button>
    </div>
  );
};

export default MovieCard;
