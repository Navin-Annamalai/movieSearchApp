const API_KEY = "4dcbcbe6";
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (query, page = 1, type = '') => {
const url = `${BASE_URL}?apikey=${API_KEY}&s=${query}&page=${page}&type=${type}`;
const res = await fetch(url);
return res.json(); 
}
export const getMovieDetails = async (id) => {
    const url = `${BASE_URL}?apikey=${API_KEY}&i=${id}`;
    const res = await fetch(url);
    return res.json(); 
    }

 