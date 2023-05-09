import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function PageFavs() {
  const [favoriteMovieIds, setFavoriteMovieIds] = useState(
    Object.keys(localStorage)
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setFavoriteMovieIds(Object.keys(localStorage));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  return (
    <section className="favs-page">
      <h2>Page Favs</h2>
      <div className="container-fluid">
        <div className="row">
          {favoriteMovieIds.map((movieId) => (
            <MovieCard
              key={movieId}
              movie={JSON.parse(localStorage[movieId])}
              isFavorite={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default PageFavs;
