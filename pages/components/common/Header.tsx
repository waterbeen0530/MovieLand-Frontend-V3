import styled from "@emotion/styled";

export default function Header() {
  return (
    <Container>
      <h2>MovieLand</h2>
      <div>
        <p>Introduce</p>
        <p>Movie list</p>
        <p>Developer</p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  z-index: 100;
  position: fixed;
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1d282e;

  h2 {
    margin: 0 0 0 10px;
    padding-left: 193px;
    cursor: pointer;
    color: #3281b9;
  }

  div {
    padding-right: 197px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      padding-left: 20px;
      color: #fff;
      transition: all 0.5s;
    }

    p:hover {
      color: #bce1fb;
      cursor: pointer;
    }
  }
`;
