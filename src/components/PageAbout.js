import { LOGO } from "../components/globals/globals";

function PageAbout() {
  return (
    <div>
      <section className="about-page">Page About</section>
      <div className="about-content">
        <h1 className="title-about">Welcome to MOVIE TITLE HERE</h1>
        <p className="about-text">
          Solo Streams is an online database of information related to movies,
          TV shows, home videos, video games, and streaming content. It provides
          information about cast and crew, plot summaries, ratings, and reviews.
        </p>
        <p className="about-text">
          Found something you want to watch? Add them to your favourites to get
          back to them later!
        </p>
        <p className="about-text">
          This product uses TMDb API but is not endorsed or certified by TMDB.
        </p>
        <a href="https://www.themoviedb.org/">
          <img src={LOGO} alt="TMDB Logo" className="tmdb-logo" />
        </a>
      </div>
    </div>
  );
}
export default PageAbout;
