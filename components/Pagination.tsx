import styled from "@emotion/styled";

interface props {
  total: number;
  limit: number;
  page: number;
  setPage: (newPage: number) => void;
}

export default function Pagination({ total, limit, page, setPage }: props) {
  const numPages = Math.ceil(total / limit);
  return (
    <>
      <Container>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </button>
        <button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </button>
      </Container>
    </>
  );
}

const Container = styled.div`
  button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    outline: none;
  }
`;
