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
  width: 270px;
  border: 1px solid red;
  h2 {
  }
`;

const CoverImg = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
  img {
  }
`;
