import { API_KEY } from "./constant/constants";

export const orginals = `discover/tv?api_key=${API_KEY}&with_networks=213`;
export const action = `discover/movie?api_key=${API_KEY}&with_genres=28`;
export const horror = `discover/movie?api_key=${API_KEY}&with_genres=27`;
export const RomanceMovies = `discover/movie?api_key=${API_KEY}&with_genres=10749`;
export const ComedyMovies = `discover/movie?api_key=${API_KEY}&with_genres=35`;

// https://api.themoviedb.org/3/discover/movie?api_key=$%7BAPI_KEY_HERE%7D&with_genres=27
// //https://api.themoviedb.org/3/discover/movie?api_key=$%7BAPI_KEY_HERE%7D&with_genres=10749
//https://api.themoviedb.org/3/discover/movie?api_key=$%7BAPI_KEY_HERE%7D&with_genres=35
//https://api.themoviedb.org/3/discover/movie?api_key=$%7BAPI_KEY_HERE%7D&with_genres=35