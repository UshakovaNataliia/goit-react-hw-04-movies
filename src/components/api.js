import Axios from 'axios';

const KEY = 'c5d319d0e0357631f00daff3a2476ce3';
const API = 'https://api.themoviedb.org/3/';

export const popularMovies = () =>
    Axios.get(`${API}movie/popular?api_key=${KEY}&language=en-US&page=1`)
        .then(res => res.data.results);

export const searchMovie = query => 
    Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`).then(res => res.data);

export const movieDetails = id => 
    Axios.get(`${API}movie/${id}?api_key=${KEY}&language=en-US`)
        .then(res => res.data);

export const movieCast = id => 
    Axios.get(`${API}movie/${id}/credits?api_key=${KEY}`)
        .then(res => res.data);

export const movieReviews = id =>
    Axios.get(`${API}movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`)
        .then(res => res.data);




