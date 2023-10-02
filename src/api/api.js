import axios from 'axios';

const API_KEY = '3fb9a5ee55da5b3facd5e3cf918e4b4d';

const BASE_URL = 'https://api.themoviedb.org/3/';

async function getTrendingMovies() {
  try {
    const response = await axios.get(
      `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
    );
    const data = response.data;
    const results = data.results;
    return results;
  } catch (error) {
    console.error(error);
  }
}

async function getMovieById(id) {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${id}?api_key=${API_KEY}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

async function getCast(id) {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US&page=1`
    );
    const data = response.data;
    const cast = data.cast;
    return cast;
  } catch (error) {
    console.error(error);
  }
}

async function getReviews(id) {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`
    );
    const data = response.data;
    const results = data.results;
    return results;
  } catch (error) {
    console.error(error);
  }
}

async function getMovieByName(query) {
  try {
    const response = await axios.get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`
    );
    const data = response.data;
    const results = data.results
    return results;
  } catch (error) {
    console.error(error);
  }
}

export { getTrendingMovies, getMovieById, getCast, getReviews, getMovieByName };

// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
