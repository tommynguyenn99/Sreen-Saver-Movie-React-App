// pagehome
import React, { useState, useEffect } from "react";
import { API_URL, API_IMG } from "../components/globals/globals";
import MovieCard from "./MovieCard";
import "../styles/styles.scss";

function PageHome(props) {
  const [movies, setMovies] = useState([]);
  const [selectedMovieIndex, setSelectedMovieIndex] = useState(0);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  const handleNext = () => {
    setSelectedMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };

  const handlePrev = () => {
    setSelectedMovieIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1
    );
  };

  const selectedMovie = movies[selectedMovieIndex];

  useEffect(() => {
    const sliderItems = document.querySelectorAll(".slider-item");
    const dots = document.querySelectorAll(".dot");

    sliderItems.forEach((item, index) => {
      if (index === selectedMovieIndex) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    dots.forEach((dot, index) => {
      if (index === selectedMovieIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }, [selectedMovieIndex]);

  return (
    <div className="body">
      <div className="slider-container">
        <div className="slider">
          {movies.map((movie, index) => (
            <div
              key={movie.id}
              className={`slider-item ${
                index === selectedMovieIndex ? "active" : ""
              }`}
              style={{
                backgroundImage: `url(${API_IMG + movie.backdrop_path})`,
              }}
            >
              <div className="hero-content">
                <h1 className="hero-title">{movie.title}</h1>
                <p className="hero-description">{movie.overview}</p>
                <button className="more-info-button">More Info</button>
              </div>
            </div>
          ))}
        </div>
        <div className="slider-navigation">
          <div className="dots-container">
            {movies.map((_, index) => (
              <div
                key={index}
                className={`dot ${index === selectedMovieIndex ? "active" : ""}`}
                onClick={() => setSelectedMovieIndex(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
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
