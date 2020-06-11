import styled from "styled-components";

export const StyledHeader = styled.header`
  background: purple;
  display: flex;
  font-family: Arial;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  text-align: center;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;

  h1 {
    font-weight: bold;
    margin-bottom: 0;
  }
  h2 {
    font-size: 1.3rem;
    font-weight: bold;
    margin-top: 5px;
  }

  ul {
    margin: 0;
    padding: 0;
    text-align: left;
  }
`;
