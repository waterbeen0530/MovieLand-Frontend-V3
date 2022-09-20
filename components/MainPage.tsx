import styled from "@emotion/styled";
import { movieType } from "../interface/movie";

interface props {
  movie: movieType;
}

export default function MainPage({ movie }: props) {
  return (
    <Container>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt=""
      />

      <h1>{movie.title}</h1>
    </Container>
  );
}

const Container = styled.div`
  width: 185px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  background: #fff;
  img {
    width: 170px;
    height: 100%;
    margin: 7px 0 0;
  }
  h1 {
    width: 170px;
    text-align: center;
    font-size: 17px;
    color: #1d282e;
  }
`;
