import React, { useEffect, useState } from "react";
import { movieType } from "../interface/movie";
import axios from "axios";
import MainPage from "./MainPage";
import styled from "@emotion/styled";
import Pagination from "./Pagination";

export default function MoviePage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<movieType[]>([]);
  const [limit, setLimit] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const offset: number = (page - 1) * limit;

  /**
   * api 가져오기
   */

  const changePageValue = (newPage: number): void => {
    setPage(newPage);
  };

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
      <Container id="movieList">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <h3>Movie List</h3>
            <Wrapper>
              {movies.slice(offset, offset + limit).map((movie) => (
                <MainPage key={movie.title} movie={movie} />
              ))}
            </Wrapper>
            <footer>
              <Pagination
                total={movies.length}
                limit={limit}
                page={page}
                setPage={changePageValue}
              />
            </footer>
          </>
        )}
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 0 0 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1d282e;
  h1 {
    color: #fff;
  }
  h3 {
    text-align: center;
    font-size: 50px;
    font-weight: 500;
    color: #fff;
  }
`;

const Wrapper = styled.div`
  gap: 30px;
  display: grid;
  grid-template-columns: repeat(5, auto);
`;
