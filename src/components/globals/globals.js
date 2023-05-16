// API KEY,TOKENS, IMPORTANT INFO
export const API_KEY = "e3ff3458772dcbd41d3f954d2f21c122";
export const API_KEY_PARAM = `api_key=${API_KEY}`;
export const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2ZmMzQ1ODc3MmRjYmQ0MWQzZjk1NGQyZjIxYzEyMiIsInN1YiI6IjY0NGMxNmM4NzI2ZmIxMDVjODA2M2NmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DJw24rHXnxoIEII3NC7UGA2a28G01g_cRepFsIv0NSg";
export const APP_FOLDER_NAME = "movie-react-app";
export const API_LANGUAGE = "en-US";
export const API_LANGUAGE_PARAM = `&language=${API_LANGUAGE}`;
export const API_PAGE_DEFAULT = "1";
export const API_PAGE_DEFAULT_PARAM = `&page=${API_PAGE_DEFAULT}`;
export const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=e3ff3458772dcbd41d3f954d2f21c122&language=en-US&page=";

// IMAGES
// Use this for posters
// 500w
export const API_IMG = "https://image.tmdb.org/t/p/w500/";

// Use this for backdrops
export const API_IMG_BACKDROP = "https://image.tmdb.org/t/p/original/";
export const API_BASE_URL = "https://api.themoviedb.org/3/movie";

// SINGLE MOVIE PAGE POSTER
// 185w
export const API_IMG_SINGLE_PAGE_POSTER = "https://image.tmdb.org/t/p/w185/";

// SINGLE PAGE IMAGE
// 342w
export const API_IMG_SINGLE_POSTER = "https://image.tmdb.org/t/p/w342/";
export const API_IMG_SINGLE_BACKDROP = "https://image.tmdb.org/t/p/original/";
export const API_MOVIE_RUNTIME =
  "https://api.themoviedb.org/3/movie/550?api_key=e3ff3458772dcbd41d3f954d2f21c122";

export const LOGO =
  "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg";
// Add api image for poster and backdrop
// backdrop in diff size

/**
 *
 * @param {string} endpoint
 * @returns string full api endpoint
 */
export const buildApiUrl = (endpoint = "popular") =>
  `${API_BASE_URL}/${endpoint}?${API_KEY_PARAM}${API_LANGUAGE_PARAM}${API_PAGE_DEFAULT_PARAM}`;
