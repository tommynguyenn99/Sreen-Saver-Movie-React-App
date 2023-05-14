import { LOGO } from "../components/globals/globals";

function PageAbout() {
  return (
    <div className="about-body">
      <div className="about-page">
        <div className="about-content">
          <h1 className="title-about">Welcome to Screen Saver</h1>
          <p className="about-text about-text-1">
            Screen Saver is an online database of information related to movies,
            TV shows, home videos, video games, and streaming content. It
            provides information about cast and crew, plot summaries, ratings,
            and reviews.
          </p>
          <p className="about-text about-text-2">
            Found something you want to watch? Add them to your favourites to
            get back to them later!
          </p>
          <p className="about-text about-text-3">
            This product uses TMDb API but is not endorsed or certified by TMDB.
          </p>
          <a href="https://www.themoviedb.org/" className="tmdb-link">
            <img src={LOGO} alt="TMDB Logo" className="tmdb-logo" />
          </a>
          <p className="about-text about-slogan">
            Discover your next favorite movie.
          </p>
        </div>
      </div>
    </div>
  );
}
export default PageAbout;
