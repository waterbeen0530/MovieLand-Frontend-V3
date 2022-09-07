import React, { useEffect, useState } from "react";
import { movieType } from "../interface/movie";
import axios from "axios";
import MainPage from "./MainPage";

export default function MoviePage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<movieType[]>([]);

  const getMovies = async () => {
    await axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=5149e375caed16cdf49f1917f58cc390&language=ko-KR`
    ).then((res) => {
      const data = res.data.results;
      setMovies(data);
    });
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <h3>Movie List</h3>
            <div>
              {movies.map((movie) => (
                <MainPage key={movie.title} movie={movie} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
