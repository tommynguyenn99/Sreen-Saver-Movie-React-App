import React from 'react';
import {useEffect, useState} from 'react';
import {API_URL} from "./components/globals/globals";
import MovieCard from "./components/MovieCard";
import './App.css';

function App() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setMovies(data.results))
  })


  return (
    <div className="body">
      <div className="container-fluid">
        <div className="row">
        {movies.map((movie) => 
        <MovieCard {...movie}/>
        )}
        </div>
        </div>
    </div>
  );
}

export default App;
