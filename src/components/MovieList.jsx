// MovieList.jsx
import React, { useEffect } from "react";
import { Movie } from "./Movie";
import { fetchMovieRequest } from "../redux/actions/movieActions";
import { useDispatch, useSelector } from "react-redux";

export function MovieList() {
  const movies = useSelector((state) => state?.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/movies/all/movie_reviews")
      .then((response) => response.json())
      .then((data) => dispatch(fetchMovieRequest(data)));
  }, [dispatch]);

  return (
    <div className="container mx-auto px-2 sm:px-4 mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </div>
  );
}
