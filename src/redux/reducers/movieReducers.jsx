import { ADD_REVIEW, FETCH_MOVIE_REQUEST } from "../actions/movieActions";

const initialState = {
  movies: [],
};

const movieReducer = (state = initialState, action) => {
  if (action.type === FETCH_MOVIE_REQUEST) {
    return { ...state, movies: action.payload };
  } else if (action.type === ADD_REVIEW) {  
    return {
      ...state,
      movies: state.movies.map(movie =>
        movie.mid === action.payload.id ? {
          ...movie,
          reviews: [...movie.reviews, action.payload],
        } : movie
      ),
    }; 
  }
};

export default movieReducer;
