import { movieType } from "../interface/movie";

interface props {
  movie: movieType;
}

export default function MainPage({ movie }: props) {
  return (
    <>
      <h1>{movie.movieNm}</h1>
    </>
  );
}
