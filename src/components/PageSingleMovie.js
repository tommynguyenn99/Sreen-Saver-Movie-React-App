import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/styles.scss";
import {
  API_BASE_URL,
  API_KEY,
  API_IMG_SINGLE_POSTER,
  API_IMG_SINGLE_BACKDROP,
} from "./globals/globals";
import YouTubePlayer from "react-player/youtube";

function PageSingleMovie() {
  const [movie, setMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState(null);
  const [directors, setDirectors] = useState("");
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${API_BASE_URL}/${id}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  // Movie Trailer
  useEffect(() => {
    if (movie) {
      const API_TRAILER_ID = `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}&language=en-US`;

      fetch(API_TRAILER_ID)
        .then((response) => response.json())
        .then((data) => {
          const trailerKey = data.results[0].key;
          const API_MOVIE_TRAILER = `https://www.youtube.com/watch?v=${trailerKey}`;
          setTrailerUrl(API_MOVIE_TRAILER);
        })
        .catch((error) => console.error(error));
    }
  }, [movie]);

  // Movie credits
  useEffect(() => {
    if (movie) {
      const API_MOVIE_CREDITS = `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${API_KEY}`;

      fetch(API_MOVIE_CREDITS)
        .then((response) => response.json())
        .then((data) => {
          const directors = data.crew.filter(
            (member) => member.job === "Director"
          );
          const cast = data.cast.slice(0, 10);
          setDirectors(directors);
          setCast(cast);
        })
        .catch((error) => console.error(error));
    }
  }, [movie]);

  console.log(directors);
  console.log(cast);
  // Movie duration math
  const runtimeInMins = movie?.runtime;
  const hours = Math.floor(runtimeInMins / 60);
  const minutes = runtimeInMins % 60;
  const duration = `${hours}h ${minutes}m`;

  // Rating Math
  const voteAverage = movie?.vote_average;
  const roundedVote = Math.round(voteAverage * 10) / 10;
  const voteNumber = roundedVote * 10;
  const finalVoteNum = `${voteNumber}%`;

  return (
    <div className="main-single-body">
      <div className="single-movie-hero">
        <div className="single-hero-overlay" />
        <img
          className="single-backdrop-img"
          src={`${API_IMG_SINGLE_BACKDROP}${movie?.backdrop_path}`}
          alt={`${movie?.title} poster`}
        />
      </div>
      <div className="movie-content-box">
        <div className="single-movie-content">
          {trailerUrl && (
            <div className="single-play-button-wrapper">
              <YouTubePlayer
                className="youtube-player"
                url={`https://www.youtube.com/watch?v=${trailerUrl}`}
                width="50"
                controls
                playing={false}
              />
            </div>
          )}

          <img
            className="single-poster-img"
            src={`${API_IMG_SINGLE_POSTER}${movie?.poster_path}`}
            alt={`${movie?.title} poster`}
          />
          <div className="single-movie-information">
            <h1 className="single-movie-title">{movie?.title}</h1>
            <p className="single-movie-duration">{duration}</p>
            <p className="single-movie-rating">{finalVoteNum}</p>
            <p className="single-movie-release">{movie?.release_date}</p>
            <p className="single-overview">{movie?.overview}</p>
            <p className="single-director">
              Directors: {movie?.directors?.name}
            </p>
            <p className="single-cast">Cast: {movie?.cast}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PageSingleMovie;
