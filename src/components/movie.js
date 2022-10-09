import styled from "styled-components";

export const Movie = styled.li`
  text-align: center;

  img {
    width: 180px;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-weight: bold;
    font-size: 120%;
  }

  a img {
    transition: 0.4s;
  }

  a:hover img {
    transform: scale(1.08);
  }
`;
