import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import PlayTrailerButton from "../components/TrailerBtn";
import "../styles/styles.scss";
import {
  API_BASE_URL,
  API_KEY,
  API_IMG_SINGLE_PAGE_POSTER,
  API_IMG_SINGLE_BACKDROP,
} from "./globals/globals";
import YouTubePlayer from "react-player/youtube";
import { FaStar } from "react-icons/fa";

function PageSingleMovie() {
  const [movie, setMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState(null);
  const [directors, setDirectors] = useState("");
  const [casts, setCast] = useState([]);
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
          const trailer = data.results.find(
            (result) => result.type === "Trailer"
          );
          if (trailer) {
            const trailerKey = trailer.key;
            const API_MOVIE_TRAILER = `https://www.youtube.com/watch?v=${trailerKey}`;
            setTrailerUrl(API_MOVIE_TRAILER);
          }
        })
        .catch((error) => console.error(error));
    }
  }, [movie]);

  // Movie credits (Director)
  useEffect(() => {
    if (movie) {
      const API_MOVIE_CREDITS = `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${API_KEY}`;
      fetch(API_MOVIE_CREDITS)
        .then((response) => response.json())
        .then((data) => {
          const directors = data.crew
            .filter((member) => member.job === "Director")
            .map((director) => director.name);
          setDirectors(directors);
        })
        .catch((error) => console.error(error));
    }
  }, [movie]);

  // Movie credits (Cast)
  useEffect(() => {
    if (movie) {
      const API_MOVIE_CREDITS = `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${API_KEY}`;

      fetch(API_MOVIE_CREDITS)
        .then((response) => response.json())
        .then((data) => {
          const cast = data.cast.slice(0, 3).map((cast) => cast.name);
          setCast(cast);
        })
        .catch((error) => console.error(error));
    }
  }, [movie]);

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

  const handleClick = () => {
    const trailer = `https://www.youtube.com/watch?v=${trailerUrl}`;
    window.location = trailer;
  };

  // Rating stars
  const MovieRating = ({ voteAverage }) => {
    const roundedVote = Math.round(voteAverage * 10) / 10;
    const voteNumber = roundedVote * 10;
    const finalVoteNum = `${voteNumber}%`;

    // Calculate the number of full stars to display
    const fullStars = Math.floor(voteNumber / 20);

    // Create an array of star icons
    const stars = [...Array(5)].map((_, index) => (
      <FaStar key={index} color={index < fullStars ? "#ffc107" : "#e4e5e9"} />
    ));
    // return the stars array
    return <>{stars}</>;
  };

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
          <h1 className="single-movie-title-left">{movie?.title}</h1>
          <p className="single-movie-rating-left">
            <MovieRating voteAverage={voteAverage} /> {finalVoteNum}
          </p>
          {/* Add five star rating  */}
          <div className="single-movie-information glass">
            <div className="trailer-container">
              {trailerUrl && (
                <YouTubePlayer
                  className="youtube-player"
                  url={`https://www.youtube.com/watch?v=${trailerUrl}`}
                  controls
                  width="auto"
                  height="80%"
                  playing={false}
                />
              )}
            </div>

            <h1 className="single-movie-title single-info">{movie?.title}</h1>
            <hr className="line" />
            <p className="single-movie-rating single-info">
              <MovieRating voteAverage={voteAverage} />
              &nbsp;
              {finalVoteNum}
            </p>
            <p className="single-movie-duration single-info">
              <b>Duration</b>: {duration}
            </p>
            <p className="single-movie-release single-info">
              <b>Release Date</b> :{" "}
              {new Date(movie?.release_date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <h2 className="single-overview-header single-info">Overview</h2>
            <p className="single-overview single-info">{movie?.overview}</p>
            <p className="single-movie-directors single-info">
              {directors && directors.length > 0 && (
                <>
                  <strong>Directors:</strong> {directors.join(", ")}
                </>
              )}
            </p>
            <p className="single-cast single-info">
              {casts && casts.length > 0 && (
                <>
                  <strong>Stars:</strong> {casts.join(", ")}
                </>
              )}
            </p>
            <a
              className="play-trailer-btn"
              href={trailerUrl}
              onClick={handleClick}
            >
              Play Trailer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PageSingleMovie;
