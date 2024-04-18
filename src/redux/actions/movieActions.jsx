export const FETCH_MOVIE_REQUEST = 'FETCH_MOVIE_REQUEST';
export const ADD_POST = 'ADD_POST';

export const fetchMovieRequest = (data) => ({
  type: FETCH_MOVIE_REQUEST,
  payload: data
});

