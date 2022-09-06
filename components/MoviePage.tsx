import React, { useEffect, useState } from "react";
import { movieType } from "../interface/movie";
import axios from "axios";
import { getGenreReg, getTitleReg } from "../utils/stop19";
import MainPage from "./MainPage";

export default function MoviePage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<movieType[]>([]);

  const stop19 = (movies: movieType[]) => {
    const newMovies = movies
      .filter((movie) => !getGenreReg().test(movie.genreAlt))
      .filter((movie) => !getTitleReg().test(movie.movieNm));
    return newMovies;
  };

  const getMovies = async () => {
    await axios(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=bba8188bdc9b91963c5ddf1d999832f6&itemPerPage=100`
    ).then((res) => {
      const data = res.data.movieListResult.movieList;
      setMovies(stop19(data));
    });
    setLoading(false);
  };

  useEffect(() => {
    console.log(movies);
  }, [movies]);

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
                <MainPage key={movie.movieCd} movie={movie} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
