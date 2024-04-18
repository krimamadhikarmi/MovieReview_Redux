import { ADD_REVIEW, FETCH_MOVIE_REQUEST } from "../actions/movieActions";

const initialState = {
  movies: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_REQUEST:
      return { ...state, movies: action.payload };
    case ADD_REVIEW:
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.mid === action.payload.id
            ? {
                ...movie,
                reviews: [...movie.reviews, action.payload],
              }
            : movie
        ),
      };
    default:
      return state;
  }
};

export default movieReducer;
