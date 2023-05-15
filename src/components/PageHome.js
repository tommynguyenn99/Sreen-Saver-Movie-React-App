// pagehome
import React, { useState, useEffect } from "react";
import {
  API_URL,
  API_IMG,
  API_IMG_BACKDROP,
  buildApiUrl,
} from "../components/globals/globals";
import MovieCard from "./MovieCard";
import "../styles/styles.scss";

const categories = [
  { id: "popular", label: "Popular" },
  { id: "now_playing", label: "Now Playing" },
  { id: "top_rated", label: "Top Rated" },
  { id: "upcoming", label: "Upcoming" },
];

function PageHome(props) {
  const [movies, setMovies] = useState([]);
  const [selectedMovieIndex, setSelectedMovieIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [page, setPage] = useState(1);

  // items for slider

  const moviesForSlider = movies.slice(0, 5);

  // old code
  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const movies = data.results.slice(0, 12);
  //       setMovies(movies);
  //     });
  // }, []);

  // code to display more movies, can delete later
  useEffect(() => {
    const apiUrl = buildApiUrl(selectedCategory.id) + `&page=${page}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [selectedCategory, page]);

  // useEffect(() => {
  //   setPage(1);
  // }, []);

  // Not sure what this is for
  const handleNext = () => {
    setSelectedMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };

  const handlePrev = () => {
    setSelectedMovieIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1
    );
  };

  const selectedMovie = movies[selectedMovieIndex];
  //

  // Slider
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
    <div className="home-body">
      <div className="slider-container">
        <div className="slider">
          {/* {movies.map((movie, index) => ( */}
          {moviesForSlider.map((movie, index) => (
            <div
              key={movie.id}
              className={`slider-item ${
                index === selectedMovieIndex ? "active" : ""
              }`}
              style={{
                backgroundImage: `url(${
                  API_IMG_BACKDROP + movie.backdrop_path
                })`,
              }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content">
                <h1 className="hero-title">{movie.title}</h1>
                <p className="hero-description">{movie.overview}</p>
                <a href={`/movie/${movie.id}`} className="more-info-button">
                  More Info
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="slider-navigation">
          <div className="dots-container">
            {/* {movies.map((_, index) => ( */}
            {moviesForSlider.map((_, index) => (
              <div
                key={index}
                className={`dot ${
                  index === selectedMovieIndex ? "active" : ""
                }`}
                onClick={() => setSelectedMovieIndex(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} isFavorite={false} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PageHome;
