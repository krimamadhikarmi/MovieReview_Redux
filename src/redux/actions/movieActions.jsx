export const FETCH_MOVIE_REQUEST = 'FETCH_MOVIE_REQUEST';
export const ADD_REVIEW = 'ADD_REVIEW';

export const fetchMovieRequest = (data) => ({
  type: FETCH_MOVIE_REQUEST,
  payload: data
});

export const addReviewnew = (data) => ({
  type: ADD_REVIEW,
  payload: data
});

