import React from "react";
import { useEffect, useState } from "react";
import { API_URL } from "./components/globals/globals";
import MovieCard from "./components/MovieCard";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageHome from "./components/PageHome";
import PageSingleMovie from "./components/PageSingleMovie";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movie/:id" element={<PageSingleMovie />} />
        <Route path="/" exact element={<PageHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
