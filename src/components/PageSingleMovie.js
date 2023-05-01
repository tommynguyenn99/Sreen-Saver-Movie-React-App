import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_BASE_URL, API_KEY, API_IMG } from "./globals/globals";

function PageSingleMovie() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`${API_BASE_URL}/${id}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);
  console.log(movie);
  return (
    <section className="single-movie-page">
      <h1>{movie?.title}</h1>
      <img
        src={`${API_IMG}${movie?.poster_path}`}
        alt={`${movie?.title} poster`}
      />
      <p>{movie?.overview}</p>
    </section>
  );
}
export default PageSingleMovie;
