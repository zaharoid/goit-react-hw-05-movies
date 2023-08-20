import axios from 'axios';
const KEY = 'a81f67cfcb4d5e6663d9f2cbb7c2c958';

async function getTrending() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?language=en-US`,
      {
        params: {
          api_key: KEY,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

async function getMovieById(id) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      {
        params: {
          api_key: KEY,
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function getMovieByName(query) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      {
        params: {
          api_key: KEY,
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function getMovieCast(id) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
      {
        params: {
          api_key: KEY,
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function getMovieReviews(id) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
      {
        params: {
          api_key: KEY,
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

export {
  getTrending,
  getMovieById,
  getMovieByName,
  getMovieCast,
  getMovieReviews,
};
