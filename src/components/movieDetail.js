import styled from "styled-components";

export const MovieDetail = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    margin: 3rem 0;
  }

  img {
    width: 300px;
    border-radius: 1rem;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 4rem;
    max-width: 50%;
  }

  button {
    background: #6654da;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    color: white;
    padding: 0.8rem 2rem;
    margin-top: 1rem;
    font-size: 100%;
    transition: .4s;
  }

  button:hover {
    background: #5848c2;
  }

  p {
    line-height: 130%;
    margin-bottom: 1rem;
    font-size: 110%;
  }

  span {
    opacity: .p;
  }
`
