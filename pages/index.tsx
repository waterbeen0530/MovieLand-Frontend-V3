import styled from "@emotion/styled";
import type { NextPage } from "next";
import Header from "./components/common/Header";
import IntroPage from "./components/IntroPage";

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <IntroPage />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  /* background-color: red;
  @media (max-width: 600px) {
    background-color: blue;
  } */
`;
