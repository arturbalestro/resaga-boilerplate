import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  font-family: Arial;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  text-align: center;
  padding: 20px;

  a {
    border-bottom: 1px solid white;
    color: white;
    padding-bottom: 1px;
    text-decoration: none;

    &:hover {
      border-bottom: 1px solid transparent;
    }
  }
`;
