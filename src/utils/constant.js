const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NmYwN2IxMDFiMjBjZWVmZjYwM2YwZDQ0MTRmMTBlYSIsInN1YiI6IjY1ZTg5OTc1OTYzODY0MDE4MWNhMmU5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HFs2LN6HFld7uxewHuPklf0C-0EmKF9WKY6PwCAxiQQ",
  },
};

const nowPlayingMoviesAPI =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

const NetflixBackgroungImage =
  "https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg";

const PROFILE_IMAGE_URL =
  "https://lh3.googleusercontent.com/a/ACg8ocIaPWI3KJ_oeMpg0n186kKRMUHNDoCBM_IpviI7A3LRtC4=s192-c-rg-br100";
export {
  API_OPTIONS,
  nowPlayingMoviesAPI,
  NetflixBackgroungImage,
  PROFILE_IMAGE_URL,
};
