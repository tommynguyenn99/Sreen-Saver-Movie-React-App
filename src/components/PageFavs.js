import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function PageFavs() {
  const [favoriteMovieIds, setFavoriteMovieIds] = useState(
    Object.keys(localStorage)
  );

  const handleUnfavAll = () => {
    localStorage.clear();
    setFavoriteMovieIds([]);
  };

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
      <div className="container-fluid">
        {favoriteMovieIds.length === 0 ? (
          <h1 className="no-fav">You have no favourited movies!</h1>
        ) : (
          <div>
            <h1 className="fav-heading">Your favourited movies!</h1>
            <button className="unfav-btn" onClick={handleUnfavAll}>
              Unfavourite All
            </button>
            <div className="row">
              {favoriteMovieIds.map((movieId) => (
                <MovieCard
                  className="movie-card"
                  key={movieId}
                  movie={JSON.parse(localStorage[movieId])}
                  isFavorite={true}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default PageFavs;
