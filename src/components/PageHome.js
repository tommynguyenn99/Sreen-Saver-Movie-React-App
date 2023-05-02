import React, { useState, useEffect } from "react";
import {
  API_URL,
  API_IMG,
  API_IMG_BACKDROP,
} from "../components/globals/globals";
import MovieCard from "./MovieCard";
import "../styles/styles.scss";

function PageHome(props) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setSelectedMovie(data.results[0]); // Select the first movie as the default
      });
  }, []);

  return (
    <div className="body">
      {selectedMovie && (
        <div className="hero">
          {selectedMovie && (
            <div
              className="hero"
              style={{
                backgroundImage: `url(${
                  API_IMG_BACKDROP + selectedMovie.backdrop_path
                })`,
              }}
            >
              <div className="hero-content">
                <h1 className="hero-title">{selectedMovie.title}</h1>
                <p className="hero-description">{selectedMovie.overview}</p>
              </div>
            </div>
          )}
        </div>
      )}
      <div className="container-fluid">
        <div className="row">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PageHome;
