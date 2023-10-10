import { API_KEY } from "./Constants";
export const orginals= `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
export const teenShows= `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`;
export const movies= `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
export const upComing= `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
export const topRated= `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
export const trending= `trending/all/day?api_key=${API_KEY}`;